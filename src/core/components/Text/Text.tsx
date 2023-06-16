import cn from 'classnames';
import s from './Text.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextProps {
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ size = 'xs', children, className }: TextProps) => {
  return <p className={cn(s.root, s[size], className)}>{children}</p>;
};
