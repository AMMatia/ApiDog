import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
