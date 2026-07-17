import { Badge } from '../common/Badge';
const labels = { safe: 'Safe To Sell', withdrawal: 'Withdrawal', violation: 'Violation' };
export const AnimalStatusBadge = ({ status }) => <Badge variant={status}>{labels[status] || 'Inactive'}</Badge>;
