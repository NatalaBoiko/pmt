"use client";

import React, { useRef, useState } from "react";
import styles from "./Services.module.scss";
import { servicesData } from "../../data/servicesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";
import Image from "next/image";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = servicesData.length;
  const swiperRef = useRef(null); // Ref for Swiper

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

  const goToSlide = (index) => {
    // Use the swiper instance to navigate to the specified slide
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index); // Use slideToLoop for looping Swiper
    }
  };

  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Services</h2>
        <div className={styles.contentWrapp}>
          <ul className={styles.servicesTitles}>
            {servicesData.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={
                    activeIndex === index
                      ? styles.servicesTitlesActive
                      : styles.servicesTitlesPassive
                  }
                  onClick={() => goToSlide(index)}
                >
                  {el.titles}
                </li>
              );
            })}
          </ul>
          <Swiper
            ref={swiperRef}
            navigation={true}
            loop={true}
            scrollbar={{ draggable: true, hide: false }}
            modules={[Navigation, Scrollbar]}
            className="servisecSwiper"
            onSlideChange={handleSlideChange}
          >
            {servicesData.map((el) => {
              return (
                <SwiperSlide key={el.id}>
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>
                      {`${el.titles[0]} ${el.titles[1]}`}
                    </h3>
                    <div className={styles.imgWrapp}>
                      <Image src={el.img} alt={el.title} fill />
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
