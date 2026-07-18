import supabase from '../config/supabase';
import { profileService } from './profileService';

export const authService = {

    async register(userData) {

        const {
            email,
            password,
            fullName,
            phone,
            farmName,
            address,
            roleId
        } = userData;

        if (!email || !password || !fullName || !roleId) {
            return {
                success: false,
                message: 'Email, password, full name, and role are required.'
            };
        }

        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            return {
                success: false,
                message: error.message
            };
        }

        const user = data.user;

        if (!user) {
            return {
                success: false,
                message: 'Registration failed.'
            };
        }

        // With email confirmation enabled, Supabase intentionally returns an
        // obfuscated user (with no identities) when this email already exists.
        // That user does not exist in auth.users, so inserting a profile for it
        // would violate profiles.id -> auth.users.id.
        if (Array.isArray(user.identities) && user.identities.length === 0) {
            return {
                success: true,
                message: 'If this email is new, check your inbox to confirm the account.'
            };
        }

        const { error: profileError } = await supabase
            .from('profiles')
            .insert({
                id: user.id,
                role_id: roleId,
                full_name: fullName,
                phone,
                farm_name: farmName,
                address
            });

        if (profileError) {
            return {
                success: false,
                message: profileError.message
            };
        }

        return {
            success: true,
            message: data.session
                ? 'Registration successful.'
                : 'Registration successful. Check your email to confirm your account.'
        };
    },

    async login(email, password) {

        const { error } =
            await supabase.auth.signInWithPassword({
                email,
                password
            });

        if (error) {
            return {
                success: false,
                message: error.message
            };
        }

        return this.getCurrentUser();
    },

    async logout() {

        const { error } = await supabase.auth.signOut();

        if (error) {
            return {
                success: false,
                message: error.message
            };
        }

        return {
            success: true
        };
    },

    async getCurrentUser() {

        const { data, error } = await supabase.auth.getUser();

        if (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }

        const user = data.user;

        if (!user) {
            return {
                success: true,
                data: null
            };
        }

        const profile =
            await profileService.getProfile(user.id);

        if (!profile.success) {
            return profile;
        }

        return {
            success: true,
            data: {
                id: user.id,
                email: user.email,
                fullName: profile.data.full_name,
                phone: profile.data.phone,
                farmName: profile.data.farm_name,
                address: profile.data.address,
                role: profile.data.roles?.role_name?.toLowerCase() ?? null
            }
        };
    },

    async getSession() {

        const { data, error } =
            await supabase.auth.getSession();

        if (error) {
            return { success: false, message: error.message, data: null };
        }

        return {
            success: true,
            data: data.session
        };
    },

    async getRole() {

        const user =
            await this.getCurrentUser();

        if (!user.success || !user.data)
            return null;

        return user.data.role;
    },

    async isAuthenticated() {

        const session =
            await this.getSession();

        return Boolean(session.data);
    }

};
