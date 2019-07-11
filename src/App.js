import React from "react";
import "./App.css";
import PageHome from "./assets/pages/PageHome";
import PageLogin from "./assets/pages/PageLogin";
import PageForgotPassword from "./assets/pages/PageForgotPassword";
import PageRegister from "./assets/pages/PageRegister";
import PageSuccess from "./assets/pages/PageSuccess";
import PagePrivacy from "./assets/pages/PagePrivacy";
import PageTerms from "./assets/pages/PageTerms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
          {/* <Route path="/success" component={PageSuccess} /> */}
          <Route path="/privacy-policy" component={PagePrivacy} />
          <Route path="/terms-of-use" component={PageTerms} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
