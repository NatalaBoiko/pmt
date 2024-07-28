"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import styles from "./ModalFrame.module.scss";

const ModalFrame = ({ children }) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  if (burgerMenu) {
    return <div className={styles.frame}>{children}</div>;
  } else {
    return;
  }
};

export default ModalFrame;
