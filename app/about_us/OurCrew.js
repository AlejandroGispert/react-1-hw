import { Img } from "@chakra-ui/react";

import image4 from "../../public/crew/image-victor-glover.png";
import image5 from "../../public/crew/nasaCrewMember1.jpg";
import image6 from "../../public/crew/nasaCrewMember2.webp";
import Image from "next/image";
import HanaLeePic from "../../public/crew/astronautHanaLee.webp";
import PatelPic from "../../public/crew/astronautPatel.webp";
import styles from "./OurCrew.module.css";

export default function OurCrew() {
  return (
    <>
      <h4 className={styles.theH4}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal:{" "}
        <span className={styles.theH4span}>
          to make space travel accessible and exciting for all.
        </span>
      </h4>
      <div className={styles.pictureContainer}>
        <div>
          <Image
            className={styles.crewImages}
            src={image5}
            alt="picture"
            priority
          />
          <h6>Captain Sarah Vega:</h6>
          <p className={styles.paragraph}>
            {" "}
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>
        <div>
          <Image
            className={styles.crewImages}
            src={image4}
            alt="Profile picture of  Dr. Leo Redding"
            objectFit="cover"
            priority
          />
          <h6>Dr. Leo Redding</h6>
          <p className={styles.paragraph}>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </div>
        <div>
          <Image
            className={styles.crewImages}
            src={HanaLeePic}
            alt="profile picture of Chief Engineer Hana Lee"
            objectFit="cover"
            priority
          />
          <h6>Chief Engineer Hana Lee:</h6>
          <p className={styles.paragraph}>
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </div>
        <div>
          <Image
            className={styles.crewImages}
            src={image6}
            alt="profile picture of Mission Specialist Alex Santos"
            objectFit="cover"
            priority
          />
          <h6>Mission Specialist Alex Santos:</h6>
          <p className={styles.paragraph}>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>
        <div>
          <Image
            className={styles.crewImages}
            src={PatelPic}
            alt="profile picture of Crew Member Maya Patel"
            objectFit="cover"
            priority
          />
          <h6>Crew Member Maya Patel:</h6>
          <p className={styles.paragraph}>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>
      </div>
    </>
  );
}
