import React from "react";
import Map from "./Map";
import "./EventInfo.css";

export const EventInfo: React.FC = () => {
  return (
    <section>
      <article className="event-section">
        <h3 className="event-info-header header">Location</h3>
        <p>
          The ceremony and reception will be held in the same space
        </p>
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
      </article>

      <article className="event-section">
        <h3 className="event-info-header header">Order of events</h3>
        <div className="order-of-events">
          <p>Ceremony</p> <p>2:30pm</p>
          <p>Cocktail hour</p> <p>3:30pm</p>
          <p>Supper</p> <p>5:00pm</p>
          <p>Dessert and Dancing</p> <p>6:00pm</p>
        </div>
      </article>

      <article className="event-section">
        <h3 className="event-info-header header">Accommodations</h3>
        <div className="accommodation">
          <p>
            <i>Closer to the venue</i>
          </p>
          <p>
            <a
              href="https://be.synxis.com/?Hotel=32405&Chain=5157&arrive=1/8/2022&depart=1/10/2022&adult=1&child=0&group=2201ZBONCA"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Sonesta
            </a>
          </p>
          <p>Shuttle to venue is available</p>
        </div>

        <div className="accommodation">
          <p>
            <i>Closer to the Zboncak&apos;s</i>
          </p>
          <p>
            <a>Spring Hill</a>
          </p>
        </div>
      </article>

      <article className="event-section">
        <h3 className="event-info-header header">Things to do</h3>
        <h4>Downtown Areas</h4>
        <ul>
          <li className="things-to-do">
            <a
              href="https://www.downtownwheaton.com"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              Wheaton
            </a>
          </li>
          <li className="things-to-do">
            <a
              href="https://www.stcalliance.org"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              St. Charles
            </a>
          </li>
          <li className="things-to-do">
            <a
              href="https://shopdowntown.org/pages/shop-downtown-Geneva-Illinois"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              Geneva
            </a>
          </li>
        </ul>

        <h4>Breweries</h4>
        <ul>
          <li className="things-to-do">
            <a
              href="https://www.noonwhistlebrewing.com"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              Noon Whistle
            </a>
          </li>
          <li className="things-to-do">
            <a
              href="http://twobrothersbrewing.com"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              Two Brothers
            </a>
          </li>
          <li className="things-to-do">
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
        <ul>
          <li className="things-to-do">
            <a
              href="https://myhalfofthesky.org"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              My Half of the Sky
            </a>
          </li>
          <li className="things-to-do">
            <a
              href="https://www.ihaveabean.com"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              I Have a Bean
            </a>
          </li>
          <li className="things-to-do">
            <a
              href="http://www.countyfarmbagels.com/index.html"
              target="_blank"
              rel="noreferrer"
              className="link things-to-do-link"
            >
              County Farm Bagels
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
