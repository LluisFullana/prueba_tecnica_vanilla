import { Button } from "./Button/button";
import { ReturnIcon } from "./Icons/returnIcon";
import { Item } from "./Item/item";
import { ButtonAction } from "./types";
import { setSelectorListeners, setModalListeners } from "./Helpers/helpers";
import "./style.css";
import "./Button/styles.css";
import "./Item/styles.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  /*html*/
  `
<div id='modal' class=''>
  <form id="form">
    <label for="textInputId" class='label'>Add item to list</label>
    <input id='textInputId' class='textInput' type="text" placeholder='Type the text here...' required minlength="1" autocomplete="off">
    <div class='buttonsRow'>
      ${Button({ action: ButtonAction.ADD, content: "ADD", type: "submit" })}
      ${Button({ action: ButtonAction.CLOSEMODAL, content: "CANCEL" })}
    </div>
  </form>
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
    ${Button({ action: ButtonAction.RETURN, content: ReturnIcon() })}
    ${Button({ action: ButtonAction.DELETE, content: "DELETE" })}
    ${Button({ action: ButtonAction.OPENMODAL, content: "ADD" })}
  </div>
</div>
`;

setSelectorListeners();
setModalListeners();
