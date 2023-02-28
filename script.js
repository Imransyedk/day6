class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    

  }
  function getPG(movies) {
    const pgMovies = [];
    for (let movie of movies) {
      if (movie.rating === "PG") {
        pgMovies.push(movie);
      }
    }
    return pgMovies;
  }
  
  var Flim = new Movie("Casino Royale", "Eon Productions", "PG13");
  console.log(Flim);
