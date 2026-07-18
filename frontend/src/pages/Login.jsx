import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, ArrowRight } from 'lucide-react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleLogin = async (selectedRole) => {

        setLoading(true);
        setError('');

        const response = await login(
            email,
            password
        );


        if (response.success) {

            /*
                Verify selected dashboard role
                matches database role
            */

            if (
                response.data.role.toLowerCase() !== selectedRole.toLowerCase()
            ) {

                setError(
                    `Account is not registered as ${selectedRole}`
                );

                setLoading(false);
                return;

            }


            navigate(
                `/${selectedRole}/dashboard`
            );

        }
        else {

            setError(response.message);

        }


        setLoading(false);

    };


    return (

        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">

            <div className="w-full max-w-md">


                <div className="flex items-center justify-center gap-3 mb-10">

                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">

                        <Shield
                            className="w-5 h-5 text-white"
                            strokeWidth={2.5}
                        />

                    </div>


                    <div>

                        <h1 className="text-[22px] font-bold text-text-primary">
                            AgriSafe
                        </h1>

                        <p className="text-[12px] text-text-secondary">
                            Livestock Compliance Portal
                        </p>

                    </div>

                </div>


                <div className="bg-white rounded-2xl border border-border p-8">


                    <h2 className="text-[20px] font-semibold text-text-primary mb-1">
                        Welcome back
                    </h2>


                    <p className="text-[14px] text-text-secondary mb-6">
                        Sign in to access your workspace
                    </p>



                    <div className="space-y-4 mb-8">


                        <div>

                            <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                                Email
                            </label>


                            <input

                                type="email"

                                value={email}

                                onChange={(e)=>
                                    setEmail(e.target.value)
                                }

                                placeholder="Enter your email"

                                className="w-full px-4 py-2.5 rounded-xl border border-border text-[14px]"
                            />

                        </div>



                        <div>

                            <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                                Password
                            </label>


                            <input

                                type="password"

                                value={password}

                                onChange={(e)=>
                                    setPassword(e.target.value)
                                }

                                placeholder="Enter your password"

                                className="w-full px-4 py-2.5 rounded-xl border border-border text-[14px]"
                            />

                        </div>


                    </div>



                    <div className="space-y-3">


                        <button

                            disabled={loading}

                            onClick={() =>
                                handleLogin('farmer')
                            }

                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-primary text-white text-[14px] font-medium"

                        >

                            Login as Farmer

                            <ArrowRight className="w-4 h-4"/>

                        </button>



                        <button

                            disabled={loading}

                            onClick={() =>
                                handleLogin('vet')
                            }

                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border text-text-primary text-[14px] font-medium"

                        >

                            Login as Vet

                            <ArrowRight className="w-4 h-4"/>

                        </button>



                    </div>



                    {
                        error &&
                        <p className="text-sm text-red-600 text-center mt-4">
                            {error}
                        </p>
                    }



                </div>


            </div>

        </div>

    );

}
