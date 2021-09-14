import { API_ENDPOINT } from "./config";
import { Invite, InviteUpdateRequest, Person } from "./types";

export function api<T>(
  url: string,
  init?: RequestInit | undefined
): Promise<T> {
  return fetch(url, init).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function fetchInviteAndPeople(
  keyword: string
): Promise<[Invite, Person[]]> {
  return Promise.all([
    fetch(`${API_ENDPOINT}/invites/${keyword.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data: Invite[]) => data[0]),
    fetch(`${API_ENDPOINT}/people/${keyword.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data: Person[]) => data)
  ]);
}

export function updateInvite(
  inviteId: number,
  fieldsToUpdate: Partial<InviteUpdateRequest>
): Promise<Invite> {
  return fetch(`${API_ENDPOINT}/invites/update/${inviteId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(fieldsToUpdate)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((invite: Invite) => invite);
}
