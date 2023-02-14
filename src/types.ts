export enum ModalState {
  OPENED = "opened",
  CLOSED = "",
}

export enum ButtonTypes {
  ADD = "addButton",
  DELETE = "deleteButton",
  RETURN = "returnButton",
  OPENMODAL = "openModalButton",
  CLOSEMODAL = "cancelButton",
  SELECTITEM = "selectedItem",
}

export enum ItemState {
  SELECTED = "selectedItem",
  UNSELECTED = "item",
}

export type CustomElement =
  | HTMLInputElement
  | HTMLDivElement
  | HTMLButtonElement;
