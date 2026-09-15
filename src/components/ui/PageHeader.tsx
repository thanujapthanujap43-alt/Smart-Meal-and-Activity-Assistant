import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { Badge } from './Badge';

interface PageHeaderProps {
  badge?: string;
  badgeVariant?: 'mint' | 'forest' | 'dark' | 'amber';
  title: string;
  intro: string;
  breadcrumbs: { label: string; href?: string }[];
  darkBackground?: boolean;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeVariant = 'mint',
  title,
  intro,
  breadcrumbs,
  darkBackground = false,
  children,
}) => {
  return (
    <div
      className={`border-b ${
        darkBackground
          ? 'bg-[#0E1B14] border-white/10 text-white'
          : 'bg-[#F4F5F1] border-stone-200/80 text-stone-900'
      } pt-8 pb-10 md:pt-12 md:pb-14 transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />

        <div className="mt-4 max-w-4xl">
          {badge && (
            <div className="mb-3">
              <Badge variant={badgeVariant} id="page-header-badge">
                {badge}
              </Badge>
            </div>
          )}
          <h1
            id="page-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            {title}
          </h1>
          <p
            className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
              darkBackground ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            {intro}
          </p>
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};
