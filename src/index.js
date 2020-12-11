

import {React, ReactDOM} from "./CONST";
import App from "./App";
import "./index.css";
import DiffPage from "./pages/DiffPage";

ReactDOM.hydrate(React.createElement(DiffPage,null), document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(DiffPage,null));

console.log("version", React.version); //sy-log
