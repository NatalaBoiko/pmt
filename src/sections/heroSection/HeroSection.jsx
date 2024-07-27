import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.scss";
import { servicesData } from "@/data/servicesData";

const HeroSection = () => {
  return (
    <section>
      <div className={`contentContainer ${styles.container}`}>
        <div className={styles.heroImgWrapper}>
          <div className={styles.heroImg}></div>
          <h1 className={`styleH1 ${styles.heroTitle}`}>
            Integrity Innovation Dedication
          </h1>
        </div>
        <ul className={styles.servicesList}>
          {servicesData.map((item, index) => (
            <li key={index} className={styles.serviceImgsWrapper}>
              <Image
                className={styles.serviceImg}
                src={item.img}
                alt={item.titles[0]}
                fill
                sizes="100vw"
              />
              <div className={styles.serviceImgGradient}></div>
              <div className={styles.titlesWrapper}>
                {item.titles.map((title) => (
                  <h3 key={title} className="styleH3">
                    {title}
                  </h3>
                ))}
              </div>
              <Link href={item.href} className={styles.serviceLink}>
                <svg className={styles.arrow}>
                  <use href="/sprite.svg#icon-arrow" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
