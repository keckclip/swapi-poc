import { ListView } from "../components/ListView";

export const Films = () => {
  const baseUrl = "https://swapi.dev/api/films/";
  const pageTitle = "Films";

  return <ListView baseUrl={baseUrl} pageTitle={pageTitle} />;
};
