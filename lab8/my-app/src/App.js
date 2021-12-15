import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import ListPage from "./pages/ListPage";
import ObjectPage from "./pages/ObjectPage";

function App() {
  return (
      <BrowserRouter basename="/" >
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/list" component={ListPage}></Route>
            <Route exact path="/list/object" component={ObjectPage}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;