// todo: Buổi 13 redux
import Counter from "./components/Counter";
import store from "./store/store";
import "./App.css";

function App() {
  return(
    <Counter
      value = {store.getState()}
      onIncrement = {() => store.dispatch({ type: "INCREMENT", payload: "Load" })}
      onDecrement = {() => store.dispatch({ type: "DECREMENT" })}
    />
  );
}
export default App;
