import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Person, RSVP_Options } from "../types";
import { api } from "../utilities";

export const PersonRsvp: React.FC<Person> = (props) => {
  const [currentStatus, setCurrentStatus] = useState<Person>(props);
  const {
    first_name,
    last_name,
    person_age,
    id,
    extra_confirmed,
    allowed_extra
  } = currentStatus;

  function handleRSVPChange(value: RSVP_Options) {
    const updatedPerson = {
      ...currentStatus,
      rsvp: value
    };
    api<Person>(`${API_ENDPOINT}/people/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedPerson)
    }).then((response) => setCurrentStatus(response));
  }

  function handleExtraChange(value: RSVP_Options) {
    api<Person>(`${API_ENDPOINT}/people/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ extra_confirmed: value })
    }).then((response) => setCurrentStatus(response));
  }

  return (
    <>
      <h3>
        {first_name} {last_name}
      </h3>
      <p>{person_age}</p>
      <select
        value={currentStatus.rsvp}
        onChange={(e) =>
          handleRSVPChange(e.target.value as RSVP_Options)
        }
      >
        <option value={RSVP_Options.NO_RESPONSE} disabled>
          {RSVP_Options.NO_RESPONSE}
        </option>
        <option value={RSVP_Options.WILL_ATTEND}>
          {RSVP_Options.WILL_ATTEND}
        </option>
        <option value={RSVP_Options.DECLINE}>
          {RSVP_Options.DECLINE}
        </option>
      </select>
      {allowed_extra && (
        <article>
          <p>Congrats, you get a plus one. Is your boo coming?</p>
          <p>
            Boo&#39;s status:{" "}
            {extra_confirmed ?? RSVP_Options.NO_RESPONSE}
          </p>
          <button
            onClick={() =>
              handleExtraChange(RSVP_Options.WILL_ATTEND)
            }
          >
            Yes
          </button>
          <button
            onClick={() => handleExtraChange(RSVP_Options.DECLINE)}
          >
            No
          </button>
        </article>
      )}
    </>
  );
};
