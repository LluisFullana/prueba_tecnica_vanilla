import { Button } from "./Button/button";
import {
  setButtonsListeners,
  setDefaultItemsListeners,
} from "./Helpers/helpers";
import { ReturnIcon } from "./Icons/returnIcon";
import { Item } from "./Item/item";
import "./style.css";
import { ButtonTypes } from "./types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  /*html*/
  `
<div id='modal' class=''>
  <div class='label'>Add item to list</div>
  <input id='textInputId' class='textInput' type="text" placeholder='Type the text here...' value=''/>
  <div class='buttonsRow'>
    ${Button({ buttonType: ButtonTypes.ADD, content: "ADD" })}
    ${Button({ buttonType: ButtonTypes.CLOSEMODAL, content: "CANCEL" })}
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
    ${Item("Item0", "Item 1")}
    ${Item("Item1", "Item 2")}
    ${Item("Item2", "Item 3")}
    ${Item("Item3", "Item 4")}
  </div>
  <div class='buttonsRow'>
    ${Button({ buttonType: ButtonTypes.RETURN, content: ReturnIcon() })}
    ${Button({ buttonType: ButtonTypes.DELETE, content: "DELETE" })}
    ${Button({ buttonType: ButtonTypes.OPENMODAL, content: "ADD" })}
  </div>
</div>
`;

setButtonsListeners();
setDefaultItemsListeners();
