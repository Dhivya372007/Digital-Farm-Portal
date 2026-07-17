import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, CheckCircle2, PawPrint, ShieldAlert } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { LoadingSkeleton } from '../components/common/LoadingSkeleton';
import { EmptyState } from '../components/common/EmptyState';
import { AlertBanner } from '../components/common/AlertBanner';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { WithdrawalTable } from '../components/dashboard/WithdrawalTable';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { QuickActionCard } from '../components/dashboard/QuickActionCard';
import { animalService } from '../services/animalService';
import { drugService } from '../services/drugService';
import { alertService } from '../services/alertService';
import { activityService } from '../services/activityService';
import { useApp } from '../context/AppContent';

export default function FarmerDashboard() {
    const [state, setState] = useState({ loading: true, animals: [], administrations: [], drugs: [], activities: [], alerts: [] }); const { refreshTrigger } = useApp(); const navigate = useNavigate();
    const load = async () => { const [animals, administrations, drugs, activities, alerts] = await Promise.all([animalService.getAnimals(), drugService.getDrugHistory(), drugService.getDrugs(), activityService.getActivities(), alertService.getAlerts()]); setState({ loading: false, animals: animals.data, administrations: administrations.data, drugs: drugs.data, activities: activities.data.slice(0, 5), alerts: alerts.data }); };
    useEffect(() => { load(); }, [refreshTrigger]);
    if (state.loading) return <LoadingSkeleton variant="dashboard"/>;
    const withdrawalRows = state.animals.filter((animal) => animal.currentStatus === 'withdrawal').map((animal) => ({ animal, administration: state.administrations.find((item) => item.id === animal.currentDrugAdministrationId), drug: state.drugs.find((drug) => drug.id === state.administrations.find((item) => item.id === animal.currentDrugAdministrationId)?.drugId) })).filter((row) => row.administration);
    const counts = { total: state.animals.length, withdrawal: withdrawalRows.length, safe: state.animals.filter((animal) => animal.currentStatus === 'safe').length, violation: state.animals.filter((animal) => animal.currentStatus === 'violation').length };
    return <div className="space-y-8"><PageHeader title="Dashboard" subtitle="Overview of your farm's compliance status"/>{state.alerts.filter((alert) => alert.type === 'danger').map((alert) => <AlertBanner key={alert.id} alert={alert} onDismiss={async (id) => { await alertService.dismissAlert(id); load(); }}/>) }<div className="grid grid-cols-4 gap-6"><SummaryCard icon={PawPrint} value={counts.total} label="Registered Animals"/><SummaryCard icon={Activity} value={counts.withdrawal} label="Under Withdrawal" color="text-warning"/><SummaryCard icon={CheckCircle2} value={counts.safe} label="Safe To Sell" color="text-success"/><SummaryCard icon={ShieldAlert} value={counts.violation} label="Sale Violations" color="text-danger"/></div><section><h2 className="mb-4 text-xl font-semibold">Animals Under Withdrawal</h2>{withdrawalRows.length ? <WithdrawalTable rows={withdrawalRows}/> : <EmptyState title="No animals under withdrawal" description="All animals are currently safe to sell."/>}</section>{state.activities.length > 0 && <RecentActivity activities={state.activities}/>}<section><h2 className="mb-4 text-xl font-semibold">Quick Actions</h2><div className="grid grid-cols-3 gap-6"><QuickActionCard icon={PawPrint} title="Register Animal" description="Add livestock to your farm." onClick={() => navigate('/farmer/animals')}/><QuickActionCard icon={Activity} title="Administer Drug" description="Record treatment and calculate withdrawal." onClick={() => navigate('/farmer/drugs')}/><QuickActionCard icon={ShieldAlert} title="Book Consultation" description="Request a veterinary consultation." onClick={() => navigate('/farmer/consultation')}/></div></section></div>;
}
