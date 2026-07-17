export const LoadingSkeleton = ({ variant = 'card' }) => <div className={`animate-pulse rounded-2xl bg-gray-200 ${variant === 'table' ? 'h-64' : variant === 'profile' ? 'h-96' : 'h-32'}`}/>;
