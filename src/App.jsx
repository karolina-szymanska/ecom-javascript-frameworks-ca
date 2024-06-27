import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
