import HorizontalLine from "@/components/HorizontalLine/HorizontalLine";
import styles from "./ServicesSection.module.scss";
import { servicesData } from "@/data/servicesData";
import SliderArrows from "@/components/SliderArrows/SliderArrows";

const ServicesSection = () => {
  return (
    <section>
      <div className="contentContainer">
        <HorizontalLine className={styles.firstLine} />
        <h4 className={`title ${styles.sectionTitle}`}>Services</h4>

        <div className={styles.slider}>
          <h2 className={`styleH2 ${styles.slideTitle}`}>
            {servicesData[0].title}
          </h2>
          <HorizontalLine className={styles.slideLine} />
          <HorizontalLine className={styles.orangeSlideLine} />
          <ul className={styles.textCard}>
            {servicesData[0].text.map((item, index) => (
              <li key={index} className={styles.cardText}>
                {item}
              </li>
            ))}
          </ul>
          <SliderArrows />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
