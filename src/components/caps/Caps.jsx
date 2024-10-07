import { useState } from "react";
import caps from "./CapsContainer";
import styles from "./caps.module.css";

export default function Caps() {
  const { title, imageCap, color, size, price } = caps;
  const [showItem, setShowItem] = useState({
    title: title[0],
    image: imageCap[0],
    color: color[0],
    price: price[0],
    size: size[0],
  });

  function handleClick(i) {
    setShowItem((prev) => ({
      ...prev,
      title: title[i],
      image: imageCap[i],
      color: color[i],
      price: price[i],
      size: size[i],
    }));
  }
  function setImage(i) {
    setShowItem((prev) => ({
      ...prev,
      image: imageCap[i],
      color: color[i],
    }));
  }
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
          <p>Price: $<span className={styles.price}>{showItem.price}</span></p>
          <p>Size: {showItem.size}</p>
        </div>
        <div className={styles.imgContainer}>
          {imageCap.map((image, i) => (
            <div
              activeClass={styles.active}
              className={styles.images}
              onClick={() => handleClick(i)}
              onMouseOver={() => {
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
