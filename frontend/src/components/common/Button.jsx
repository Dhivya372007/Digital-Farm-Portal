export const Button = ({ children, variant = 'primary', size = 'medium', className = '', loading = false, type = 'button', ...props }) => {
    const variants = { primary: 'bg-primary text-white hover:bg-primary-700', secondary: 'border border-border bg-white text-text-primary hover:bg-gray-50', danger: 'bg-danger text-white hover:bg-red-700', success: 'bg-success text-white hover:bg-green-700', ghost: 'text-text-secondary hover:bg-gray-100' };
    const sizes = { small: 'min-h-9 px-3 text-sm', medium: 'min-h-11 px-4 text-sm', large: 'min-h-12 px-5 text-base' };
    return <button type={type} disabled={loading || props.disabled} className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-150 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{loading ? 'Saving…' : children}</button>;
};
