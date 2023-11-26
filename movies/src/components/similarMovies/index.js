import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner'; 
import Grid from '@mui/material/Grid';
import { getSimilarMovies } from '../../api/tmdb-api';
import MovieCard from '../movieCard';


const SimilarMovies = ({ movieId }) => {
  const { data, isLoading, isError, error } = useQuery(
    ['similar', movieId],
    () => getSimilarMovies(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <h2>Similar Movies</h2>
            <Grid container spacing={2}>
                {data.results.map(movie => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <MovieCard movie={movie} />
                </Grid>
                ))}
            </Grid>
    </div>
  );
  
};

export default SimilarMovies;