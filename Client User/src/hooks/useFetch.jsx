import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  const [querry, setQuerry] = useState(false);

  const fetch = async () => {
    try {
      const response = await axiosInstance({
        url: url,
        method: "GET",
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
  }, [querry]);

  return [data, loading, error, setData, setQuerry];
};
