import header from "./components/header/header";
import hero from "./components/hero/hero";
import "./app.css"
import { Residencies } from "./components/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      {/* <div>
        <div className="white-gradient" />
      <header />
      <hero />
      </div> */}
      <Residencies/>
    </div>
  );
}

export default App;
