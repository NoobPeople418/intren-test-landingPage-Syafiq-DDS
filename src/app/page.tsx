import styles from "./page.module.css";
import "./globals.css";

export function Landing() {
  return (
    <>
      <section id="content1" className={styles.projects}>
        <div className={styles.cardContainer}>
            <img src="/card1.svg" alt="Project 1" className={styles.cardImage} />
            <div className={styles.buttonOverlay}>        
               <div className={styles.buttonWrapper}>
                 <img src="/hoverSeeLive.svg" className={styles.hoverBadge} alt="" />
                 <img src="/buttonTryAtmo.svg" className={styles.mainButton} alt="" />
               </div>
            </div>
          </div>
      </section>
      <section id="content2" className={styles.projects}>
        <div className={styles.cardContainer}>
            <img
              src="/card2.svg"
              alt="About"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
      </section>
      <section id="content3a" className={styles.projects}>
        <div className={styles.cardContainer}>
            <img
              src="/card3.svg"
              alt="Pricing"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
      </section>
      <section id="content3b" className={styles.projects}>
        <div className={styles.cardContainer}>
            <img
              src="/card3.svg"
              alt="Templates"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
      </section>
      <section id="content3c" className={styles.projects}>
        <div className={styles.cardContainer}>
            <img
              src="/card3.svg"
              alt="FAQ"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
