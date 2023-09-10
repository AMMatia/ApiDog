import styles from "./Card.module.css";

export default function Card(props) {
  const { image, name, temperaments, weight, created } = props;

  

  return (
    <div className={styles.cards}>
      <img src={image} alt="imagen del perro" />
      <h1>{name}</h1>
      <h2>Temperamentos:</h2>
      <h2> {temperaments}</h2>
      <h2>Peso: {weight}</h2>
    </div>
  );
}
