import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Invite } from "../types";

export const RSVP: React.FC = () => {
  const [familyName, setFamilyName] = useState<string>("");
  const [response, setResponse] = useState<Invite[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Fire request to server to find the family name
    fetch(`${API_ENDPOINT}/invites/${familyName.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Failed to fetch from the API");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFamilyName("");
        setResponse(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  const familiesToShow = !!response.length;

  return (
    <>
      <h2>Did you get an invite?</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="familyName">Family Name: </label>
        <input
          type="text"
          name="familyName"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
        <br />
        <button>Search your last name</button>
      </form>
      {familiesToShow && (
        <section>
          {response.map((family) => (
            <div key={family.id}>
              {family.family_name}, {family.head_of_house}
            </div>
          ))}
        </section>
      )}
    </>
  );
};
