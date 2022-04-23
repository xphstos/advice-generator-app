/* @refresh reload */
import { render } from "solid-js/web";

import "./styles/style.scss";
import Advice from "./components/Advice/Advice";

render(() => <Advice />, document.getElementById("root"));
