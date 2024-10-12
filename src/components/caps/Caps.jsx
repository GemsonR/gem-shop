import { useState } from "react";
import caps from "./CapsContainer";
import styles from "./caps.module.css";

export default function Caps({ setItem, setNotif, setAddCart, addCart }) {
  const { title, imageCap, color, size, price } = caps;
  const [showItem, setShowItem] = useState({
    title: title[0],
    image: imageCap[0],
    color: color[0],
    price: price[0],
    size: size[0],
  });
  function setImage(i) {
    setShowItem((prev) => ({
      ...prev,
      title: title[i],
      image: imageCap[i],
      color: color[i],
      price: price[i],
      size: size[i],
    }));
  }
  function handleAddClick(images, prices) {
    setNotif((prev) => prev + 1);
    setItem((prev) => [...prev, { images, prices }]);
    setAddCart(true);
  }
  setTimeout(() => {
    setAddCart(false);
  }, 1000);
  return (
    <div className={styles.container}>
      <div className={styles.capContainer}>
        <img
          src={showItem.image}
          alt={`cap image color ${setShowItem.color}`}
        />
      </div>
      <div className={styles.listContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{showItem.title}</h2>
          <p>Color: {showItem.color}</p>
          <p>
            Price: $<span className={styles.price}>{showItem.price}</span>
          </p>
          <p>Size: {showItem.size}</p>
          <div className={styles.btnContainer}>
            <p className={`${styles.add} ${addCart && styles.added}`}>
              Cart Added.
            </p>
            <button
              className={styles.btn}
              onClick={() => handleAddClick(showItem.image, showItem.price)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          {imageCap.map((image, i) => (
            <div
              key={i}
              className={styles.images}
              onClick={() => {
                setImage(i);
              }}
            >
              <img src={image} alt={color[i]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
