import { useParams } from "react-router-dom";
import { ShowView } from "../components/ShowView";

  export const Species = () => {
  const { id = "" } = useParams();
  const baseUrl = "https://swapi.dev/api/species/";
  const pageTitle = "Species";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle} />;
};