import { useParams } from "react-router-dom";
import { ShowView } from "../components/";

export const Planets = () => {
  const { id = "" } = useParams();
  const baseUrl = "https://swapi.dev/api/planets/";
  const pageTitle = "Planets";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle} />;
};