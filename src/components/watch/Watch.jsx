import styles from "./watch.module.css";
import style from "./detail.module.css";
import watches from "./WatchContainer";
import { useState } from "react";

export default function Watch({ setItems, setNotif, setAddCart,addCart }) {

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

  function handleAdd(images, prices) {
    setItems((prev) => [...prev, { images, prices }]);
    setAddCart(true)
    setNotif((prev) => prev + 1);
  }
  setTimeout(() => {
    setAddCart(false);
  }, 1000);
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
        <div className={style.btnContainer}>
          <p className={`${style.add} ${addCart && style.added}`}>
            Cart Added.
          </p>
          <button onClick={() => handleAdd(details.images, details.price)}>
            Add to cart
          </button>
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
