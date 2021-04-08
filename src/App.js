import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./assets/css/styles.css";
import { Context } from "./Context/GlobalState";
import Volunteers from "./components/Volunteers";

function App() {
  const { isPageLoading } = useContext(Context);

  return (
    <>
      {!isPageLoading && <Navbar />}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/volunteers" component={Volunteers} />
      </Switch>
    </>
  );
}

export default App;
