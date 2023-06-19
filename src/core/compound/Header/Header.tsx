import { useLocation } from 'react-router-dom';

import { Title } from '@core/components/Title';

import { PAGE_NAMES } from './constants';

import s from './Header.module.css';

export const Header = () => {
  const location = useLocation();

  return (
    <div className={s.root}>
      <Title>{PAGE_NAMES[location.pathname]}</Title>
    </div>
  );
};
