import cn from 'classnames';

import s from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};
