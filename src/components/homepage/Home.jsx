import styles from "./home.module.css";
import watchImg from "../../assets/images/watch.png";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imgContainer}>
        <img src={watchImg} alt="watch logo" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.text}>The shop that you can trust.</h3>
      </div>
    </div>
  );
}
