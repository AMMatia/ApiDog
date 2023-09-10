import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </div>
  );
}
