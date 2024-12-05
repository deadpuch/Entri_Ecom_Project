import React, { useEffect, useState } from "react";
import { instance } from "../config/AxiosInstance";


export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const fetch = async () => {
    try {
      const response = await instance({
        url: url
      });
      setData(response?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return[data,loading,error]
};
