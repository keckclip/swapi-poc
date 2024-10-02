import { createBrowserRouter } from "react-router-dom";
import { Vehicles } from "../pages/Vehicles";
import { Starships } from "../pages/Starships";
import { Species } from "../pages/Species";
import { Planets } from "../pages/Planets";
import { People } from "../pages/People";
import { Films } from "../pages/Films";
import { Home } from "../pages/Home";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/films/:id?",
    element: <Films />,
  },
  {
    path: "/people/:id?",
    element: <People />,
  },
  {
    path: "/planets/:id?",
    element: <Planets />,
  },
  {
    path: "/species/:id?",
    element: <Species />,
  },
  {
    path: "/starships/:id?",
    element: <Starships />,
  },
  {
    path: "/vehicles/:id?",
    element: <Vehicles />,
  },
]);
