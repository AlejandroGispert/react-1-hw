import Link from "next/link";
import styles from "./Navbar.module.css";
import classNames from "classnames";

export default function NavItem(props) {
  return (
    <li
      className={
        props.isActive === true
          ? classNames(styles.navbarLinks, styles.isLinkActive)
          : styles.navbarLinks
      }
    >
      <Link href={props.link}>
        <b>01</b> {props.title}
      </Link>
    </li>
  );
}
