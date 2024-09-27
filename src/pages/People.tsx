import { ListView } from "../components/ListView";

export const People = () => {
  const baseUrl = "https://swapi.dev/api/people/";
  const pageTitle = "People";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};