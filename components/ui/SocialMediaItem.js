import Link from "next/link";
import Image from "next/image";
import styles from "./SocialMediaItem.module.css";
export default function SocialMediaItem({ url, title, icon }) {
  return (
    <li>
      <Link href={url}>
        {title}
        <Image src={icon} className={styles.icon} />
      </Link>
    </li>
  );
}
