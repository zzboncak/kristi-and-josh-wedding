import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Registry, RSVP } from "./Components";
import { InviteDetails } from "./Components/InviteDetails";
import { Link } from "./Components/Link/Link";
import { useTransition, animated } from "react-spring";
import { AboutUs } from "./Components/AboutUs";

function App(): JSX.Element {
  return (
    <div className="App">
      <nav className="nav-bar">
        <header className="App-header">
          <Link to="/">About Us</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/rsvp">RSVP</Link>
          <Link to="/info">Event Info</Link>
        </header>
      </nav>
      <Routes />
    </div>
  );
}
type Absolute = "absolute";

const Routes: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      position: "absolute" as Absolute,
      width: "100%"
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/registry">
          <Registry />
        </Route>
        <Route exact path="/rsvp">
          <RSVP />
        </Route>
        <Route path="/rsvp/:keyword" component={InviteDetails} />
        <Route path="/info">
          <section>I am the info</section>
        </Route>
        <Route exact path="/">
          <AboutUs />
        </Route>
      </Switch>
    </animated.div>
  ));
};

export default App;
