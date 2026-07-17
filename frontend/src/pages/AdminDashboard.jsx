import { Activity, Building2, PawPrint, ShieldAlert } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { Card } from '../components/common/Card';
export default function AdminDashboard() { return <div className="space-y-8"><PageHeader title="Admin Dashboard" subtitle="System-wide compliance and statistics."/><div className="grid grid-cols-4 gap-6"><SummaryCard icon={Building2} value="24" label="Registered Farms"/><SummaryCard icon={PawPrint} value="127" label="Registered Animals"/><SummaryCard icon={Activity} value="96%" label="Compliance" color="text-success"/><SummaryCard icon={ShieldAlert} value="3" label="Violations" color="text-danger"/></div><Card><h2 className="text-xl font-semibold">System Health</h2><p className="mt-2 text-sm text-text-secondary">All core compliance services are operating normally.</p></Card></div>; }
