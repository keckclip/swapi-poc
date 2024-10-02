import { useFetch } from "../hooks/useFetch";
import { Loader, ShowAvailableStats } from "./";

type DetailViewProps = {
  url: string;
  pageTitle: string;
};

// type DetailViewType = 

type DetailViewType = <T>(props: T) => React.FunctionComponent;

export const DetailView: DetailViewType = ({ url, pageTitle }) => {
  const { data, loading } = useFetch(url);

  if (loading) {
    return <Loader />;
  }

  const { name, title } = data;

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>
        {name}
        {title}
      </h2>
      <ShowAvailableStats data={data} />
    </div>
  );
};


