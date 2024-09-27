import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { ListItems } from "./ListItems";

export const ListView = ({ baseUrl, pageTitle }: { baseUrl: string; pageTitle: string; }) => {
  const [url, setUrl] = useState(baseUrl);
  const { data, loading } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { next, previous, results } = data;

  const onNext = () => {
    setUrl(next);
  };

  const onPrevious = () => {
    setUrl(previous);
  };

  return (
    <>
      <div>
        {pageTitle}
        <ListItems items={results} />
      </div>
      <button disabled={!previous} onClick={onPrevious}>
        previous
      </button>
      <button disabled={!next} onClick={onNext}>
        next
      </button>
    </>
  );
};
