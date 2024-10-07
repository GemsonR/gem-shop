import styles from "./watch.module.css";
import style from "./detail.module.css";
import watches from "./WatchContainer";
import {useState} from 'react'

export default function Watch() {
  const { image, text, color, price } = watches;

  const [details, setDetails] = useState({
    images: image[0],
    texts: text[0],
    colors: color[0],
    price: price[0],
  });

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
    <div className={style.container}>
      <div className={style.detailContainer}>
        <div className={style.textContainer}>
          <p className={style.title}>{details.texts}</p>
          <p className={style.colorText}>
            <span className={style.text}>Color: </span>
            {details.colors}
          </p>
          <p className={style.text}>
            Price: <span className={style.price}>${details.price}</span>
          </p>
        </div>

        <div className={style.imgContainer}>
          <img src={details.images} />
        </div>
      </div>
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
    </div>
  );
}
