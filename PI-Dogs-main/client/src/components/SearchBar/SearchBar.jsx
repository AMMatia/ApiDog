import { useDispatch, useSelector } from "react-redux";
import { byName, changePage, getDogs } from "../../redux/actions";
import { useState } from "react";
import Order from '../FilterOrder/Order'

export default function SearchBar() {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);
  const [name, setName] = useState("");
  const handleChange = (event) => setName(event.target.value);

  const onSearch = async () => {
    await dispatch(byName(name));
    console.log(dogs.length)
    if (dogs.length < 8) dispatch(changePage(1));
  };
  const onBack = () => {
    dispatch(getDogs());
    dispatch(changePage(1));
        
  };
  return (
    <div>
      <input type="search" value={name} onChange={handleChange} />
      <button
        onClick={() => {
          onSearch();
        }}
      >
        Buscar
      </button>
      <button
        onClick={() => {
          onBack();
        }}
      >
        Volver
      </button>
      <Order />
    </div>
  );
}
