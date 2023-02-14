import {
  showModal,
  closeModal,
  addItem,
  deleteItems,
  selectItem,
  returnToLastState,
} from "./actions";
import "./style.css";
import { ButtonTypes, ItemState } from "./types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  /*html*/
  `
<div id='modal' class=''>
  <div class='label'>Add item to list</div>
  <input id='textInputId' class='textInput' type="text" placeholder='Type the text here...' value=''/>
  <div class='buttonsRow'>
    <button id='${ButtonTypes.ADD}' class='${ButtonTypes.ADD}'> ADD </button>
    <button id='${ButtonTypes.CLOSEMODAL}' class='${ButtonTypes.CLOSEMODAL}'> CANCEL </button>
  </div>
</div>

<div id='shadowId' class=''></div>

<div class='selector'>
  <div class='title'>This is a technical proof</div>
  <div class='loremIpsum'>
    Lorem ipsum dolor sit amet consectetur adipiscing,
    elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
    hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
  </div>
  <div id='itemList'>
    <div id="Item0" class='${ItemState.UNSELECTED}'>Item 1</div>
    <div id="Item1" class='${ItemState.UNSELECTED}'>Item 2</div>
    <div id="Item2" class='${ItemState.UNSELECTED}'>Item 3</div>
    <div id="Item3" class='${ItemState.UNSELECTED}'>Item 4</div>
  </div>
  <div class='buttonsRow'>
    <button id='${ButtonTypes.RETURN}' class='${ButtonTypes.RETURN}'>
      <div className='returnIcon'>
        <svg width="25px" height="25px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" transform="rotate(150)matrix(-1, 0, 0, -1, 0, 0)">
            <g id="SVGRepo_iconCarrier">
                <path fill="#324BFF" d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"></path>
            </g>
        </svg>
      </div>
    </button>
    <button id='${ButtonTypes.DELETE}' class='${ButtonTypes.DELETE}'> DELETE </button>
    <button id="${ButtonTypes.OPENMODAL}" class='${ButtonTypes.OPENMODAL}'> ADD </button>
  </div>
</div>
`;

//Buttons listeners
document
  .querySelector<HTMLButtonElement>(`#${ButtonTypes.OPENMODAL}`)!
  .addEventListener("click", () => showModal());
document
  .querySelector<HTMLButtonElement>(`#${ButtonTypes.CLOSEMODAL}`)!
  .addEventListener("click", () => closeModal());
document
  .querySelector<HTMLButtonElement>(`#${ButtonTypes.ADD}`)!
  .addEventListener("click", () =>
    addItem(document.querySelector<HTMLInputElement>("#textInputId")!.value)
  );
document
  .querySelector<HTMLButtonElement>(`#${ButtonTypes.DELETE}`)!
  .addEventListener("click", () =>
    deleteItems(
      document.querySelectorAll<HTMLDivElement>(`.${ItemState.SELECTED}`)!
    )
  );
document
  .querySelector<HTMLButtonElement>(`#${ButtonTypes.RETURN}`)!
  .addEventListener("click", () => returnToLastState());

//Default items listeners
document
  .querySelector<HTMLDivElement>(`#Item0`)!
  .addEventListener("click", () => selectItem("Item0"));
document
  .querySelector<HTMLDivElement>(`#Item1`)!
  .addEventListener("click", () => selectItem("Item1"));
document
  .querySelector<HTMLDivElement>(`#Item2`)!
  .addEventListener("click", () => selectItem("Item2"));
document
  .querySelector<HTMLDivElement>(`#Item3`)!
  .addEventListener("click", () => selectItem("Item3"));
