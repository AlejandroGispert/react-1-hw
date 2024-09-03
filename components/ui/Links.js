"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Links() {
  return (
    <div className={styles.pages}>
      <h3>Pages</h3>
      <ul>
        <li>
          <Link href="/about_us">About Us</Link>
        </li>
        <li>
          <Link href="/destination">Destination</Link>
        </li>
        <li>
          <Link href="/nasa_collaboration">Nasa Collaboration</Link>
        </li>
      </ul>
    </div>
  );
}
