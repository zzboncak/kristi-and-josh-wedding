import React from "react";
import "./FallingEmojis.css";

export const FallingEmojis: React.FC<{ emoji: string }> = ({
  emoji
}) => {
  const emojiArray = [...Array(5).fill(emoji)];
  const order = Array.from({ length: 5 }, (_, i) => i).sort(
    () => Math.random() - 0.5
  );
  const animations = [
    "animation1",
    "animation2",
    "animation3",
    "animation4",
    "animation5"
  ];
  return (
    <div className="emoji-container">
      {emojiArray.map((emoji, i) => {
        const classes = `emoji ${animations[order[i]]}`;
        return (
          <span key={i} className={classes}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
};
