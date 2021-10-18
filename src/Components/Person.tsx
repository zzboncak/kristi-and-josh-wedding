import React, { useState } from "react";
import { API_ENDPOINT } from "../config";
import { Person, RSVP_Options } from "../types";
import { api } from "../utilities";
import "./Person.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Modal from "react-modal";
import { FallingEmojis } from "./FallingEmojis";

Modal.setAppElement("#root");

const customStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "80vw",
    maxWidth: "400px",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    backgroundColor: "#9fad9f",
    border: "1px solid black"
  }
};

export const PersonRsvp: React.FC<Person> = (props) => {
  const [currentStatus, setCurrentStatus] = useState<Person>(props);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [firstModalVisible, setFirstModalVisible] = useState<boolean>(
    false
  );
  const [
    secondModalVisible,
    setSecondModalVisible
  ] = useState<boolean>(false);
  const [seeEmojis, setEmojis] = useState<boolean>(false);
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
      setFirstModalVisible(true);
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

  function handleOpenSecondModal() {
    setFirstModalVisible(false);
    setSecondModalVisible(true);
  }

  function handleNegativeRSVP() {
    api<Person>(`${API_ENDPOINT}/people/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        ...currentStatus,
        rsvp: RSVP_Options.DECLINE
      })
    }).then((response) => {
      setCurrentStatus(response);
      setEmojis(true);
    });
  }

  return (
    <article className="person">
      {seeEmojis && <FallingEmojis emoji={"😭"} />}
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
      <Modal
        isOpen={firstModalVisible}
        onRequestClose={() => setFirstModalVisible(false)}
        style={customStyles}
      >
        <h3>
          Are you sure you do not want to come to our amazing wedding?
        </h3>
        <div className="modal-buttons">
          <button
            className="button"
            onClick={() => handleOpenSecondModal()}
          >
            Sadly, I cannot come
          </button>
          <button
            className="button"
            onClick={() => setFirstModalVisible(false)}
          >
            Whoops, I meant to say yes!
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={secondModalVisible}
        onRequestClose={() => setSecondModalVisible(false)}
        style={customStyles}
      >
        <h3>
          Are you really, really sure you didn&apos;t mean to click
          &quot;Can&apos;t wait to celebrate!&quot;?
        </h3>
        <div className="modal-buttons">
          <button
            className="button"
            onClick={() => {
              handleNegativeRSVP();
              setSecondModalVisible(false);
            }}
          >
            Really, I cannot come, I am so sorry!
          </button>
          <button
            className="button"
            onClick={() => setSecondModalVisible(false)}
          >
            Whoops, I meant to say yes!
          </button>
        </div>
      </Modal>
    </article>
  );
};
