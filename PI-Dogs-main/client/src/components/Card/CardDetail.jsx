import styles from "./Card.module.css";

export default function CardDdetails(props) {
  const { image, name, temperaments, weight, height, id, life_span } = props;
  return (
    <div className={styles.cardsDetails}>
      <img src={image} alt="imagen del perro" />
      <div>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>Altura:</h1>
        <h2>{height} m</h2>
        <h1>Peso:</h1>
        <h2>{weight} kg</h2>
        <h1>Temperamentos:</h1>
        <h2>{temperaments}</h2>
        <h1>Tiempo de vida:</h1>
        <h2>{life_span}</h2>
      </div>
    </div>
  );
}
