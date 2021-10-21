import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Invite } from "../types";
import { InviteCard } from "./InviteCard";
import { Loading } from "./Loading";
import "./RSVP.css";

export const RSVP: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [response, setResponse] = useState<Invite[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setFetched(false);
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
        setLoading(false);
        setFetched(true);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  const familiesToShow = !!response.length;

  return (
    <>
      <h2 className="header">Enter your code here</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="keyword"
          placeholder="keyword"
          className="keyword-input"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          disabled={keyword.length <= 1 || loading}
          className="button"
        >
          Search your keyword
        </button>
      </form>
      {loading && <Loading />}
      {familiesToShow && (
        <section className="invite-cards">
          {response.map((family) => (
            <InviteCard {...family} key={family.id} />
          ))}
        </section>
      )}
      {fetched && !familiesToShow && (
        <p className="no-results">
          No results found for that search. Please check the code on
          your invite and try again.
        </p>
      )}
    </>
  );
};
