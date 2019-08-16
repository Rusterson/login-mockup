import React from "react";
import "./App.css";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageForgotPassword from "./pages/PageForgotPassword";
import PageRegister from "./pages/PageRegister";
import PageSuccess from "./pages/PageSuccess";
import PagePrivacy from "./pages/PagePrivacy";
import PageTerms from "./pages/PageTerms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PageRegisterSuccess from './pages/PageRegisterSuccess'

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={PageHome} />
          <Route path="/login" component={PageLogin} />
          <Route path="/forgot-password" component={PageForgotPassword} />
          <Route path="/register" component={PageRegister} />
          <PrivateRoute path="/success" exact component={PageSuccess} />
          {/* <Route path="/success"  component={PageSuccess} /> */}
          <Route path='/registerSuccess' component={PageRegisterSuccess} />
          <Route path="/privacy-policy" component={PagePrivacy} />
          <Route path="/terms-of-use" component={PageTerms} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
