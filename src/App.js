import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../src/store/calculatorSlice";

function App() {
  const count = useSelector((state) => state?.calculator?.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={() => dispatch(increment())}>incre</button>
      <button onClick={() => dispatch(decrement())}>decre</button>
    </div>
  );
}

export default App;
