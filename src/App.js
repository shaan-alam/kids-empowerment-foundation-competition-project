import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./assets/css/styles.css";
import { Context } from "./Context/GlobalState";
import Volunteers from "./components/Volunteers";
import BooksDonators from "./components/BooksDonators";
import Contacts from "./components/Contacts";

function App() {
  const { isPageLoading } = useContext(Context);

  return (
    <>
      {!isPageLoading && <Navbar />}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/volunteers" component={Volunteers} />
        <Route path="/books-donators" component={BooksDonators} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
