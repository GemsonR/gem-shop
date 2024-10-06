import styles from "./watch.module.css";

export default function Watch({ setDetails, watches }) {
  const { image, text, color, price } = watches;

  function handleClick(i) {
    setDetails((prev) => ({
      ...prev,
      images: image[i],
      texts: text[i],
      colors: color[i],
      price: price[i],
    }));
  }

  return (
    <div className={styles.watchContainer}>
      {watches.id.map((item, i) => {
        return (
          <div key={item} className={styles.watchItems}>
            <div
              className={`${styles.imgContainer} `}
              onClick={() => handleClick([i])}
            >
              <img src={watches.image[i]} alt={watches.image[i]} />
              <p className={styles.priceText}>${watches.price[i]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
