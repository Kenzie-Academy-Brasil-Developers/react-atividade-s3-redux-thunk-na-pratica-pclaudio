import "./App.css";
import Display from "./components/Display";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <Display />
      </header>
    </div>
  );
};

export default App;
