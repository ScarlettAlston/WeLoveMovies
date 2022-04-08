# WeLoveMovies

The WeLoveMovies project is a project that showcases backend functionality for a movie website that can show users a selection of movies, selected movie reviews, and what theaters a selected movie is playing at.

## Screenshots of End Points:

### /theaters
The "/theaters" endpoint will submit a GET request to show a list of all theaters in the database


### /movies
The "/movies" endpoint will submit a GET request to show a list of all movies in the database

### /movies/:movieId
The "/movies/:movieId" endpoint will submit a GET request that will read a particular movie based on the movieId

### /movies/:movieId/theaters
The "/movies/:movieId/theaters" endpoint will submit a GET request that will show a list of theaters that are playing a particular movie based on the movieId

### /movies/:movieId/reviews
The "/movies/:movieId/reviews" endpoint will submit a GET request that will show a list of reviews for a movie based on the movieId

### /reviews/:reviewId
The "/reviews/:reviewId" endpoint will submit either a DELETE or PUT request to either delete a review or update a review based on the reviewId
