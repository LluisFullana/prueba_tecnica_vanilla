export enum ModalState {
  OPENED = "opened",
  CLOSED = "",
}

export enum ButtonAction {
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
