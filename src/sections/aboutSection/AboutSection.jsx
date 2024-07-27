import Image from "next/image";
import HorizontalLine from "@/components/HorizontalLine/HorizontalLine";
import { aboutData } from "@/data/aboutData";
import styles from "./AboutSection.module.scss";
import { ourHistoryData } from "@/data/ourHistoryData";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section>
      <div className="contentContainer">
        <HorizontalLine className={styles.firstLine} />
        <h4 className={`title ${styles.sectionTitle}`}>About</h4>
        <ul className={styles.aboutList}>
          {aboutData.map((item) => (
            <li key={item.id}>
              <h2 className={`styleH2 ${styles.dataTitle}`}>{item.title}</h2>
              <p className={`body ${styles.dataText} ${styles[item.id]}`}>
                {item.text}
              </p>
              <HorizontalLine
                className={`${styles.dataHR} ${styles[item.id]}`}
              />
            </li>
          ))}
        </ul>

        <Image
          className={styles.video}
          src="/images/aboutUs.gif"
          width={375}
          height={480}
          alt="я джифка"
        />

        <HorizontalLine className={styles.firstLine} />
        <h4 className={`title ${styles.sectionTitle}`}>About</h4>
        <h2 className={`styleH2 ${styles.aboutFilm}`}>
          OTHON is recognized as a multi-discipline civil engineering firm. It
          was incorporated in 1996 in Houston, Texas, by the late F. William
          Othon, P.E. 
        </h2>

        <div className={styles.awards}>
          <svg className={styles.iconPlanet}>
            <use href="/sprite.svg#icon-planet-dark"></use>
          </svg>
          <h4 className={`styleH2 ${styles.titleAwards}`}>
            Today OTHON is an award-winning company with over 100 employees.{" "}
          </h4>
          <p className="body">
            Our diverse group of Professional Engineers, designers and team
            members lead the way by providing a full range of design services in
            roads and highways, bridges and structural engineering,
            transportation planning, traffic engineering, high speed rail
            systems, pumping and drainage networks, airports, municipal
            infrastructure, intelligent transportation systems, construction
            services, public involvement and program management services for all
            levels of government agencies as well as private developers.
          </p>
        </div>

        <ul className={styles.ourHistoryList}>
          {ourHistoryData.map((item) => (
            <li key={item.id}>
              <Image
                className={`${styles.ourHistoryPhoto} ${styles[item.id]}`}
                src={item.imageSrc}
                width={335}
                height={335}
                alt="Our history photo"
              />
              <HorizontalLine className={styles.historyHR} />
              <p className={`body ${styles[item.id]}`}>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.aboutUsCard}>
          <h4 className="title">About Us</h4>
          <h3 className={`styleH3 ${styles.competencies}`}>
            History and competencies of the company.
          </h3>

          <Link href="/" className={styles.aboutUsLink}>
            <svg className={styles.aboutUsArrow}>
              <use href="/sprite.svg#icon-arrow-in-circle" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
