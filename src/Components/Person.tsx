import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Person, RSVP_Options } from "../types";
import { api } from "../utilities";
import "./Person.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Modal from "react-modal";

export const PersonRsvp: React.FC<Person> = (props) => {
  const [currentStatus, setCurrentStatus] = useState<Person>(props);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const {
    first_name,
    last_name,
    id,
    extra_confirmed,
    allowed_extra
  } = currentStatus;
  const { width, height } = useWindowSize();

  function handleRSVPChange(value: RSVP_Options) {
    const updatedPerson = {
      ...currentStatus,
      rsvp: value
    };
    if (value === RSVP_Options.DECLINE) {
      const rejection1 = window.confirm(
        "Are you sure you don't want to come to our amazing wedding?"
      );
      if (rejection1) {
        const rejection2 = window.confirm(
          `Are you really, really sure you didn't mean to click "Can't wait to celebrate!"?`
        );
        if (rejection2) {
          api<Person>(`${API_ENDPOINT}/people/update/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updatedPerson)
          }).then((response) => setCurrentStatus(response));
        } else {
          return;
        }
      } else {
        return;
      }
    } else if (value === RSVP_Options.WILL_ATTEND) {
      api<Person>(`${API_ENDPOINT}/people/update/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(updatedPerson)
      }).then((response) => {
        setCurrentStatus(response);
        setShowConfetti(true);
      });
    }
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
    <article className="person">
      <h3>
        {first_name} {last_name}
      </h3>
      <select
        value={currentStatus.rsvp}
        onChange={(e) =>
          handleRSVPChange(e.target.value as RSVP_Options)
        }
        className="rsvp-select"
      >
        <option value={RSVP_Options.NO_RESPONSE} disabled>
          RSVP
        </option>
        <option value={RSVP_Options.WILL_ATTEND}>
          Can&#39;t wait to celebrate!
        </option>
        <option value={RSVP_Options.DECLINE}>
          Bummed we can&#39;t be there!
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
      {showConfetti && (
        <Confetti
          recycle={false}
          width={width}
          height={height}
          confettiSource={{
            x: width / 2,
            y: height / 3,
            w: 1,
            h: 1
          }}
          onConfettiComplete={() => setShowConfetti(false)}
          initialVelocityX={10}
          initialVelocityY={20}
          colors={["#9fad9f", "#5e2426"]}
          numberOfPieces={400}
          gravity={0.2}
        />
      )}
    </article>
  );
};
