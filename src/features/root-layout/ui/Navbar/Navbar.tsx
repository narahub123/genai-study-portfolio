import styles from "./Navbar.module.css";
import { joinClassNames, navArr } from "../../../../shared";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const classNames = joinClassNames([styles["navbar"], className]);

  return (
    <nav className={classNames}>
      {navArr.map((nav) => (
        <NavLink
          key={nav.path}
          to={nav.path}
          className={styles["nav__link__wrapper"]}
        >
          {({ isActive }) => (
            <span
              role="tab"
              aria-selected={isActive}
              className={joinClassNames([
                styles["nav__link"],
                isActive
                  ? styles["nav__link--active"]
                  : styles["nav__link--inactive"],
              ])}
            >
              {nav.name}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
