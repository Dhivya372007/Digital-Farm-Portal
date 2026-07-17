import { ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';
export const QuickActionCard = ({ icon: Icon, title, description, onClick }) => <button onClick={onClick} className="text-left"><Card className="h-full transition-shadow duration-150 hover:shadow-md"><Icon className="h-6 w-6 text-primary"/><h3 className="mt-5 text-base font-semibold text-text-primary">{title}</h3><p className="mt-1 text-sm text-text-secondary">{description}</p><ArrowRight className="mt-5 h-4 w-4 text-text-secondary"/></Card></button>;
