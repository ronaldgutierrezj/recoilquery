import { useCounterState } from "../atom";


function Counter(props) {
  const [counter, setCounter] = useCounterState();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Add to Recoil State
      </button>
    </div>
  );
}

export default Counter;