import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AgentDetails from "../pages/components/agentDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/agent/:id",
      element: <AgentDetails/>
    }
]);

export default router