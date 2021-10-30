import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Invite, Person } from "../../types";
import { fetchInviteAndPeople, updateInvite } from "../../utilities";
import { modalStyles, PersonRsvp } from "../Person/Person";
import "./InviteDetails.css";
import { Loading } from "../Loading/Loading";
import Modal from "react-modal";

export const InviteDetails: React.FC<RouteComponentProps> = ({
  match
}) => {
  const [people, setPeople] = useState<Person[] | undefined>(
    undefined
  );
  const [invite, setInvite] = useState<Invite | undefined>(undefined);
  const [dietary_restrictions, setDiet] = useState<string>("");
  const [dietTouched, setDietTouched] = useState<boolean>(false);
  const [favorite_song, setSong] = useState<string>("");
  const [songTouched, setSongTouched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const { keyword } = match.params as { keyword: string };
  useEffect(() => {
    fetchInviteAndPeople(keyword).then(([invite, people]) => {
      setInvite(invite);
      setPeople(people);
      setDiet(invite.dietary_restrictions ?? "");
      setSong(invite.favorite_song ?? "");
      setLoading(false);
    });
  }, []);

  function handleDietChange(value: string) {
    if (!dietTouched) {
      setDietTouched(true);
    }
    setDiet(value);
  }

  function handleSongChange(value: string) {
    if (!songTouched) {
      setSongTouched(true);
    }
    setSong(value);
  }

  function handleUpdateDiet() {
    if (invite) {
      if (dietary_restrictions.length > 0) {
        updateInvite(invite.id, {
          ...invite,
          dietary_restrictions
        }).then((invite) => {
          setInvite(invite);
          setModalVisible(true);
        });
      } else if (dietary_restrictions.length === 0) {
        updateInvite(invite.id, {
          ...invite,
          reset_diet: true
        }).then((invite) => {
          setInvite(invite);
          setDietTouched(false);
          setModalVisible(true);
        });
      }
    }
  }

  function handleUpdateSong() {
    if (invite) {
      if (favorite_song.length > 0) {
        updateInvite(invite.id, {
          ...invite,
          favorite_song
        }).then((invite) => {
          setInvite(invite);
          setModalVisible(true);
        });
      } else if (favorite_song.length === 0) {
        updateInvite(invite.id, {
          ...invite,
          reset_song: true
        }).then((invite) => {
          setInvite(invite);
          setSongTouched(false);
          setModalVisible(true);
        });
      }
    }
  }

  useEffect(() => {
    if (isModalVisible) {
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  }, [isModalVisible]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h4 className="helper-text">
            Let us know if you&apos;re able to celebrate with us by
            simply changing your RSVP Status. All answers on this page
            are submitted to us when you change it!
          </h4>
          <article>
            {people?.map((person, i) => (
              <PersonRsvp {...person} key={i} />
            ))}
          </article>
          <div className="family-questions">
            <label
              htmlFor="dietary_restrictions"
              className="extra-question-label"
            >
              Any dietary restrictions we should be aware of?
            </label>
            <textarea
              name="dietary_restrictions"
              value={dietary_restrictions}
              onChange={(e) => handleDietChange(e.target.value)}
              className="textarea"
            ></textarea>
            <button
              onClick={() => handleUpdateDiet()}
              disabled={!dietTouched}
              className="button"
            >
              Let us know
            </button>
            <br />
            <label
              htmlFor="favorite_song"
              className="extra-question-label"
            >
              What song will get you out on the dance floor?
            </label>
            <textarea
              name="favorite_song"
              value={favorite_song}
              onChange={(e) => handleSongChange(e.target.value)}
              className="textarea"
            ></textarea>
            <button
              onClick={() => handleUpdateSong()}
              disabled={!songTouched}
              className="button"
            >
              Let us know
            </button>
            <br />
          </div>
          <Modal
            isOpen={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
            style={modalStyles}
          >
            <h2>
              Thanks for letting us know! Your request has been noted.
            </h2>
          </Modal>
        </>
      )}
    </>
  );
};
