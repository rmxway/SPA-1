import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main";
import PostPage from "./pages/Post";
import Navbar from "./components/ui/Navbar";
import "./base.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="posts" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
