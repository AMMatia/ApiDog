import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const dispatch = useDispatch();
  const { dogs, currentPage } = useSelector((state) => state);
  const dogsPerPage = 8;
  const totalDogs = dogs.length;
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const masDe = dogs.length >= dogsPerPage;
  const anterior = currentPage - 1;
  const siguiente = currentPage + 1;

  return (
    <div className={styles.pagination}>
      {masDe && (
        <button
          onClick={() => {
            dispatch(changePage(anterior));
          }}
          disabled={anterior === 0}
        >
          Anterior
        </button>
      )}

      <button>{currentPage}/{totalPages}</button>

      {masDe && (
        <button
          onClick={() => {
            dispatch(changePage(siguiente));
          }}
          disabled={siguiente > totalPages}
        >
          Siguiente
        </button>
      )}
    </div>
  );
}
