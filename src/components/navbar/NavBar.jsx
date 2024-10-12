import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";

export default function NavBar({ notif }) {
  const [showList, setShowList] = useState(false);
  const [pop, setPop] = useState(false)

  function handleClick() {
    setShowList(!showList);
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navs}>
        <Link to="/gem-shop/" className={`${styles.active} ${styles.linkTo}`}>
          <h1 className={`${styles.textHead}`}>
            <span className={styles.logo}>G</span>em
            <span className={styles.logo}>S</span>hop
          </h1>
        </Link>
        <div className={styles.aboutContainer}>
          <Link to="/gem-shop/about" className={`${styles.about} ${styles.active}`}>
          About
          </Link>
        </div>
        <div className={`${styles.cartContainer}`}>
          <Link
            to="/gem-shop/cart"
            onClick={() => setShowList(false)}
            onMouseOver={()=> setPop(true)}
            onMouseOut={()=>setPop(false)}
            className={`${styles.cart} ${styles.active}`}
          >
            <ShoppingCartSharpIcon sx={{ fontSize: 35 }} />
            <span className={styles.notif}>{notif === 0 ? null : notif}</span>
          </Link>
          <span className={`${styles.hide} ${pop && styles.show} `}>Show Cart</span>
        </div>
      </div>
      <div className={styles.listContainer}>
        <p>{!showList ? "Shops" : ""}</p>
        {showList && (
          <Link
            to="/gem-shop/watches"
            onClick={() => setShowList(false)}
            className={styles.links}
          >
            Watches
          </Link>
        )}
        {showList && (
          <Link
            to="/gem-shop/caps"
            onClick={() => setShowList(false)}
            className={styles.links}
          >
            Caps
          </Link>
        )}

        {!showList ? (
          <KeyboardArrowRightIcon
            onClick={handleClick}
            className={styles.expand}
          />
        ) : (
          <KeyboardArrowLeftIcon
            onClick={handleClick}
            className={`${styles.expand} ${styles.exColor}`}
          />
        )}
      </div>
    </nav>
  );
}
