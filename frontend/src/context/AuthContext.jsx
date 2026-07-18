import { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/authService';
import supabase from '../config/supabase';

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const initializeAuth = async () => {
            const response = await authService.getCurrentUser();

            if (response.success) {
                setUser(response.data);
            } else {
                setUser(null);
            }

            setLoading(false);
        };


        initializeAuth();



        const {
            data: {
                subscription
            }
        } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'SIGNED_OUT') {
                setUser(null);
                return;
            }

            // Run outside the auth callback to avoid lock contention in Supabase.
            setTimeout(initializeAuth, 0);
        });



        return () => {

            subscription.unsubscribe();

        };


    }, []);




    const register = async (userData) => {

        return await authService.register(userData);

    };



    const login = async (
        email,
        password
    ) => {


        const response =
            await authService.login(
                email,
                password
            );


        if (response.success) {

            setUser(response.data);

        }


        return response;

    };




    const logout = async () => {


        const response =
            await authService.logout();


        if (response.success) {

            setUser(null);

        }


        return response;

    };



    return (

        <AuthContext.Provider

            value={{
                user,
                loading,
                register,
                login,
                logout
            }}

        >

            {children}

        </AuthContext.Provider>

    );

};




export const useAuth = () => {

    const context =
        useContext(AuthContext);


    if (!context) {

        throw new Error(
            'useAuth must be used within AuthProvider'
        );

    }


    return context;

};
