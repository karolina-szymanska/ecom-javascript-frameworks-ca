import React, { useState, useEffect } from "react";

/**
 * the main API hook
 */
function useApi(url) {
  const [products, setProducts] = useState([]);
  // State for holding loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there is an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        const items = json.data;
        setProducts(items);
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
  return { products, isLoading, isError };
}

function HomePage() {
  const { products, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
