import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, auth = "") => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }

    }).then((response) => {
      setData(response.data);
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useFetch;
