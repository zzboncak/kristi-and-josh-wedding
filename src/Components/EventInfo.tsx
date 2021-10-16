import React from "react";
import Map from "./Map";
import "./EventInfo.css";

export const EventInfo: React.FC = () => {
  return (
    <section>
      <h3>Location</h3>
      <p>The ceremony and reception will be held in the same space</p>
      <p>
        The Brix on The Fox <br /> 260 S. Washington St <br />{" "}
        Carpentersville, IL 60110
      </p>
      <p>
        The Two-Sixty entrance
        <br />
        There is plenty of parking!
      </p>
      <Map />

      <h3>Order of events</h3>
      <div className="order-of-events">
        <p>Ceremony</p> <p>2:30pm</p>
        <p>Cocktail hour</p> <p>3:30pm</p>
        <p>Supper</p> <p>5:00pm</p>
        <p>Dessert and Dancing</p> <p>6:00pm</p>
      </div>

      <h3>Accommodations</h3>
      <p>
        <i>Closer to the venue</i>
        <a
          href="https://www.sonesta.com/us/illinois/west-dundee/sonesta-select-chicago-elgin-west-dundee"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          The Sonesta
        </a>
      </p>

      <p>
        <i>Closer to the Zboncak&apos;s</i>
        <a>Some place</a>
      </p>

      <h3>Things to do</h3>
      <h4>Breweries</h4>
      <ul>
        <li>
          <a
            href="https://www.noonwhistlebrewing.com"
            target="_blank"
            rel="noreferrer"
            className="link things-to-do-link"
          >
            Noon Whistle
          </a>
        </li>
        <li>
          <a
            href="http://twobrothersbrewing.com"
            target="_blank"
            rel="noreferrer"
            className="link things-to-do-link"
          >
            Two Brothers
          </a>
        </li>
        <li>
          <a
            href="https://www.alterbrewing.com/st-charles-brewery-kitchen/"
            target="_blank"
            rel="noreferrer"
            className="link things-to-do-link"
          >
            Alter Brewing + Kitchen
          </a>
        </li>
      </ul>

      <h4>Coffee Shops</h4>
      <li>
        <a
          href="https://myhalfofthesky.org"
          target="_blank"
          rel="noreferrer"
          className="link things-to-do-link"
        >
          My Half of the Sky
        </a>
      </li>
      <li>
        <a
          href="https://www.ihaveabean.com"
          target="_blank"
          rel="noreferrer"
          className="link things-to-do-link"
        >
          I Have a Bean
        </a>
      </li>
      <li>
        <a
          href="http://www.countyfarmbagels.com/index.html"
          target="_blank"
          rel="noreferrer"
          className="link things-to-do-link"
        >
          County Farm Bagels
        </a>
      </li>
    </section>
  );
};
