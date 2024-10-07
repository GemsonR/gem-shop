import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";

export default function NavBar() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(!showList);
  }

  return (
    <nav className={styles.navContainer}>
      <Link to="/gem-shop/" className={styles.linkTo}>
        <h1 className={styles.textHead}>
          <ShoppingCartSharpIcon
            sx={{ fontSize: 35 }}
            className={styles.icon}
          />
          <span className={styles.logo}>G</span>em
          <span className={styles.logo}>S</span>hop
        </h1>
      </Link>
      <div className={styles.listContainer}>
        <p>{!showList ? "Shop" : " "}</p>
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
            className={styles.expand}
          />
        )}
      </div>
    </nav>
  );
}
