import { Navbar } from "./components/NavBar/Navbar";
import {Container} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {MainPage} from "./Pages/MainPage";
import {UserPage} from "./Pages/UserPage";

function App() {

  return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <Container maxWidth="lg">
              <Switch>
                  <Route path="/" exact>
                      <MainPage />
                  </Route>
                  <Route path="/user/:id">
                      <UserPage />
                  </Route>
                  <Route path="/">
                  </Route>
              </Switch>
          </Container>
        </div>
      </Router>
  );
}

export default App;
