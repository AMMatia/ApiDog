import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <div className={styles.nav}>
      {location.pathname !== "/home" && (
        <Link to="/home">
          <button>Home</button>
        </Link>
      )}{" "}
      {location.pathname !== "/form" && (
        <Link to="/form">
          <button>Agregar Raza</button>
        </Link>
      )}
    </div>
  );
}
