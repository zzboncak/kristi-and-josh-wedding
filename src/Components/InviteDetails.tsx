import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import { Person } from "../types";

export const InviteDetails: React.FC<RouteComponentProps> = ({
  match
}) => {
  const [people, setPeople] = useState<Person[] | undefined>(
    undefined
  );
  const { id } = match.params as { id: string };
  useEffect(() => {
    fetch(`${API_ENDPOINT}/people/${id}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Something went wrong");
        }
        return res.json();
      })
      .then((ppl) => {
        setPeople(ppl);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <article>
        {people?.map((person, i) => (
          <p key={i}>
            {person.first_name} {person.last_name}
          </p>
        ))}
      </article>
      <Link to="/rsvp">Go back</Link>
    </>
  );
};
