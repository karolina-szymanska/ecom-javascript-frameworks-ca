import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Loader from "../../components/UI/Loader";
import Error from "../../components/UI/Error";

function HomePage() {
  document.title = "Welcome | eCom";

  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error>Error Loading Products</Error>;

  return (
    <>
      <h1>eCom Home Page</h1>
      <input placeholder="Search" />
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <div>
            <img src={product.image.url} alt="Product" />
          </div>
          <p>${product.price}</p>
          <Link to="/product">View product</Link>
        </div>
      ))}
    </>
  );
}

export default HomePage;
