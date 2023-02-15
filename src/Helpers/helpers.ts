import {
  addItem,
  closeModal,
  deleteItems,
  returnToLastState,
  selectItem,
  showModal,
} from "../actions";
import { ButtonTypes, CustomElement, ItemState } from "../types";

export const getElementById = (id: string): CustomElement => {
  return document.querySelector<CustomElement>(`#${id}`)!;
};

export const getElementsByClassName = (
  classNames: string
): NodeListOf<CustomElement> => {
  return document.querySelectorAll<CustomElement>(classNames)!;
};

export const setButtonsListeners = () => {
  getElementById(ButtonTypes.OPENMODAL).addEventListener("click", () =>
    showModal()
  );
  getElementById(ButtonTypes.CLOSEMODAL).addEventListener("click", () =>
    closeModal()
  );
  getElementById(ButtonTypes.ADD).addEventListener("click", () =>
    addItem((getElementById("textInputId") as HTMLInputElement).value)
  );
  getElementById(ButtonTypes.DELETE).addEventListener("click", () =>
    deleteItems(
      getElementsByClassName(
        `.${ItemState.SELECTED}`
      ) as NodeListOf<HTMLDivElement>
    )
  );
  getElementById(ButtonTypes.RETURN).addEventListener("click", () =>
    returnToLastState()
  );
  getElementById("shadowId").addEventListener("click", () => closeModal());
};

export const setDefaultItemsListeners = () => {
  getElementById("Item0").addEventListener("click", () => selectItem("Item0"));
  getElementById("Item1").addEventListener("click", () => selectItem("Item1"));
  getElementById("Item2").addEventListener("click", () => selectItem("Item2"));
  getElementById("Item3").addEventListener("click", () => selectItem("Item3"));
};
