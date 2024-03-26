import { useState, useEffect } from "react";

const useFetch = (url, auth = "") => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useFetch;
