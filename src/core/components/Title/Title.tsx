import cn from 'classnames';

import s from './Title.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  as?: As;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ as = 'h1', size = 'xs', children, className }: TitleProps) => {
  const Heading = as;

  return <Heading className={cn(s.root, s[size], className)}>{children}</Heading>;
};
