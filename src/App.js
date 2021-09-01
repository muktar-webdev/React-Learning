import "./App.css";
// import Users from "./components/Users";
// import Child from "./composition/inheritance/Child";
import Parent from "./composition/compo/Parent";
import Child from "./composition/compo/Child";
import Parent1 from "./composition/NestedComposition/Parent1";
import Parent2 from "./composition/NestedComposition/Parent2";
import Child1 from "./composition/NestedComposition/Child1";

function App() {
  return (
    <div className="App">
      {/* --Compositin --// */}
      <Parent>{({ addEmoji }) => <Child addEmoji={addEmoji}></Child>}</Parent>

      {/* --Nested Composition -- */}

      <Parent1>
        {({ addEmoji }) => (
          <Parent2>
            {({ addBracket }) => (
              <Child1 addEmoji={addEmoji} addBracket={addBracket}></Child1>
            )}
          </Parent2>
        )}
      </Parent1>
    </div>
  );
}

export default App;
