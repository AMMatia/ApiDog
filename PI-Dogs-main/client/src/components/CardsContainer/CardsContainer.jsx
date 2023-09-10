import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import { Link } from "react-router-dom";

export default function CardContainer() {
  const { dogs, currentPage } = useSelector((state) => state);
  const dogsPerPage = 8;
  const start = (currentPage - 1) * dogsPerPage;
  const end = start + dogsPerPage;

  const dogsToShow = dogs.slice(start, end);

  return (
    <div className={styles.cardContainer}>
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
  );
}
