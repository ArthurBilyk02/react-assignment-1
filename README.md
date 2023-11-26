# WebApp2MovieAssignment

# Assignment 1 - ReactJS app.

Name: Arthur Bilyk

## Overview.
Created a movie web application using react and tmdb.

### Features.
 
Feature 1 :
Created new pages Latest, Trending and Actors

Feature 2 :
Added filtering by review

Feature 3 : 
Located and displayed latest film

Feature 4 :
Located and displayed every actor involved in a film

Feature 5 :
Located by genre similar movies to the one being viewed

Feature 6 :
Ability to view actor profile



## API endpoints.

getMovies
https://api.themoviedb.org/3/discover/movie
returns a list of movies

getSingularMovie
https://api.themoviedb.org/3/movie/${id}
returns a single movie by id

getGenres
https://api.themoviedb.org/3/genre/movie/list
returns a list of genres

getMovieImages
https://api.themoviedb.org/3/movie/${id}/images
returns movie image by id

getMovieReviews
https://api.themoviedb.org/3/movie/${id}/reviews
returns movie rview by id

getUpcomingMovies
https://api.themoviedb.org/3/movie/upcoming
returns list of upcoming movies

getTrendingMovies
https://api.themoviedb.org/3/trending/movie/day
returns list of trending movies

getLatestMovie
https://api.themoviedb.org/3/movie/latest
returns latest movie to be released

getMovieActors
https://api.themoviedb.org/3/movie/${id}/credits
returns actors by id in specific movie

getSimilarMovies
https://api.themoviedb.org/3/movie/${id}/similar
returns similar movies by genre

getActor
https://api.themoviedb.org/3/person/${id}
reurns actor by id

## Routing.
/: The home page of the website, displays a list of the most recent movies to be release as well as filtering options.

/movies/favorites: Favourited movies.

/movies/upcoming: A preview of upcoming movies including release dates.

/movies/trending: A dynamic list of movies that are currently trending.

/movies/latest: The latest movie added to the collection

/movies/:id: Detailed information about a specific movie, including synopsis, and cast.

/reviews/form: Submit your review for a movie.

/reviews/:id: Read reviews for a specific movie written by other viewers.

/actors/:id: Detailed information about an actor, including their biography.