import "./css/main.css";
import Layouttodos from "./components/Layouttodos";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="App">
      <h1>What's the plans for today?</h1>
        <Todos />
        <Layouttodos />
    </div>
  );
}

export default App;
