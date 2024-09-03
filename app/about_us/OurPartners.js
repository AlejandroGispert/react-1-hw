import Image from "next/image";
import logoAlpha from "../../public/business_partners/alphabet-logo.png";
import logoAmazon from "../../public/business_partners/amazon_logo.png";
import logoCbc from "../../public/business_partners/CBC_Logo_White.png";
import logoMicrosoft from "../../public/business_partners/Microsoft-Logo-white.png";
import logoNyu from "../../public/business_partners/nyu-logo.png";
import logoQueens from "../../public/business_partners/QueensLogo_white.png";
import logoSamsung from "../../public/business_partners/samsung-logo.png";
import logoSodexo from "../../public/business_partners/sodexo-logo.png";
import styles from "./page.module.css";

export default function OurPartners() {
  return (
    <>
      <Image className={styles.logos} src={logoAlpha} width={100}></Image>
      <Image className={styles.logos} src={logoAmazon} width={100}></Image>
      <Image className={styles.logos} src={logoCbc} width={100}></Image>
      <Image className={styles.logos} src={logoMicrosoft} width={100}></Image>
      <Image className={styles.logos} src={logoNyu} width={100}></Image>
      <Image className={styles.logos} src={logoQueens} width={100}></Image>
      <Image
        className={styles.logos}
        src={styles.logoSamsung}
        width={100}
      ></Image>
      <Image className={styles.logos} src={logoSodexo} width={100}></Image>
    </>
  );
}
