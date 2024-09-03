"use client";

import { usePathname } from "next/navigation";

import Links from "./Links";
import SocialMediaItem from "./SocialMediaItem";
import facebookIcon from "../../public/socialmedia/Facebook_logo_(square).png";
import googleIcon from "../../public/socialmedia/googleicon.svg";
import InstagramIcon from "../../public/socialmedia/Instagram_icon.png";
import linkedinIcon from "../../public/socialmedia/linkedin.png";
import tiktokIcon from "../../public/socialmedia/tiktok.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <Links />

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url={"https://facebook.com"}
            title={"Facebook"}
            icon={facebookIcon}
          />
          <SocialMediaItem
            url={"https://instagram.com"}
            title={"Instagram"}
            icon={InstagramIcon}
          />
          <SocialMediaItem
            url={"https://tiktok.com"}
            title={"Tiktok"}
            icon={tiktokIcon}
          />
          <SocialMediaItem
            url={"https://google.com"}
            title={"On the streets at night"}
            icon={googleIcon}
          />
          <SocialMediaItem
            url={"https://www.linkedin.com"}
            title={"LinkedIn"}
            icon={linkedinIcon}
          />
        </ul>
      </div>
    </footer>
  );
};
