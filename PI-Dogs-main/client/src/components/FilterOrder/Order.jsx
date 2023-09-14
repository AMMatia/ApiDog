import { useDispatch, useSelector } from "react-redux";
import { changePage, sortDogs } from "../../redux/actions";

export default function Order() {
  const { dogs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const sortedDogs = [...dogs];

  const handleOrder = (value) => {
    // const value = event.target.value;
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
      <h3>Ordenar por:</h3>
      <div>
        <label>Orden alfabético: </label>
        <button onClick={() => handleOrder("a")} value="a">
          A-Z
        </button>
        <button onClick={() => handleOrder("b")} value="b">
          Z-A
        </button>
      </div>
      <div>
      <label>Peso: </label>
        <button onClick={() => handleOrder("c")} value="c">
          Mayor peso
        </button>
        <button onClick={() => handleOrder("d")} value="d">
          Menor peso
        </button>
      </div>
    </div>
  );

}
