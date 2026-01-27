"use client";

import styles from "./navbar.module.css";
import StockStatus from "@/app/assets/stockIcon.svg"
import SocialMediaIcon from "@/app/assets/socialMediaIcon.svg"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("content1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["content1", "content2", "content3a", "content3b", "content3c"];
      let currentActive = "content1";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentActive = sectionId;
          }
        }
      }

      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.home}><p>ARJ</p></div>
      <div className={styles.stock}><img src={StockStatus.src} sizes="200px" alt="Stock Status" /></div>
      <ul className={styles.navList}>
        <li className={activeLink === "content1" ? styles.active : ""}>
          <a href="#content1" onClick={(e) => handleClick(e, "content1")}>Projects</a>
        </li>
        <li className={activeLink === "content2" ? styles.active : ""}>
          <a href="#content2" onClick={(e) => handleClick(e, "content2")}>About</a>
        </li>
        <li className={activeLink === "content3a" ? styles.active : ""}>
          <a href="#content3a" onClick={(e) => handleClick(e, "content3a")}>Pricing</a>
        </li>
        <li className={activeLink === "content3b" ? styles.active : ""}>
          <a href="#content3b" onClick={(e) => handleClick(e, "content3b")}>Templates</a>
        </li>
        <li className={activeLink === "content3c" ? styles.active : ""}>
          <a href="#content3c" onClick={(e) => handleClick(e, "content3c")}>FAQ</a>
        </li>
      </ul>
      <div className={styles.socialmedia}>
        <img src={SocialMediaIcon.src} sizes="200px" alt="Social Media" />
      </div>
    </nav>
  );
}
