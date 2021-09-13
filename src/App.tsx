import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import { Registry, RSVP } from "./Components";
import { InviteDetails } from "./Components/InviteDetails";

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
      <Switch>
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
          <main>
            <h1>We&#39;re getting married</h1>
            <sub>#hellyeahgeson</sub>
            <footer>
              <p className="signature">Joshua & Kristi</p>
            </footer>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
