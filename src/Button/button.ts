import { IButtonProps } from "./types";

export const Button = ({
  buttonType,
  content,
  submitType = "submit",
}: IButtonProps) => {
  return /*html*/ `<button type=${submitType} id='${buttonType}' class='${buttonType}'> ${content} </button>`;
};
