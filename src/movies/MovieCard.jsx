import React from 'react';
import { Star, Play, Plus, MoveRight } from 'lucide-react';

const MovieCard = ({ 
  title, 
  poster, 
  rating, 
  releaseYear, 
  genre, 
  description, 
  onViewDetails 
}) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative  overflow-hidden">
        <img 
          src={poster} 
          alt={title} 
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-md">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold">{rating}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-xl hover:bg-red-700">
            <Play className="ml-1 h-6 w-6 fill-white" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-red-500">{genre}</span>
          <span className="text-sm text-slate-400">{releaseYear}</span>
        </div>
        
        <h3 className="mb-2 truncate text-xl font-bold">{title}</h3>
        
        <p className="mb-6 line-clamp-2 text-sm text-slate-400">
          {description}
        </p>

        <div className="flex items-center gap-3">
          <button 
            onClick={onViewDetails}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-700"
          >
            Details
            <MoveRight className="h-4 w-4" />
          </button>
          
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 transition-colors hover:bg-slate-800">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;