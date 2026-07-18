import { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { Button } from '../components/common/Button';
import { useApp } from '../context/AppContent';

const initialSettings = {
    fullName: 'Farmer Name',
    email: 'farmer@gmail.com',
    phone: '+91 9876543210',
    language: 'English',
    theme: 'Light',
    emailNotification: true,
    smsNotification: false,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
};

export default function Settings() {
    const [settings, setSettings] = useState(initialSettings);
    const { showToast } = useApp();

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setSettings((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleReset = () => setSettings(initialSettings);

    return <div className="space-y-8">
        <PageHeader title="Settings" subtitle="Manage your profile, security, and preferences." />

        <Card>
            <h2 className="border-b border-border pb-3 text-xl font-semibold">Profile Information</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input label="Full Name" name="fullName" value={settings.fullName} onChange={handleChange} />
                <Input label="Email" type="email" name="email" value={settings.email} onChange={handleChange} />
                <Input label="Mobile Number" name="phone" value={settings.phone} onChange={handleChange} />
                <Select label="Language" name="language" value={settings.language} onChange={handleChange} options={['English', 'Tamil', 'Hindi'].map((value) => ({ value, label: value }))} />
            </div>
        </Card>

        <Card>
            <h2 className="border-b border-border pb-3 text-xl font-semibold">Security</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                <Input type="password" name="currentPassword" placeholder="Current Password" value={settings.currentPassword} onChange={handleChange} />
                <Input type="password" name="newPassword" placeholder="New Password" value={settings.newPassword} onChange={handleChange} />
                <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={settings.confirmPassword} onChange={handleChange} />
            </div>
        </Card>

        <Card>
            <h2 className="border-b border-border pb-3 text-xl font-semibold">Preferences</h2>
            <div className="mt-6 space-y-6">
                <label className="flex items-center justify-between text-sm font-medium"><span>Email Notifications</span><input type="checkbox" name="emailNotification" checked={settings.emailNotification} onChange={handleChange} className="h-5 w-5 accent-primary" /></label>
                <label className="flex items-center justify-between text-sm font-medium"><span>SMS Notifications</span><input type="checkbox" name="smsNotification" checked={settings.smsNotification} onChange={handleChange} className="h-5 w-5 accent-primary" /></label>
                <div className="max-w-60"><Select label="Theme" name="theme" value={settings.theme} onChange={handleChange} options={['Light', 'Dark'].map((value) => ({ value, label: value }))} /></div>
            </div>
        </Card>

        <div className="flex justify-end gap-3"><Button variant="secondary" onClick={handleReset}>Reset</Button><Button onClick={() => showToast('Settings Saved Successfully!', 'success')}>Save Changes</Button></div>
    </div>;
}
