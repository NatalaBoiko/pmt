"use client";

import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";
import { navLinksData } from "@/data/navLinksData";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [burgerMenu, setBurgermenu] = useState(false);
  const [navLinks, setNavLinks] = useState(false);
  // console.log(document.body.style.overflowX == "hidden");
  // console.log(document.body.style.overflowY == "hidden");

  const toggleBurgerMenu = () => {
    if (!burgerMenu) {
      setBurgermenu(true);
      setTimeout(() => {
        setNavLinks(true);
      }, 500);
    } else {
      setNavLinks(false);
      setTimeout(() => {
        setBurgermenu(false);
      }, 500);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`contentContainer ${styles.container}`}>
        <Link
          href={"/"}
          className={styles.logoLink}
          // scroll={false}
          // onClick={scrollToTop}
        >
          <Image
            src={"/logo.webp"}
            fill
            alt="OTHON logo"
            sizes="30vw"
            priority={true}
          />
        </Link>

        {/* <ul className={styles.navLinksList}>
          {navLinksData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul> */}

        <button
          className={
            burgerMenu
              ? `${styles.burgerBtn} ${styles.burgerOpen}`
              : `${styles.burgerBtn} `
          }
          id={styles.btn}
          onClick={toggleBurgerMenu}
        >
          {burgerMenu ? (
            <svg className={`${styles.icon}`}>
              <use href="/sprite.svg#icon-burger-close"></use>
            </svg>
          ) : (
            <svg className={styles.icon}>
              <use href="/sprite.svg#icon-burger-open"></use>
            </svg>
          )}
        </button>

        <nav
          className={
            navLinks
              ? `${styles.navLinks} ${styles.navLinksOpen}`
              : `${styles.navLinks}`
          }
        >
          {navLinksData.map((el) => (
            <Link
              href={el.href}
              key={el.id}
              onClick={() => {
                setNavLinks(false);
                setTimeout(() => {
                  setBurgermenu(false);
                }, 500);
              }}
            >
              {el.title}
            </Link>
          ))}
        </nav>
        <ContactUsBtn />
      </div>
    </header>
  );
};

export default Header;
