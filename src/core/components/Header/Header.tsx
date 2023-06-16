import { Title } from '../Title';

import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.root}>
      <Title>Header</Title>
    </div>
  );
};
