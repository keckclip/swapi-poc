import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to the Star Wars API App!</div>,
  },
  {
    path: "/films",
    element: <div>Films</div>,
  },
  {
    path: "/people",
    element: <div>People</div>,
  },
  {
    path: "/planets",
    element: <div>Planets</div>,
  },
  {
    path: "/species",
    element: <div>Species</div>,
  },
  {
    path: "/starships",
    element: <div>Starships</div>,
  },
  {
    path: "/vehicles",
    element: <div>Vehicles</div>,
  },
]);
