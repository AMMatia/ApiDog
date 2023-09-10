import { useDispatch, useSelector } from "react-redux";
import { changePage, sortDogs } from "../../redux/actions";

export default function Order() {
  const { dogs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const sortedDogs = [...dogs];

  const handleOrder = (event) => {
    const value = event.target.value;
    let comparer;

    const compareWeights = (weightA, weightB) => {
      const [minA, maxA] = weightA.split(" - ").map(Number);
      const [minB, maxB] = weightB.split(" - ").map(Number);
      return maxB - maxA;
    };

    switch (value) {
      case "a":
        comparer = (a, b) => a.name.localeCompare(b.name);
        break;
      case "b":
        comparer = (a, b) => b.name.localeCompare(a.name);
        break;
      case "c":
        comparer = (a, b) => compareWeights(a.weight, b.weight);

        break;
      case "d":
        comparer = (a, b) => compareWeights(b.weight, a.weight);
        break;
      default:
        return;
    }

    sortedDogs.sort(comparer);
    dispatch(sortDogs(sortedDogs));
    dispatch(changePage(1));
  };

  return (
    <div>
      <label>Ordenar por:</label>
      <select onChange={handleOrder}>
        <option value="a">A-Z</option>
        <option value="b">Z-A</option>
        <option value="c">Mayor peso</option>
        <option value="d">Menor peso</option>
      </select>
    </div>
  );
}
