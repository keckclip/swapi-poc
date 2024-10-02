import { useParams} from 'react-router-dom';
import { ShowView } from "../components/";

export const People = () => {
  const { id = "" } = useParams()
  const baseUrl = "https://swapi.dev/api/people/";
  const pageTitle = "People";

  return <ShowView id={id} baseUrl={baseUrl} pageTitle={pageTitle} />;
};