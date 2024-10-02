import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { cache: "force-cache" });
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url]);
  return { data, loading };
};
