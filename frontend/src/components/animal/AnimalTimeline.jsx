import { Clock3 } from 'lucide-react';
import { Card } from '../common/Card';
import { formatDate } from '../../utils/dateHelpers';
export const AnimalTimeline = ({ activities }) => <Card><h2 className="text-xl font-semibold text-text-primary">Timeline</h2><div className="mt-5 space-y-5 border-l border-gray-200 pl-5">{activities.map((activity) => <div key={activity.id} className="relative"><Clock3 className="absolute -left-7 top-0 h-4 w-4 bg-white text-primary"/><p className="text-sm font-medium">{activity.type}</p><p className="text-sm text-text-secondary">{activity.description}</p><p className="mt-1 text-xs text-text-secondary">{formatDate(activity.createdAt)}</p></div>)}</div></Card>;
