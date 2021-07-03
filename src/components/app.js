import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Footer from "./footer";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Resume from "../routes/resume";
import Misc from "../routes/misc";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Resume path="/resume" />
      <Misc path="/misc" />
    </Router>
    <Footer />
  </div>
);

export default App;
