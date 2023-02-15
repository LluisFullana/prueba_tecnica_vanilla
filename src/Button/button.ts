import { IButtonProps } from "./types";

export const Button = ({ action, content, type = "button" }: IButtonProps) => {
  return /*html*/ `<button type=${type} id='${action}' class='${action}'> ${content} </button>`;
};
