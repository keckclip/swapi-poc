import { useParams } from "react-router-dom";
import { ShowView } from "../components/";

export const Starships = () => {
  const { id = "" } = useParams();
  const baseUrl = "https://swapi.dev/api/starships/";
  const pageTitle = "Starships";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle} />;
};
