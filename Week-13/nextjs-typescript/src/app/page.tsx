import Counter from "../../components/Counter"
import CounterReducer from "../../components/CounterReducer";
import InputWithFocus from "../../components/InputWithFocus";

export default function Home() {
  return (
    <div>
      <br />
      <Counter />
      <br />
      <CounterReducer />
      <br/>
      <InputWithFocus/>
    </div>
  );
}
