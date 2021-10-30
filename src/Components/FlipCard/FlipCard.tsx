import React from "react";
import "./FlipCard.css";

export const FlipCard: React.FC<{
  front: string;
  back: string;
  link: string;
}> = ({ front, back, link }) => {
  return (
    <div className="card-container">
      <div className="item">
        <div className="front">
          <span>{front}</span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="back"
        >
          {back}
        </a>
      </div>
    </div>
  );
};
