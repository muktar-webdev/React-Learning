import "./App.css";
import ClickCounter from "./components/ClilckCounter";
import MouseHover from './components/MouseHover';

function App() {
  return (
    <div className="App">
      {/* --Higher Order Component-- */}
      <ClickCounter />
      <MouseHover />
    </div>
  );
}

export default App;
