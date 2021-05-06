import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/testimonials" exact>
              <Testimonials />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
