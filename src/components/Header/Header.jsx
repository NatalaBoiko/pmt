"use client";

import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";
import ModalFrame from "../modalFrame/ModalFrame";

import { navLinksData } from "@/data/navLinksData";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useWindowResize } from "@/hooks/useWindowResize";
import { SiteContext } from "@/context/siteContext";

const Header = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  const [navLinksWrapp, setNavLinksWrapp] = useState(false);
  const [navLinks, setNavLinks] = useState(false);

  const { isMobile, isTablet } = useWindowResize();

  const toggleBurgerMenu = () => {
    if (!burgerMenu) {
      setBurgermenu(true);
      setTimeout(() => {
        setNavLinksWrapp(true);
      }, 100);
      setTimeout(() => {
        setNavLinks(true);
      }, 500);
    } else {
      setNavLinks(false);
      setTimeout(() => {
        setNavLinksWrapp(false);
      }, 100);
      setTimeout(() => {
        setBurgermenu(false);
      }, 500);
    }
  };
  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [burgerMenu]);

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
        {(isMobile || isTablet) && (
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
        )}

        {(!isMobile || !isTablet) && (
          <ContactUsBtn className={styles.contactBtn} />
        )}
      </div>
      {/* <ModalFrame>
        <div
          className={
            navLinksWrapp
              ? `${styles.navLinksWrapp} ${styles.navLinksWrappBig}`
              : styles.navLinksWrapp
          }
        >{`hello :)`}</div>
      </ModalFrame> */}
    </header>
  );
};

export default Header;
