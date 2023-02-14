import { getElementById, getElementsByClassName } from "./Helpers/helpers";
import { Item } from "./Item/item";
import { ItemState, ModalState } from "./types";

let itemId = 10;
let states: NodeListOf<HTMLDivElement>[] = [];

const setState = (state: NodeListOf<HTMLDivElement>) => {
  states.push(state);
};

export const showModal = () => {
  getElementById("modal").classList.add(ModalState.OPENED);
  getElementById("shadowId").classList.add(ModalState.OPENED);
};

export const closeModal = () => {
  getElementById("modal").classList.remove(ModalState.OPENED);
  getElementById("shadowId").classList.remove(ModalState.OPENED);
};

export const addItem = (value: string) => {
  setState(
    getElementsByClassName(
      `.${ItemState.SELECTED}, .${ItemState.UNSELECTED}`
    ) as NodeListOf<HTMLDivElement>
  );
  let id = "Item" + itemId++;
  getElementById("itemList").insertAdjacentHTML("beforeend", Item(id, value));
  getElementById(id).addEventListener("click", () => selectItem(id));
  (getElementById("textInputId") as HTMLInputElement).value = "";
  closeModal();
};

export const selectItem = (id: string) => {
  getElementById(id).classList.toggle(ItemState.SELECTED);
};

export const deleteItems = (selectedItems: NodeListOf<HTMLDivElement>) => {
  setState(
    getElementsByClassName(
      `.${ItemState.SELECTED}, .${ItemState.UNSELECTED}`
    ) as NodeListOf<HTMLDivElement>
  );
  selectedItems.forEach((item) => {
    getElementById(item.id).remove();
  });
};

export const returnToLastState = () => {
  if (states.length > 0) {
    let lastState = states.pop();
    let itemList = getElementById("itemList");
    itemList.innerHTML = "";
    lastState?.forEach((item) => {
      itemList.insertAdjacentHTML("beforeend", Item(item.id, item.textContent));
      getElementById(item.id).addEventListener("click", () =>
        selectItem(item.id)
      );
    });
  }
};
