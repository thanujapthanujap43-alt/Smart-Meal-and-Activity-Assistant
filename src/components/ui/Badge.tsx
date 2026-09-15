import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'mint' | 'forest' | 'dark' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'mint',
  size = 'md',
  id,
}) => {
  const variantStyles = {
    mint: 'bg-[#6FCF97]/20 text-[#1F6F4B] border border-[#3BAA75]/30',
    forest: 'bg-[#1F6F4B] text-white border border-[#1F6F4B]',
    dark: 'bg-[#0E1B14] text-[#6FCF97] border border-white/10',
    outline: 'bg-transparent text-stone-700 border border-stone-300',
    amber: 'bg-amber-100 text-amber-800 border border-amber-300',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider font-semibold',
    md: 'text-xs sm:text-sm px-3.5 py-1 tracking-wider font-bold',
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center uppercase rounded-full whitespace-nowrap ${sizeStyles[size]} ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
};
