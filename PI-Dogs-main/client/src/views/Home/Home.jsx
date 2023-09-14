import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemps } from "../../redux/actions";
import { CardsContainer, SearchBar } from "../../components";
import styles from "./Home.module.css";
import { Order, Filter } from "../../components/index";

export default function Home() {
  const dispatch = useDispatch();
  const { filtered, dogs } = useSelector((state) => state);

  useEffect(() => {
    if(!filtered.length) dispatch(getDogs());
    dispatch(getTemps());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.fix}>
        <SearchBar className={styles.searchBar} />
        <Order />
        <Filter />
      </div>
      <CardsContainer className={styles.cardContainer} />
    </div>
  );
}
