import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getMovieActors } from '../../api/tmdb-api';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MovieActors = ({ movieId }) => {
  const navigate = useNavigate(); // useNavigate hook
  const { data: actors, isLoading, isError, error } = useQuery(
    ['actors', movieId],
    () => getMovieActors(movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleCardClick = (actorId) => {
    navigate(`/actors/${actorId}`);
  };

  return (
    <div>
      <h2>Actors</h2>
      <Grid container spacing={3}>
        {actors && actors.slice(0, 8).map((actor) => (
          <Grid item xs={12} sm={6} md={3} key={actor.id}>
            <Card onClick={() => handleCardClick(actor.id)} style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="250"
                image={actor.profile_path}
                alt={actor.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {actor.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieActors;
