import "./App.css";
import Counter from "./components/USESTATE/Counter";
import DataLoad from "./components/UseEffect/DataLoad";

function App() {
  return (
    <div className="App">
      {/* --useState Hook-- */}
      <Counter />
      {/* --useEffect Hook-- */}
      <DataLoad />
    </div>
  );
}

export default App;
