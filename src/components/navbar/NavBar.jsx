import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function NavBar() {
  const [showList, setShowList] = useState(false);

  function handleClick(){
    setShowList(!showList)
  }

  return (
    <nav className={styles.navContainer}>
      <Link to="/" className={styles.linkTo}>
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
        <p>
          Shop
          <ExpandMoreIcon onClick={handleClick} />
        </p>
        {showList && <Link to="/watch">Watch</Link>}
      </div>
    </nav>
  );
}
