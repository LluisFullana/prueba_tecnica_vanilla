import { ButtonTypes } from "../types";

export interface IButtonProps {
  buttonType: ButtonTypes;
  content: string;
  submitType?: "submit" | "button" | "reset" | undefined;
}
