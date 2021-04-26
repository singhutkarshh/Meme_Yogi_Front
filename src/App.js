import "./App.css";
import Home from "./routes/home";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notifications from "./routes/Notifications";
import Messages from "./routes/messages";
import Error from "./routes/Error";
import Login from "./routes/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Wrapper>
            <Navigation />
            <Home />
          </Wrapper>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/notifications" exact>
          <Wrapper>
            <Navigation />
            <Notifications />
          </Wrapper>
        </Route>

        <Route path="/messages" exact>
          <Wrapper>
            <Navigation />
            <Messages />
          </Wrapper>
        </Route>

        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export default App;
