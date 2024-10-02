import { useParams } from "react-router-dom";
import { ShowView } from "../components/";

export const Vehicles = () => {
  const { id = "" } = useParams();
  const baseUrl = "https://swapi.dev/api/vehicles/";
  const pageTitle = "Vehicles";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle}  />
};
