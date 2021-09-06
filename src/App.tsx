import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

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
          <section>I am the registry</section>
        </Route>
        <Route path="/rsvp">
          <button>RSVP bish</button>
        </Route>
        <Route path="/info">
          <section>I am the info</section>
        </Route>
        <Route exact path="/">
          <main>
            <h1>We&#39;re getting married</h1>
            <sub>Hel(l yeah)geson</sub>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
