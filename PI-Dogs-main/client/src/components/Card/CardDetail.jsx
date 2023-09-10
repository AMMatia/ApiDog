import styles from "./Card.module.css";

export default function CardDdetails(props) {
  const { image, name, temperaments, weight, height, id, life_span } = props;
  return (
    <div className={styles.cardsDetails}>
      <h1>{id}</h1>
      <img src={image} alt="imagen del perro" />
      <h1>{name}</h1>
      <h2>Altura:{height}</h2>
      <h2>Peso:{weight}</h2>
      <h2>Temperamentos:</h2>
      <h2>{temperaments}</h2>
      <h2>Tiempo de vida:</h2>
      <h2>{life_span}</h2>
    </div>
  );
}
