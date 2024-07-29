"use client";

import React, { useEffect, useState } from "react";
import styles from "./Services.module.scss";
import { servicesData } from "../../data/servicesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = servicesData.length;

  const calculateScrollbarWidth = (index) => {
    // Calculate the width of the scrollbar based on the current index
    return `${((index + 1) / slideCount) * 100}%`;
  };

  const handleSlideChange = (swiper) => {
    // Check if the loop is enabled and if the swiper has reset to the first slide
    if (swiper.isBeginning) {
      setActiveIndex(0);
    } else {
      setActiveIndex(swiper.realIndex);
    }
  };

  return (
    <section>
      <h2 className={styles.title}>Services</h2>

      <Swiper
        navigation={true}
        loop={true}
        scrollbar={{ draggable: true, hide: false }}
        modules={[Navigation, Scrollbar]}
        className="servisecSwiper"
        // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={handleSlideChange}
      >
        {servicesData.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>
                  {`${el.titles[0]} ${el.titles[1]}`}
                </h3>
                <p
                  className={styles.slideText}
                  style={{
                    backgroundImage: `url(${el.img})`,
                    backgroundSize: "cover", // To make sure image covers the div
                    backgroundPosition: "center", // Center the image within the div
                  }}
                >
                  {el.text}
                </p>
              </div>
            </SwiperSlide>
          );
        })}

        <div className={styles.scrollbarWrapp}>
          <div
            className={styles.scrollbar}
            style={{
              width: calculateScrollbarWidth(activeIndex),
            }}
          ></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Services;
