import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getTemps} from "../../redux/actions";
import {
  CardsContainer,
  Pagination,
  SearchBar,
} from "../../components";
import styles from "./Home.module.css";
import { Order, Filter } from "../../components/index";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemps());
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar className={styles["search-bar"]} />
      <Order />
      <div>
      <Filter className={styles.filterContainer} />
      </div>
      <CardsContainer className={styles["cards-container"]} />
      <Pagination className={styles.pagination} />
    </div>
  );
}