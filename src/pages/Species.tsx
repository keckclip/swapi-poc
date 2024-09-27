import { ListView } from "../components/ListView";

export const Species = () => {
  const baseUrl = "https://swapi.dev/api/species/";
  const pageTitle = "Species";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};
