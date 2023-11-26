import React, { useEffect, useState } from 'react';
import MovieCard from '../movieCard/index';
import { getLatestMovie } from '../../api/tmdb-api';
import AddToFavoritesIcon from '../cardIcons/addToFavorites';

const LatestMovieContainer = () => {
  const [latestMovie, setLatestMovie] = useState(null);

  useEffect(() => {
    getLatestMovie()
      .then(movie => {
        console.log("Movie fetched", movie);
        setLatestMovie(movie);
      })
      .catch(error => {
        console.error("Error fetching movie", error);
      });
  }, []);

  console.log("Latest movie state", latestMovie); 

  const Cardaction = (movie) => {
    return <AddToFavoritesIcon movie={movie} />;
  };

  return (
    <div>
      {latestMovie ? <MovieCard movie={latestMovie} action={Cardaction} /> : <p>Loading...</p>}
    </div>
  );
};
export default LatestMovieContainer;