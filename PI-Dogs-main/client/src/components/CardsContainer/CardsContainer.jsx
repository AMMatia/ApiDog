import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import { Link } from "react-router-dom";
import { Pagination } from "../index";

export default function CardContainer() {
  const { dogs, currentPage } = useSelector((state) => state);
  const dogsPerPage = 8;
  const start = (currentPage - 1) * dogsPerPage;
  const end = start + dogsPerPage;
  
  const dogsToShow = dogs.slice(start, end);

  

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {dogsToShow.map((dogs) => {
          return (
            <Link to={`/detail/${dogs.id}`}>
              <Card
                image={dogs.image}
                name={dogs.name}
                temperaments={dogs.temperaments}
                weight={dogs.weight}
              />
            </Link>
          );
        })}
      </div>
        {dogs.length > 8 &&
      <Pagination />}
    </div>
  );
}
