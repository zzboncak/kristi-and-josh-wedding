import React from "react";
import { Link } from "../Link/Link";
import { Invite } from "../../types";
import "./InviteCard.css";

export const InviteCard: React.FC<Invite> = ({
  family_name,
  head_of_house,
  keyword
}) => {
  return (
    <Link to={`/rsvp/${keyword}`}>
      {head_of_house} {family_name}
    </Link>
  );
};
