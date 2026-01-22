import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDashboard from "./movies/MovieList";
import Footer from "./pages/Footer";
import SingleMovieView from "./movies/SingleMovieView";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieDashboard />} />
        <Route path="/movie/:titleName" element={<SingleMovieView />} />
      </Routes>
      <Footer />
    </>
  );
}
