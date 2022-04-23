import { button } from "./Button.module.scss";
import Dice from "../../images/icon-dice.svg";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={button} ariaLabel={props?.label}>
      <Dice />
    </button>
  );
}
