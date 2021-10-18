import React from "react";
import "./FallingEmojis.css";

const styles = {
  FallingEmojis: "emoji-container",
  emoji: "emoji",
  emojiAnimation0: "animation1",
  float: "squiggle_fall",
  emojiAnimation1: "animation2",
  emojiAnimation2: "animation3",
  emojiAnimation3: "animation4",
  emojiAnimation4: "animation5"
};

export const FallingEmojis: React.FC<{ emoji: string }> = ({
  emoji
}) => {
  const emojiArray = [...Array(5).fill(emoji)];
  const order = Array.from({ length: 5 }, (_, i) => i).sort(
    () => Math.random() - 0.5
  );
  const animations = [
    styles.emojiAnimation0,
    styles.emojiAnimation1,
    styles.emojiAnimation2,
    styles.emojiAnimation3,
    styles.emojiAnimation4
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
