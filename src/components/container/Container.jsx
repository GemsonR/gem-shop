import Detail from "../detail/Detail";
import Watch from "../watch/Watch";
import watches from "../watch/WatchContainer";
import styles from "./container.module.css";
import { useState } from "react";

export default function Container() {
  const { image, text, color, price } = watches;
  const [details, setDetails] = useState({
    images: image[0],
    texts: text[0],
    colors: color[0],
    price: price[0],
  });

  return (
    <div className={styles.container}>
      <Detail image={details.images} title={details.text} color={details.colors} price={details.price} />
      <Watch setDetails={setDetails} watches={watches} />
    </div>
  );
}
