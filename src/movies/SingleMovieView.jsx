import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import { Star, Calendar, Tag, ArrowLeft, Play, Info } from "lucide-react";

const SingleMovieView = () => {
  const { titleName } = useParams();
  const navigate = useNavigate();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((m) => m.Title === decodeURIComponent(titleName));

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-black text-red-600 uppercase tracking-widest">
            Movie Not Found
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-slate-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest"
          >
            ← Back to Vault
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Background Overlay */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={movie.Poster}
          alt=""
          className="w-full h-full object-cover opacity-20 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 -mt-64 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-red-600 transition-all font-bold uppercase text-xs tracking-widest group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Collection
        </button>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Poster Section */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative group">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-1.5 bg-red-600 rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Exclusive Selection
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              {movie.Title}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white">{movie.imdbRating}</span>
                <span className="text-slate-600">/ 10</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Calendar className="h-4 w-4" />
                <span>{movie.Year}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 text-red-500">
                <Tag className="h-4 w-4" />
                <span>{movie.Genre}</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-red-600" />
                <h2 className="text-lg font-black uppercase tracking-widest">
                  Synopsis
                </h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-3xl">
                {movie.Plot}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-xl shadow-red-600/20 active:scale-95">
                <Play className="h-5 w-5 fill-white" />
                Watch Now
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl border border-white/10 transition-all duration-300">
                Add to Vault
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieView;
