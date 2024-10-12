import styles from "./about.module.css";
import { Link } from "react-router-dom";
export default function About() {
  return <div className={styles.aboutContainer}>
    <p>All of this content is inspired by Amazon. Click <Link to="https://www.amazon.com/">Here</Link> to visit amazon. </p>
  </div>;
}
