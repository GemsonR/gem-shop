import styles from "./detail.module.css";
export default function Detail({ image, title, color, price }) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.colorText}>
          <span className={styles.text}>Color: </span>
          {color}
        </p>
        <p className={styles.text}>
          Price: <span className={styles.price}>${price}</span>
        </p>
      </div>

      <div className={styles.imgContainer}>
        <img src={image} />
      </div>
    </div>
  );
}
