import { ListView } from "../components/ListView";

export const Planets = () => {
  const baseUrl = "https://swapi.dev/api/planets/";
  const pageTitle = "Planets";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};