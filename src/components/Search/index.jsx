import React, { useState } from "react";
// import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import Error from "../../components/UI/Error";

function Search() {
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  if (isLoading) return <Loader />;

  if (isError) {
    return <Error>Error Loading Products</Error>;
  }

  function onSearchInputChange(searchValue) {
    setSearchInput(searchValue);

    const results = data.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredProducts(results);
  }

  function onInputChange(event) {
    onSearchInputChange(event.currentTarget.value);
  }

  return (
    <div>
      <input onChange={onInputChange} value={searchInput} />
      {searchInput !== `` ? (
        <ul className="search-list">
          {filteredProducts.map((item) => (
            <li key={item.id}>
              <Link to={"/product/" + item.id}>
                <div className="mini-img">
                  <img src={item.imageUrl} alt="Product" />
                </div>
                <div>{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ``
      )}
    </div>
  );
}

export default Search;

// TO REUSE:
// function Search() {
//   const [apiUsers, setApiUsers] = useState([]);
//   // initialize the loading state as true
//   const [loading, setLoading] = useState(true);
//   // initialize the error state as null
//   const [error, setError] = useState(null);
//   const [searchItem, setSearchItem] = useState("");
//   // set the initial state of filteredUsers to an empty array
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   // fetch the users
//   useEffect(() => {
//     fetch("https://v2.api.noroff.dev/online-shop")
//       .then((response) => response.json())
//       // save the complete list of users to the new state
//       .then((data) => {
//         setApiUsers(data.users);
//         // update the filteredUsers state
//         setFilteredUsers(data.users);
//       })
//       // if there's an error we log it to the console
//       .catch((error) => {
//         return <Error />;
//       });
//   }, []);

//   const handleInputChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchItem(searchTerm);

//     // filter the items using the apiUsers state
//     const filteredItems = apiUsers.filter((user) =>
//       user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredUsers(filteredItems);
//   };

//   return (
//     // ... component rendering
//     <>
//       <input
//         type="text"
//         value={searchItem}
//         onChange={handleInputChange}
//         placeholder="Type to search"
//       />
//       {/* if the data is loading, show a proper message */}
//       {loading && <p>Loading...</p>}
//       {/* if there's an error, show a proper message */}
//       {error && <p>There was an error loading the users</p>}
//       {/* if it finished loading, render the items */}
//       {!loading && !error && filteredUsers.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         <ul>
//           {filteredUsers.map((user) => (
//             <li key={user.id}>{user.firstName}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// export default Search;
