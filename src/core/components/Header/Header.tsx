import * as React from "react";
import { Link } from "react-router-dom";

import { Container } from "../Container";
import { Logo } from "../Logo";
import { Icon } from "../Icon";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <Logo />
            </li>

            <li className={s.navItem}>
              <Link to="/settings">
                <Icon name="gear" width="32" height="32" />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
