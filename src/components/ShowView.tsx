import { DetailView } from "../components/DetailView";
import { ListView } from "../components/ListView";

export const ShowView = ({ id, baseUrl, pageTitle }) => id ? (
  <DetailView url={`${baseUrl}${id}`} pageTitle={pageTitle} />
) : (
  <ListView baseUrl={baseUrl} pageTitle={pageTitle} />
);
