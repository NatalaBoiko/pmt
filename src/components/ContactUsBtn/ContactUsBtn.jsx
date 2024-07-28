"use client";

import styles from "./ContactUsBtn.module.scss";

const ContactUsBtn = ({ className }) => {
  return (
    <a href="tel:+380503738465" className={`${styles.btn} ${className}`}>
      Contact Us
    </a>
  );
};

export default ContactUsBtn;
