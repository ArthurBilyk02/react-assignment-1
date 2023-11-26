import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; // Import for the header text
import LatestMovieContainer from "../components/latestMovieContainer";

function LatestMovie() {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Latest Movie:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LatestMovieContainer />
      </Grid>
    </Grid>
  );
}

export default LatestMovie;
