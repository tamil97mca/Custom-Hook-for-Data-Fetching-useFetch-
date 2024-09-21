import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(url); // Fetch data from the provided URL
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json(); // Parse JSON response
        setData(result); // Set the fetched data
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData(); // Call the fetch function on component mount
  }, [url]); // Runs whenever the URL changes

  return { data, loading, error }; // Return data, loading status, and errors
};

export default useFetch;
