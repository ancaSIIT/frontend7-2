function MovieList(options="") {
  this.results = {};
  this.url = options.url;
};

MovieList.prototype.getMovies = function() {
  return $.ajax({
    url: this.url,
    method: "GET"
  }).then((response) => {
      this.results = response.results;
      this.url = response.pagination.links.self;
      localStorage.setItem('prevLink', response.pagination.links.prev);
      localStorage.setItem('nextLink', response.pagination.links.next);
      return this;
  })
};