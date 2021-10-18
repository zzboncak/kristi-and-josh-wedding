import React from "react";
import "./FallingEmojis.css";

const styles = {
  FallingEmojis: "_Jiv79",
  emoji: "_1PZEU",
  emojiAnimation0: "_8xRe2",
  float: "_3oO7A",
  emojiAnimation1: "_3xOMG",
  emojiAnimation2: "_lA6Ei",
  emojiAnimation3: "_2fsNE",
  emojiAnimation4: "_2q_6E"
};

const FallingEmojis = function FallingEmojis(_ref: {
  emoji: string;
}): React.DetailedReactHTMLElement<
  {
    className: string;
  },
  HTMLElement
> {
  const emoji = _ref.emoji;
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

export { FallingEmojis };
//# sourceMappingURL=index.modern.js.map
