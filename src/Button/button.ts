import { IButtonProps } from "./types";

export const Button = ({ buttonType, content }: IButtonProps) => {
  return /*html*/ `<button id='${buttonType}' class='${buttonType}'> ${content} </button>`;
};
