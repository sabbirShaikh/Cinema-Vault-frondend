import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { MovieContext } from "../context/MovieContext";

const MovieDashboard = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [activeGenre, setActiveGenre] = useState("All");
  const [inp, setInp] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/toedter/movies-demo/refs/heads/master/backend/src/main/resources/static/movie-data/movies-250.json"
        );
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data.movies);
        setFilteredMovies(data.movies);

        let allGenre = data.movies.reduce((acc, curr) => {
          let genreArr = curr.Genre.split(",").map((g) => g.trim());
          return [...acc, ...genreArr];
        }, []);
        setGenres(["All", ...new Set(allGenre)]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies]);

  // Logic for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function handleFilter(genre) {
    setActiveGenre(genre);
    setCurrentPage(1); // Reset to page 1 on filter
    if (genre === "All") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((m) => m.Genre.includes(genre)));
    }
  }

  function searchMovies() {
    const filterMov = movies.filter((m) =>
      m.Title.toLowerCase().includes(inp.trim().toLowerCase())
    );
    setFilteredMovies(filterMov);
    setCurrentPage(1); // Reset to page 1 on search
    setInp("");
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
      </div>
    );
  }

  return (
    <section>
      <div className="min-h-screen bg-[#050505] px-6 py-12 text-white">
        <header className="mx-auto max-w-7xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-2 bg-red-600 rounded-full" />
              <div>
                <h1 className="text-5xl font-black uppercase tracking-tighter">
                  Cinema <span className="text-red-600">Vault</span>
                </h1>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">
                  Curated Masterpieces • {filteredMovies.length} Results
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-2xl gap-3">
              <div className="relative flex-1 group">
                <input
                  type="text"
                  onChange={(e) => setInp(e.target.value)}
                  value={inp}
                  placeholder="Search for movies..."
                  className="block w-full pl-4 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md"
                />
              </div>
              <button
                onClick={searchMovies}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-red-600/20 active:scale-95"
              >
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">SEARCH</span>
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl mb-12">
          <div className="flex flex-wrap gap-2 justify-center pb-4 border-b border-white/5">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleFilter(genre)}
                className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
                  activeGenre === genre
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          {filteredMovies.length <= 0 ? (
            <div className="flex min-h-75 items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-black text-red-600 uppercase tracking-widest">No Movies Found!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentMovies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    id={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    rating={movie.imdbRating}
                    releaseYear={movie.Year}
                    genre={movie.Genre}
                    description={movie.Plot}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-16 flex items-center justify-center gap-4">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-red-600 disabled:opacity-30 disabled:hover:bg-white/5 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => {
                    // Show limited page numbers if too many
                    if (totalPages > 5 && Math.abs(currentPage - (i + 1)) > 2) return null;
                    return (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`w-12 h-12 rounded-xl font-black transition-all ${
                          currentPage === i + 1
                            ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                            : "bg-white/5 text-slate-400 hover:bg-white/10"
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-red-600 disabled:opacity-30 disabled:hover:bg-white/5 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDashboard;