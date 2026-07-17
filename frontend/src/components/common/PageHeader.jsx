import React from 'react';

/**
 * Reusable page section header.
 * @param {string} title - Main heading (32px, weight 600)
 * @param {string} [subtitle] - Optional muted subtitle
 * @param {React.ReactNode} [actions] - Optional right-aligned action buttons
 */
export default function PageHeader({ title, subtitle, actions }) {
    return (
        <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="text-[32px] font-semibold text-text-primary tracking-tight leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-[14px] text-text-secondary mt-1">{subtitle}</p>
                )}
            </div>
            {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
    );
}
