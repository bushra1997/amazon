import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/Homepage";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
