
import {React, ReactDOM} from "./CONST";
import App from "./App";
import "./index.css";
import DiffPage from "./pages/DiffPage";

// ReactDOM.render(<DiffPage city='name'/>, document.getElementById("root"));
ReactDOM.render(React.createElement(DiffPage,{city:'city'}), document.getElementById("root"));

console.log("version", React.version); //sy-log
