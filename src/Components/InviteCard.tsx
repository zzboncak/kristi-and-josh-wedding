import React from "react";
import { Link } from "react-router-dom";
import { Invite } from "../types";

export const InviteCard: React.FC<Invite> = ({
  id,
  family_name,
  head_of_house
}) => {
  return (
    <Link to={`/rsvp/${id}`}>
      <article>
        <p>
          {family_name}, {head_of_house}
        </p>
      </article>
    </Link>
  );
};
