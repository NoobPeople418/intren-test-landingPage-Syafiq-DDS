import styles from "./navbar.module.css";
import StockStatus from "@/app/assets/stockIcon.svg"
import SocialMediaIcon from "@/app/assets/socialMediaIcon.svg"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.home}><p>ARJ</p></div>
      <div className={styles.stock}><img src={StockStatus.src} sizes="200px" alt="Stock Status" /></div>
      <ul className={styles.navList}>
        <li className={styles.active}>
          <a href="#content1">Projects</a>
        </li>
        <li>
          <a href="#content2">About</a>
        </li>
        <li>
          <a href="#content3">Pricing</a>
        </li>
        <li>
          <a href="#content3">Templates</a>
        </li>
        <li>
          <a href="#content3">FAQ</a>
        </li>
      </ul>
      <div className={styles.socialmedia}>
        <img src={SocialMediaIcon.src} sizes="200px" alt="Social Media" />
      </div>
    </nav>
  );
}
