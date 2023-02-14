import { ItemState } from "../types";

export const Item = (id: string, content: string | null) => {
  return /*html*/ `<div id=${id} class='${ItemState.UNSELECTED}'>${content}</div>`;
};
