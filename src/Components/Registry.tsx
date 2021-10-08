import React from "react";
import "./Registry.css";

export const Registry: React.FC = () => {
  return (
    <section>
      <h2>We need some stuff</h2>
      <div className="card-container">
        <div className="registry-item">
          <div className="front">
            <span>Target</span>
          </div>
          <a
            href="https://www.target.com/gift-registry/gift-giver?registryId=a7f8b4f0-0d28-11ec-bb7c-df277178efe4&type=WEDDING"
            target="_blank"
            rel="noreferrer"
            className="back"
          >
            Lots of basics
          </a>
        </div>
      </div>
      <div className="card-container">
        <div className="registry-item">
          <div className="front">
            <span>Zola</span>
          </div>
          <a
            href="http://www.zola.com/registry/kristiandjoshua2022"
            target="_blank"
            rel="noreferrer"
            className="back"
          >
            Chip in on a group gift.
          </a>
        </div>
      </div>
    </section>
  );
};
