import { useSelector } from "react-redux";
import CardDdetails from "../Card/CardDetail";
import styles from "./CardsContainer.module.css";

export default function CardContainerDetails() {
  const { details } = useSelector((state) => state);
  return (
    <div className={styles.cardContainerDetails}>
      <CardDdetails
        id={details.id}
        image={details.image}
        name={details.name}
        height={details.height}
        weight={details.weight}
        temperaments={details.temperaments}
        life_span={details.life_span}
      />
    </div>
  );
}
