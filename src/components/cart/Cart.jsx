import styles from "./cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
export default function Cart({ items, setItems, setNotif }) {
  function handleClick(i) {
    setItems((prev)=> prev.filter((_, index)=> index !== i))
    setNotif(prev => prev - 1)
  }
  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.itemContainer}>
        {items == 0 ? (
          <h2 className={styles.noItem}>No Items</h2>
        ) : (
          items.map((item, i) => {
            return (
              <div key={i} className={styles.items}>
                <div className={styles.imgContainer}>
                  <img src={item.images} />
                </div>
                <p className={styles.price}>${item.prices}</p>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleClick(i)} >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
