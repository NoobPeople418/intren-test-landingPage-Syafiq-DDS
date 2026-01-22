import styles from "./page.module.css";

export function Landing() {
  return (
    <section className={styles.projects}>
      <div id="content1" className={styles.cardOne}></div>
      <div id="content2" className={styles.cardTwo}></div>
      <div id="content3" className={styles.cardThree}></div>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
