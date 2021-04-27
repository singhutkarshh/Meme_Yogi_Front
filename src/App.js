import Home from "./routes/home";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notifications from "./routes/Notifications";
import Messages from "./routes/messages";
import Error from "./routes/Error";
import Login from "./routes/login";
import PrivateRoute from "./routes/PrivateRoute";
import AuthWrapper from "./routes/AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <PrivateRoute path="/" exact>
            <Wrapper>
              <Navigation />
              <Home />
            </Wrapper>
          </PrivateRoute>

          <PrivateRoute path="/notifications" exact>
            <Wrapper>
              <Navigation />
              <Notifications />
            </Wrapper>
          </PrivateRoute>

          <PrivateRoute path="/messages" exact>
            <Wrapper>
              <Navigation />
              <Messages />
            </Wrapper>
          </PrivateRoute>

          <PrivateRoute path="*" exact>
            <Error />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export default App;
