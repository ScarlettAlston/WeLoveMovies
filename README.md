# WeLoveMovies

The WeLoveMovies project is a project that showcases backend functionality for a movie website that can show users a selection of movies, selected movie reviews, and what theaters a selected movie is playing at.

## Screenshots of End Points:

### /theaters
The "/theaters" endpoint will submit a GET request to show a list of all theaters in the database

![Screen Shot 2022-04-08 at 3 16 59 PM](https://user-images.githubusercontent.com/92840656/162540801-b5f39b7d-9818-4cf3-ab3a-077d5cec8407.png)


### /movies
The "/movies" endpoint will submit a GET request to show a list of all movies in the database

![Screen Shot 2022-04-08 at 3 15 25 PM](https://user-images.githubusercontent.com/92840656/162540552-c510463b-445e-4bcb-9a76-e9b299eb0a90.png)


### /movies/:movieId
The "/movies/:movieId" endpoint will submit a GET request that will read a particular movie based on the movieId

![Screen Shot 2022-04-08 at 3 17 41 PM](https://user-images.githubusercontent.com/92840656/162540956-ac328ed9-035b-4b13-9cd2-c42a71d7ef36.png)

### /movies/:movieId/theaters
The "/movies/:movieId/theaters" endpoint will submit a GET request that will show a list of theaters that are playing a particular movie based on the movieId

![Screen Shot 2022-04-08 at 3 19 18 PM](https://user-images.githubusercontent.com/92840656/162541380-7d51efcc-47f1-4fc8-b5e8-0d74fcf2cc6e.png)


### /movies/:movieId/reviews
The "/movies/:movieId/reviews" endpoint will submit a GET request that will show a list of reviews for a movie based on the movieId

![Screen Shot 2022-04-08 at 3 21 13 PM](https://user-images.githubusercontent.com/92840656/162541639-f6fea509-038a-431b-bfaf-bdb3c10a82cc.png)


### /reviews/:reviewId
The "/reviews/:reviewId" endpoint will submit either a DELETE or PUT request to either delete a review or update a review based on the reviewId

## Technology

**Built With:**
- Express.js
- Node.js
- PostgreSQL and ElephantSQL
