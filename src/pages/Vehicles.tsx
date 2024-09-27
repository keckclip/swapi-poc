import { ListView } from "../components/ListView";

export const Vehicles = () => {
  const baseUrl = "https://swapi.dev/api/vehicles/";
  const pageTitle = "Vehicles";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};
