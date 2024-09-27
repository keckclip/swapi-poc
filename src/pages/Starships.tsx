import { ListView } from "../components/ListView";

export const Starships = () => {
  const baseUrl = "https://swapi.dev/api/starships/";
  const pageTitle = "Starships";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};
