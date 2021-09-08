import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Person, RSVP_Options } from "../types";
import { api } from "../utilities";

export const PersonRsvp: React.FC<Person> = (props) => {
  const [currentStatus, setCurrentStatus] = useState<Person>(props);
  const { first_name, last_name, person_age, id } = currentStatus;

  function handleRSVPChange(value: RSVP_Options) {
    console.log("value", value);
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
    </>
  );
};
