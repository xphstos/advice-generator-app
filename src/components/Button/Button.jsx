import { button } from "./Button.module.scss";
import Dice from "../../images/icon-dice.svg";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={button}
      aria-label={props?.label}
    >
      <Dice />
    </button>
  );
}
