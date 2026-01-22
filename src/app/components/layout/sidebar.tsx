import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* BAGIAN ATAS */}
      <div className={styles.topContent}>
        <div>
          <p className={styles.overlineOne}>Mobile + Website Designer for</p>
          <p className={styles.overlineTwo}>AI, Stocks, Crypto and Web3 Products.</p>
        </div>

        <div className={styles.servicesWrapper}>
          <button className={styles.ctaButton}>
            <span className={styles.ctaIcon}></span>
          </button>
          <div className={styles.sponsorAndServicesIcon}></div>
        </div>
      </div>

      {/* BAGIAN BAWAH */}
      <div className={styles.stageTwo}>
        <p>Wall of love from people ❤️</p>
        <div className={styles.profileAuthor}></div>
      </div>
    </aside>
  );
}
