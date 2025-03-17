import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al solicitar la información");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, [url]);

  return { data, loading, error };
};