import styles from "./Card.module.css";

export default function Card(props) {
  const { image, name, temperaments, weight, created } = props;

  return (
    <div className={styles.cards}>
      <img src={image} alt="imagen del perro" />
      <h1 className={styles.centeredText} >{name}</h1>
      <h2 className={styles.centeredText} >Temperamentos:</h2>
      <h2> {temperaments}</h2>
      <h2 className={styles.centeredText} >Peso:</h2>
      <h2> {weight} kg</h2>
    </div>
  );
}
