import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import { Person } from "../types";
import { PersonRsvp } from "./Person";

export const InviteDetails: React.FC<
  RouteComponentProps & { family_id: number | undefined }
> = ({ match }) => {
  const [people, setPeople] = useState<Person[] | undefined>(
    undefined
  );
  const { keyword } = match.params as { keyword: string };
  // need to get the family id, then get the people
  useEffect(() => {
    fetch(`${API_ENDPOINT}/people/${keyword}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Something went wrong");
        }
        return res.json();
      })
      .then((ppl) => {
        if (!Array.isArray(ppl)) {
          throw new Error(ppl.error);
        }
        setPeople(ppl);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <article>
        {people?.map((person, i) => (
          <PersonRsvp {...person} key={i} />
        ))}
      </article>
      <Link to="/rsvp">Go back</Link>
    </>
  );
};
