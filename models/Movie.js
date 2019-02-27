function Movie(options = {}) {
    this._id = options._id;
    this.Title = options.Title;
    this.Year = options.Year;
    this.Rated = options.Rated;
    this.Released = options.Released;
    this.Runtime = options.Runtime;
    this.Genre = options.Genre;
    this.Director = options.Director;
    this.Writer = options.Writer;
    this.Actors = options.Actors;
    this.Plot = options.Plot;
    this.Language = options.Language;
    this.Country = options.Country;
    this.Awards = options.Awards;
    this.Poster = options.Poster;
    this.Ratings = options.Ratings;
    this.Metascore = options.Metascore;
    this.imdbRating = options.imdbRating;
    this.imdbVotes = options.imdbVotes;
    this.imdbID = options.imdbID;
    this.Type = options.Type;
    this.DVD = options.DVD;
    this.BoxOffice = options.BoxOffice;
    this.Production = options.Production;
    this.Website = options.Website;
    this.Response = options.Response;
  }
  
  var apiRoot = "https://ancient-caverns-16784.herokuapp.com/movies/";
  Movie.prototype.getMovie = function() {
    var self = this;
    return $.ajax({
      url: apiRoot + this._id,
      method: "GET"
    }).then(function(response) {
      self._id = response._id;
      self.Title = response.Title;
      self.Year = response.Year;
      self.Rated = response.Rated;
      self.Released = response.Released;
      self.Runtime = response.Runtime;
      self.Genre = response.Genre;
      self.Director = response.Director;
      self.Writer = response.Writer;
      self.Actors = response.Actors;
      self.Plot = response.Plot;
      self.Language = response.Language;
      self.Country = response.Country;
      self.Awards = response.Awards;
      self.Poster = response.Poster;
      self.Ratings = response.Ratings;
      self.Metascore = response.Metascore;
      self.imdbRating = response.imdbRating;
      self.imdbVotes = response.imdbVotes;
      self.imdbID = response.imdbID;
      self.Type = response.Type;
      self.DVD = response.DVD;
      self.BoxOffice = response.BoxOffice;
      self.Production = response.Production;
      self.Website = response.Website;
      self.Response = response.Response;
      return self;
    });
  };
  
  Movie.prototype.deleteMovie = function() {
    return $.ajax({
      url: apiRoot + this._id,
      headers: { 'x-auth-token:': localStorage.getItem('accessToken')},
      method: "DELETE"
    });
  };
  
  Movie.prototype.saveMovie = function() {
    return $.ajax({
      url: apiRoot + this._id,
      headers: { 'x-auth-token:': localStorage.getItem('accessToken')},
      method: "PUT",
      data: {
        Title: this.Title,
        Year: this.Year,
        Rated: this.Rated,
        Released: this.Released,
        Runtime: this.Runtime,
        Genre: this.Genre,
        Director: this.Director,
        Writer: this.Writer,
        Actors: this.Actors,
        Plot: this.Plot,
        Language: this.Language,
        Country: this.Country,
        Awards: this.Awards,
        Poster: this.Poster,
        Ratings: this.Ratings,
        Metascore: this.Metascore,
        imdbRating: this.imdbRating,
        imdbVotes: this.imdbVotes,
        imdbID: this.imdbID,
        Type: this.Type,
        DVD: this.DVD,
        BoxOffice: this.BoxOffice,
        Production: this.Production,
        Website: this.Website,
        Response: this.Response,
        Writer: this.Writer,
        Actors: this.Actors,
        Plot: this.Plot,
        Language: this.Language,
        Country: this.Country,
        Awards: this.Awards,
        Poster: this.Poster,
        Ratings: this.Ratings,
        Metascore: this.Metascore,
        imdbRating: this.imdbRating,
        imdbVotes: this.imdbVotes,
        imdbID: this.imdbID,
        Type: this.Type,
        DVD: this.DVD,
        BoxOffice: this.BoxOffice,
        Production: this.Production,
        Website: this.Website,
        Response: this.Response,
      }
    });
  };
  
  Movie.prototype.addMovie = function() {
    return $.ajax({
      url: apiRoot,
      headers: {'x-auth-token': localStorage.getItem('accessToken'),
                'Content-Type': 'application/x-www-form-urlencoded'
    },

      method: "POST",
      data: {
        Title: this.Title,
        Year: this.Year,
        Rated: this.Rated,
        Released: this.Released,
        Runtime: this.Runtime,
        Genre: this.Genre,
        Director: this.Director,
        Writer: this.Writer,
        Actors: this.Actors,
        Plot: this.Plot,
        Language: this.Language,
        Country: this.Country,
        Awards: this.Awards,
        Poster: this.Poster,
        Ratings: this.Ratings,
        Metascore: this.Metascore,
        imdbRating: this.imdbRating,
        imdbVotes: this.imdbVotes,
        imdbID: this.imdbID,
        Type: this.Type,
        DVD: this.DVD,
        BoxOffice: this.BoxOffice,
        Production: this.Production,
        Website: this.Website,
        Response: this.Response,
        Writer: this.Writer,
        Actors: this.Actors,
        Plot: this.Plot,
        Language: this.Language,
        Country: this.Country,
        Awards: this.Awards,
        Poster: this.Poster,
        Ratings: this.Ratings,
        Metascore: this.Metascore,
        imdbRating: this.imdbRating,
        imdbVotes: this.imdbVotes,
        imdbID: this.imdbID,
        Type: this.Type,
        DVD: this.DVD,
        BoxOffice: this.BoxOffice,
        Production: this.Production,
        Website: this.Website,
        Response: this.Response,
      }
    });
  };
