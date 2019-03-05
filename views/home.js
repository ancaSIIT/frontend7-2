$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
  var movieList = new MovieList({url:"https://ancient-caverns-16784.herokuapp.com/movies"});
  movieList.getMovies().then(function(response) {
    displayMovies(response.results);
  });
};

function displayMovies(movies) {
    for (var i = 0; i < movies.length; i++) {
        var id = movies[i]._id;
        var title = movies[i].Title;
        var year = movies[i].Year;
        var runtime = movies[i].Runtime;
        var genre = movies[i].Genre;
        var language = movies[i].Language;
        var country = movies[i].Country;
        var poster = movies[i].Poster;
        var imdbRating = movies[i].imdbRating;
        var imdbVotes = movies[i].imdbVotes;
        var imdbID = movies[i].imdbID;
        var type = movies[i].Type;
        $("#movieList").append(
          `<article id="${id}" class="movie">
          <h2>${title}</h2>
          <img src="${poster}" id="image" />
          <h4>Year: ${year}</h4>
          <h4>Runtime: ${runtime}</h4>
          <h4>Genre: ${genre}</h4>
          <h4>Language: ${language}</h4>
          <h4>Country: ${country}</h4>
          <h4>imdbRating: ${imdbRating}</h4>
          <h4>imdbVotes: ${imdbVotes}</h4>
          <h4>imdbID: ${imdbID}</h4>
          <h4>Type: ${type}</h4>
          <button id="details" class="btn btn-outline-info">Details</button>
          <hr/>`
        );
        $("#movieList").on("click", "#details", function() {
          var id = $(this).parent().attr("id");
          window.open("movieDetails.html?id="+id, "_blank");
        })
      }
    };

$("#nextPage").on("click", function() {
  var nextMovieList = new MovieList({url:localStorage.getItem('nextLink')});
  nextMovieList.getMovies().then(function(response) {
    $("#movieList").empty();
      displayMovies(response.results);
      window.scrollTo(0, 0);
  });
});

$("#prevPage").on("click", function() {
  var previousMovieList = new MovieList({url:localStorage.getItem('prevLink')});
  previousMovieList.getMovies().then(function(response) {
    $("#movieList").empty();
      displayMovies(response.results);
      window.scrollTo(0, 0);
  });
});

