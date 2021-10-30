import React from "react";
import "./ZZFooter.css";

export const ZZFooter: React.FC = () => {
  return (
    <footer className="zz-footer">
      <p>
        This website was made by
        <br />
        <a
          className="link"
          href="mailto:zachary.zboncak@gmail.com?subject=Wow, cool website Zack&body=Feel free to give me feedback on this website! Or, let me know if you have any Web Development needs."
        >
          ZZ Web Development
        </a>
      </p>
    </footer>
  );
};
