
import { Navigate } from "react-router-dom";

function Public({ children }) {




return <>{document.cookie.split("=").includes("Authorization") ?  <Navigate to="/" />  :children}</>;


  
}

export default Public;
