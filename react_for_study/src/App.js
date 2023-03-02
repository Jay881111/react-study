import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
import User from "./components/User";
import MovieForm from "./components/Movie/MovieForm";
import TodoMain from "./components/TodoList/TodoMain";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<MovieForm />} />
        <Route path="/todolist" element={<TodoMain />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
