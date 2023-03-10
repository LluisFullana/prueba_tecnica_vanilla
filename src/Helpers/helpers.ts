import {
  addItem,
  closeModal,
  deleteItems,
  returnToLastState,
  selectItem,
  showModal,
} from "../actions";
import { ButtonAction, CustomElement, ItemState } from "../types";

export const getElementById = (id: string): CustomElement => {
  return document.querySelector<CustomElement>(`#${id}`)!;
};

export const getElementsByClassName = (
  classNames: string
): NodeListOf<CustomElement> => {
  return document.querySelectorAll<CustomElement>(classNames)!;
};

export const setSelectorListeners = () => {
  getElementById(ButtonAction.OPENMODAL).addEventListener("click", () =>
    showModal()
  );
  getElementById(ButtonAction.DELETE).addEventListener("click", () =>
    deleteItems(
      getElementsByClassName(
        `.${ItemState.SELECTED}`
      ) as NodeListOf<HTMLDivElement>
    )
  );
  getElementById(ButtonAction.RETURN).addEventListener("click", () =>
    returnToLastState()
  );
  getElementById("Item0").addEventListener("click", () => selectItem("Item0"));
  getElementById("Item1").addEventListener("click", () => selectItem("Item1"));
  getElementById("Item2").addEventListener("click", () => selectItem("Item2"));
  getElementById("Item3").addEventListener("click", () => selectItem("Item3"));
};

export const setModalListeners = () => {
  getElementById(ButtonAction.CLOSEMODAL).addEventListener("click", () =>
    closeModal()
  );
  getElementById(ButtonAction.ADD).addEventListener("click", () =>
    addItem((getElementById("textInputId") as HTMLInputElement).value)
  );
  getElementById("form").addEventListener("submit", (event: Event) => {
    event.preventDefault();
  });
  getElementById("shadowId").addEventListener("click", () => closeModal());
};
