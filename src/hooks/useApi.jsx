import { useState, useEffect } from "react";

// Custom React hook, which fetches data from a provided URL and provides error handling and loading states
function useApi(url) {
  // use React's useState hooks to setup states for data, loading and error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // async function to fetch data
  useEffect(() => {
    async function getData() {
      try {
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        // Reset the error state in case there is an error previously
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        const items = json.data;
        setData(items);
      } catch (error) {
        console.log(error);
        // Set our error state to true
        setIsError(true);
      } finally {
        // Clear the loading state if we get an error
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default useApi;
