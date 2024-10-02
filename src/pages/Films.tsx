import { useParams } from "react-router-dom";
import { ShowView } from "../components/";

export const Films = () => {
  const { id = "" } = useParams();
  const baseUrl = "https://swapi.dev/api/films/";
  const pageTitle = "Films";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle} />;
};
