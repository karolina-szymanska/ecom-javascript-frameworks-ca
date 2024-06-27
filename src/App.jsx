import React from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";

function RouteNotFound() {
  return <div>Page not found</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Our header component that gets used in our <Layout> component
function Header() {
  return (
    <header>
      <div>Header with Logo and nav</div>
      <Nav />
    </header>
  );
}

// Our footer component that gets used in our <Layout> component
function Footer() {
  return <footer>Website footer</footer>;
}

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
