import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./assets/css/styles.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default App;
