function MovieList() {
    this.items = {};
  }
  
  MovieList.prototype.getMovies = function() {
    return $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com/movies",
      method: "GET"
    });
  };
  