"use client";

import styles from "./ContactUsBtn.module.scss";

const ContactUsBtn = ({ className }) => {
  return (
    <a href="/" className={`${styles.btn} ${className}`}>
      Contact Us
    </a>
  );
};

export default ContactUsBtn;
