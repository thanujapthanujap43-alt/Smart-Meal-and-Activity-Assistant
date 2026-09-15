import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs sm:text-sm text-stone-500 mb-4 overflow-x-auto py-1">
      <Link
        to="/"
        id="breadcrumb-home"
        className="flex items-center text-stone-600 hover:text-[#1F6F4B] transition-colors whitespace-nowrap"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
          {item.href ? (
            <Link
              to={item.href}
              id={`breadcrumb-link-${index}`}
              className="hover:text-[#1F6F4B] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-900 font-medium whitespace-nowrap truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
