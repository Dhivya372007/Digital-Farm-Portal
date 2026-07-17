import { Clock3 } from 'lucide-react';
import { Card } from '../common/Card';
import { formatDate } from '../../utils/dateHelpers';
export const RecentActivity = ({ activities }) => <Card><h2 className="text-xl font-semibold text-text-primary">Recent Activity</h2><div className="mt-5 space-y-4">{activities.map((activity) => <div key={activity.id} className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-text-secondary"/><div><p className="text-sm font-medium text-text-primary">{activity.type}</p><p className="text-sm text-text-secondary">{activity.description}</p><p className="mt-1 text-xs text-text-secondary">{formatDate(activity.createdAt)}</p></div></div>)}</div></Card>;
