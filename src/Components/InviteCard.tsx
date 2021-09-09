import React from "react";
import { Link } from "react-router-dom";
import { Invite } from "../types";

export const InviteCard: React.FC<Invite> = ({
  family_name,
  head_of_house,
  keyword
}) => {
  return (
    <Link to={`/rsvp/${keyword}`}>
      <article>
        <p>
          {family_name}, {head_of_house}
        </p>
      </article>
    </Link>
  );
};
