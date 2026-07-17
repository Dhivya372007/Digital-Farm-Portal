import { Inbox } from 'lucide-react';
import { Button } from './Button';
export const EmptyState = ({ title, description, actionLabel, onAction }) => <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center"><Inbox className="mx-auto mb-4 h-8 w-8 text-text-secondary"/><h3 className="text-base font-semibold text-text-primary">{title}</h3><p className="mx-auto mt-2 max-w-sm text-sm text-text-secondary">{description}</p>{actionLabel && <Button className="mt-6" onClick={onAction}>{actionLabel}</Button>}</div>;
