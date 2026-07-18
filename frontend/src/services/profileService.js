import supabase from '../config/supabase';

export const profileService = {
    async getProfile(userId) {
        const { data, error } = await supabase
            .from('profiles')
            .select(`
                id,
                full_name,
                phone,
                farm_name,
                address,
                roles (
                    role_name
                )
            `)
            .eq('id', userId)
            .is('deleted_at', null)
            .single();

        if (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }

        return {
            success: true,
            data
        };
    }
};
