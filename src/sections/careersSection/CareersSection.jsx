import HorizontalLine from "@/components/HorizontalLine/HorizontalLine";
import styles from "./CareersSection.module.scss";
import Image from "next/image";
import Link from "next/link";

const CareersSection = () => {
  return (
    <section className={styles.section}>
      <div className="contentContainer">
        <h4 className={`title ${styles.careersTitle}`}>Careers</h4>
        <h5 className={`body ${styles.careersOffices}`}>Our Offices</h5>
        <HorizontalLine className={styles.officesLine} />

        <ul className={styles.officesList}>
          <li className="title">Houston, TX (Headquarters)</li>
          <li className="title">Dallas, TX</li>
          <li className="title">Austin, TX</li>
        </ul>

        <Image
          className={styles.careersPhoto}
          src="/images/careers.webp"
          width={335}
          height={335}
          alt="Our careers photo"
        />

        <div className={styles.awards}>
          <svg className={styles.iconPlanet}>
            <use href="/sprite.svg#icon-planet-dark"></use>
          </svg>
          <p className="body">
            OTHON provides equal employment opportunities to all employees and
            applicants for employment and prohibits discrimination and
            harassment of any type without regard to race, color, religion, age,
            sex, national origin, disability status, genetics, protected veteran
            status, sexual orientation, gender identity or expression, or any
            other characteristic protected by federal, state or local laws.
          </p>
        </div>

        <Link href="/" className={styles.careersLink}>
          <span className={styles.linkText}>List Job Openings</span>
          <svg className={styles.arrow}>
            <use href="/sprite.svg#icon-arrow-orange" />
          </svg>
        </Link>

        <Link href="/" className={styles.careersLink}>
          <span className={styles.linkText}>Apply Now</span>
          <svg className={styles.arrow}>
            <use href="/sprite.svg#icon-arrow-orange" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CareersSection;

// src/sections/careersSection/CareersSection.module.scss
