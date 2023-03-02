import React from "react";
import MovieForm from "./components/MovieForm";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<MovieForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
