import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

interface CommonProps {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function Button(props: ButtonProps | AnchorProps) {
  const isAnchor = 'href' in props && typeof (props as AnchorProps).href === 'string';

  const variant: Variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const className = props.className ?? '';
  const baseClasses = 'font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/80',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If href present, render anchor for in-page navigation or external links
  if (isAnchor) {
    const { href, children, variant: _v, size: _s, className: _c, ...anchorRest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  const { children, variant: _v, size: _s, className: _c, ...buttonRest } = props as ButtonProps;
  return (
    <button className={classes} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}