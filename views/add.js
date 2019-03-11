document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    
    $("#close").on("click", function() {
        window.open("home.html?id=", "_self");
    });
   
    $("#save").on("click", function() {
        var title = document.getElementById("title").value;
        var year = document.getElementById("year").value;
        var imdbVotes = document.getElementById("imdbVotes").value;
        var imdbRating = document.getElementById("imdbRating").value;
        var runtime = document.getElementById("runtime").value;
        var genre = document.getElementById("genre").value;
        var released = document.getElementById("released").value;
        var posterURL = document.getElementById("poster").value;
        var rated = document.getElementById("rated").value;
        var director = document.getElementById("director").value;
        var writer = document.getElementById("writer").value;
        var actors = document.getElementById("actors").value;
        var plot = document.getElementById("plot").value;
        var language = document.getElementById("language").value;
        var country = document.getElementById("country").value;
        var awards = document.getElementById("awards").value;
        var ratings = document.getElementById("ratings").value;
        var metascore = document.getElementById("metascore").value;
        var imdbID = document.getElementById("imdbID").value;
        var type = document.getElementById("type").value;
    
        var movie = new Movie({
            Title: title,
            Year: year,
            imdbVotes: imdbVotes,
            imdbRating: newimdbRating,
            Runtime: runtime,
            Genre: genre,
            Released: released,
            Poster: poster,
            Rated: rated,
            Director: director,
            Writer: writer,
            Actors: actors,
            Plot: plot,
            Language: language,
            Country: country,
            Awards: awards,
            Ratings: ratings,
            Metascore: metascore,
            imdbID: imdbID,
            Type: type,
        });

    movie.addMovie().then(
        function(response) {
            alert("You have successfully added your entry!");
           // movie._id = response._id;
            //movie.getMovie().then(function(self) {
            //displayMovie(self);
            },      
        function(response) {
            alert("An error has occurred");
        });
       
    }); 
};



