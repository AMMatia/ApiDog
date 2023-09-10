import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getTemps, byId } from "../../redux/actions";
import { CardsContainer, FilterOrder, Pagination, SearchBar } from "../../components";


export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemps());
  }, []);

  return (
    <div>
      <h1>Home</h1>
 
      <FilterOrder />
      <SearchBar />
      <CardsContainer />
      <Pagination />
    </div>
  );
}
