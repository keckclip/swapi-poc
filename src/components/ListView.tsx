import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Loader, ListItems } from "./";

export const ListView = ({
  baseUrl,
  pageTitle,
}: {
  baseUrl: string;
  pageTitle: string;
}) => {
  const [url, setUrl] = useState(baseUrl);
  const { data, loading } = useFetch(url);

  if (loading) {
    return <Loader />;
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
        <h1>{pageTitle}</h1>
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
