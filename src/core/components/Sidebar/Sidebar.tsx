import { Title } from '../Title';

import s from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={s.root}>
      <Title as="h2">doggodoro</Title>
    </div>
  );
};
