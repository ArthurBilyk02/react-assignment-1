import React, { useEffect, useState } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { getActor } from "../../api/tmdb-api";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box'; // Import Box for additional styling
import ActorHeader from "./actorHeader";

const ActorsPage = () => {
  const urlPath = window.location.pathname;
  const actorId = urlPath.substring(urlPath.lastIndexOf('/') + 1);
  const [actorInfo, setActorInfo] = useState(null);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const data = await getActor(actorId);
        setActorInfo(data);
      } catch (error) {
        console.error('Error fetching actor data:', error);
      }
    };

    fetchActor();
  }, [actorId]);

  if (!actorInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ActorHeader movie={actorInfo} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={12} md={4}>
          {/* Image on the left */}
          {actorInfo.profile_path && (
            <ImageListItem>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`}
                alt={actorInfo.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageListItem>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <h1>{actorInfo.name}</h1>
            <h3>Biography:<br/> </h3>
            <p>{actorInfo.biography}</p>
            <p>Date of birth: {actorInfo.birthday}</p>
            <p>Date of death: {actorInfo.deathday || 'N/A'}</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ActorsPage;
