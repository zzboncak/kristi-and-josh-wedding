import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Invite } from "../types";
import { InviteCard } from "./InviteCard";

export const RSVP: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [response, setResponse] = useState<Invite[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Fire request to server to find the family name
    fetch(`${API_ENDPOINT}/invites/${keyword.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          console.error("Failed to fetch from the API");
        }
        return res.json();
      })
      .then((data) => {
        setKeyword("");
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
        <label htmlFor="keyword">Search your keyword: </label>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <br />
        <button>Search your keyword</button>
      </form>
      {familiesToShow && (
        <section>
          {response.map((family) => (
            <InviteCard {...family} key={family.id} />
          ))}
        </section>
      )}
    </>
  );
};
