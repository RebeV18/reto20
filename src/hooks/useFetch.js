import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) throw new Error("Error al solicitar la información");
        setData([...response.content]);
      } catch (error) {
        setError(error);
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    handleFetch;
  }, []);

  return { data, loading, error };
};
