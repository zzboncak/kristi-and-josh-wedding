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
}): React.DetailedReactHTMLElement<
  {
    className: string;
  },
  HTMLElement
> => {
  const emojiArray = [emoji, emoji, emoji, emoji, emoji];
  const order = [0, 3, 1, 2, 4];
  const animations = [
    styles.emojiAnimation0,
    styles.emojiAnimation1,
    styles.emojiAnimation2,
    styles.emojiAnimation3,
    styles.emojiAnimation4
  ];
  return React.createElement(
    "div",
    {
      className: styles.FallingEmojis
    },
    emojiArray.map(function (emojiElement, i) {
      return React.createElement(
        "span",
        {
          key: i,
          className: [styles.emoji, animations[order[i]]].join(" ")
        },
        emojiElement
      );
    })
  );
};
