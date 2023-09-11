import { useEffect } from "react";
import CardContainerDetails from "../../components/CardsContainer/CardContainerDetails";
import { byId } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"; 

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(byId(id));
  }, []);
  return (
    <div className={styles.detailContainer}>
      <CardContainerDetails />
    </div>
  );
}