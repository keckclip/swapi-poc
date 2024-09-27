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
    path: "/films",
    element: <Films />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  {
    path: "/species",
    element: <Species />,
  },
  {
    path: "/starships",
    element: <Starships />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
  },
]);
