import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import supabase from '../config/supabase';

export default function RegisterUser() {

    const navigate = useNavigate();

    const { register } = useAuth();

    const [form, setForm] = useState({
        email: '',
        password: '',
        fullName: '',
        phone: '',
        farmName: '',
        address: '',
        roleId: ''
    });

    const [roles, setRoles] = useState([]);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const updateField = (field, value) => {

        setForm({
            ...form,
            [field]: value
        });

    };

    useEffect(() => {

        const loadRoles = async () => {

            const { data, error } = await supabase
                .from('roles')
                .select('role_id, role_name')

            if (!error) {
                setRoles(data);
            }

        };

        loadRoles();

    }, []);

    const handleRegister = async (event) => {

        event.preventDefault();

        setLoading(true);
        setMessage('');

        const response = await register(form);

        setLoading(false);

        if (response.success) {

            setMessage(
                'Registration successful. Please login.'
            );

            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } else {

            setMessage(response.message);

        }

    };


    return (

        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">

            <div className="w-full max-w-md">

                <div className="flex items-center justify-center gap-3 mb-8">

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
                            Create Account
                        </p>

                    </div>

                </div>


                <form
                    onSubmit={handleRegister}
                    className="bg-white rounded-2xl border border-border p-8 space-y-4"
                >

                    <InputField
                        label="Full Name"
                        value={form.fullName}
                        onChange={(v) =>
                            updateField('fullName', v)
                        }
                    />


                    <InputField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(v) =>
                            updateField('email', v)
                        }
                    />


                    <InputField
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(v) =>
                            updateField('password', v)
                        }
                    />


                    <InputField
                        label="Phone"
                        value={form.phone}
                        onChange={(v) =>
                            updateField('phone', v)
                        }
                    />


                    <InputField
                        label="Farm Name"
                        value={form.farmName}
                        onChange={(v) =>
                            updateField('farmName', v)
                        }
                    />


                    <InputField
                        label="Address"
                        value={form.address}
                        onChange={(v) =>
                            updateField('address', v)
                        }
                    />


                    <div>

                        <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                            Role
                        </label>

                        <select
                            value={form.roleId}
                            onChange={(e) =>
                                updateField(
                                    'roleId',
                                    e.target.value
                                )
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-border"
                            required
                        >

                            <option value="">
                                Select Role
                            </option>

                            {
                                roles.map((role)=>(
                                    <option
                                        key={role.role_id}
                                        value={role.role_id}
                                    >
                                        {role.role_name}
                                    </option>
                                ))
                            }
                        </select>

                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-primary text-white text-[14px] font-medium"
                    >

                        {loading
                            ? 'Creating Account...'
                            : 'Create Account'
                        }


                        <ArrowRight className="w-4 h-4"/>

                    </button>


                    {
                        message &&
                        <p className="text-sm text-center">
                            {message}
                        </p>
                    }


                </form>

            </div>

        </div>

    );

}


function InputField({
    label,
    type="text",
    value,
    onChange
}) {

    return (

        <div>

            <label className="block text-[13px] font-medium text-text-primary mb-1.5">
                {label}
            </label>

            <input

                type={type}

                value={value}

                onChange={(e)=>
                    onChange(e.target.value)
                }

                className="w-full px-4 py-2.5 rounded-xl border border-border"

                required

            />

        </div>

    );

}
