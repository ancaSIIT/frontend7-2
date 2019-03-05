document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    var id=getUrlParameter("id");
    var container=document.getElementById("movieDetails");
    var movie=new Movie({_id:id});
    movie.getMovie().then(function() {
        container.innerHTML="<div class='info'><h2 id='title'>"+movie.Title+"</h2><p id='year'>("+movie.Year+")</p>"+
        "<p id='imdbVotes'> IMDb votes: <br />"+movie.imdbVotes+"</p><p id='imdbRating' title='Rating IMDb'>"+
        "<i class='fas fa-star' style='font-size:25px;color:yellow'></i>&nbsp;&nbsp;"+movie.imdbRating+"</p>"+
        "<div style='clear:both'></div><div class='line'><p id='runtime'>"+movie.Runtime+"</p><p id='genre'>"+movie.Genre+"</p>"+
        "<p id='released'>"+movie.Released+"</p></div><br /><div style='clear:both'></div></div><div id='image'>"+
        "<img id='poster' src='"+movie.Poster+"' /></div><p id='rated' class='datails'><label>Rated: </label>"+movie.Rated+"</p>"+
        "<p id='director' class='datails'><label>Director: </label>"+movie.Director+"</p><p id='writer' class='datails'>"+
        "<label>Writer: </label>"+movie.Writer+"</p><p id='actors' class='datails'><label>Actors: </label>"+movie.Actors+"</p>"+
        "<p id='plot' class='datails'><label>Plot: </label>"+movie.Plot+"</p><p id='language' class='datails'><label>Language: "+
        "</label>"+movie.Language+"</p><p id='country' class='datails'><label>Country: </label>"+movie.Country+"</p>"+
        "<p id='awards' class='datails'><label>Movies: </label>"+movie.Awards+"</p><label id='ratingLabel'>Ratings: </label>"+
        "<ul id='ratings' class='datails'></ul><p id='metascore' class='datails'><label>Metascore: </label>"+movie.Metascore+"</p>"+
        "<p id='imdbID' class='datails'><label>IMDb ID: </label>"+movie.imdbID+"</p><p id='type' class='datails'><label>Type: "+
        "</label>"+movie.Type+"</p><p id='dvd' class='datails'><label>DVD: </label>"+movie.DVD+"</p><p id='boxoffice' class='datails'>"+
        "<label>BoxOffice: </label>"+movie.BoxOffice+"</p><p id='production' class='datails'><label>Production: "+
        "</label>"+movie.Production+"</p><p id='website' class='datails'><label>Website: </label>"+movie.Website+"</p>"+
        "<p id='response' class='datails'><label>Response: </label>"+movie.Response+"</p><div class='btns' id="+movie._id+"><button id='editMovie' class='btn btn-info'>"+
        "Edit movie</button> <button id='deleteMovie' class='btn btn-info'>Delete movie</button></div><div id='emptyDiv'></div>";
        console.log(movie);

        var list=document.getElementById('ratings');
        for (var i=0; i<movie.Ratings.length; i++) {
            list.innerHTML+="<li>Source: "+movie.Ratings[i].Source+", Value: "+movie.Ratings[i].Value+"</li>";
        }
        container.querySelector("#editMovie").addEventListener("click", editMovie);
        container.querySelector("#deleteMovie").addEventListener("click", deleteMovie);
    });
}


function editMovie() {
    var id = getUrlParameter("id");
    var container = document.getElementById("movieDetails");
    var movie = new Movie({ _id: id });
    var oldMovie;
    movie.getMovie().then(function() {
        oldMovie = movie
        container.innerHTML =
            "<div class='info'><input type='text' id='title' value='" + movie.Title +
            "'/><input type='text' id='year' value='" + movie.Year + "'/>" +
            "<p contenteditable='true' id='imdbVotes' > IMDb votes: <br />" + movie.imdbVotes +
            "</p><p contenteditable='true' id='imdbRating' title='Rating IMDb'>" +
            "<i class='fas fa-star' style='font-size:25px;color:yellow'></i>&nbsp;&nbsp;" + movie.imdbRating +
            "</p>" +
            "<div style='clear:both'></div><div class='line'><input type='text' id='runtime' value='" + movie.Runtime +
            "'/><input type='text' id='genre' value='" + movie.Genre + "'/>" +
            "<input type='text' id='released' value='" + movie.Released +
            "'/></div><br /><div style='clear:both'></div></div><div id='image'>" +
            "<img id='poster' src='" + movie.Poster +
            "' /></br></br><label>Poster: </label><input type='text id='poster' value='" +
            movie.Poster + "'/></div><label id='ratingLabel'>Rated: </label><input type='text' id='rated' class='datails' value='" + movie.Rated + "'/><br />" + "<label id='ratingLabel'>Director: </label><input type='text' id='director' class='datails' value='" + movie.Director +
            "'/><br /><label id='ratingLabel'>Writer: </label><input type='text' id='writer' class='datails' value='" + movie.Writer +
            "'/></br /><label id='ratingLabel'>Actors: </label><input type='text' id='actors' class='datails' value='" + movie.Actors +
            "'/><br />" +
            "<label id='ratingLabel'>Plot: </label><input type='text' id='plot' class='datails' value='" + movie.Plot +
            "'/></br><label id='ratingLabel'>Language: </label><input type='text' id='language' class='datails' value='" + movie.Language +
            "'/><br /><label id='ratingLabel'>Country: </label><input type='text' id='country' class='datails' value='" + movie.Country +
            "'/><br />" +
            "<label id='ratingLabel'>Movies: </label><input type='text' id='awards' class='datails' value='" + movie.Awards +
            "'/><br /><label id='ratingLabel'>Ratings: </label><input type='text'  id='ratings' value='" + "'/><br /><label id='ratingLabel'>Metascore: </label><input type='text' id='metascore' class='datails' value='" + movie.Metascore +
            "'/><br />" +
            "<label id='ratingLabel'>IMDb ID: </label><input type='text' id='imdbID' class='datails' value='" + movie.imdbID +
            "'/><br /><label id='ratingLabel'>Type: </label><input type='text' id='type' class='datails' value='" + movie.Type +
            "'/><br /><label id='ratingLabel'>DVD: </label><input type='text' id='dvd' class='datails' value='" + movie.DVD + "'/><br /><label id='ratingLabel'>BoxOffice: </label><input type='text' id='boxoffice' class='datails' value='" + movie.BoxOffice + "'/><br /><label id='ratingLabel'>Production: </label><input type='text' id='production' class='datails' value='" + movie.Production + "'/><br / ><label id='ratingLabel'>Website: </label><input type='text' id='website' class='datails' value='" + movie.Website + "'/><br / >" +
            "<label id='ratingLabel'>Response: </label><input type='text' id='response' class='datails' value='" + movie.Response +
            "'</><div class='btns' id=" + movie._id + "><button id='saveEditMovie'>" +
            "Save</button></div>";

        var list = document.getElementById('ratings');
        for (var i = 0; i < movie.Ratings.length; i++) {
            list.innerHTML += "<input type='text'>Source: " + movie.Ratings[i].Source + ", Value: " + movie.Ratings[i].Value + "'/>";
        }

        container.querySelector("#saveEditMovie").addEventListener("click", saveMovie(oldmovie));

    });

}

function saveMovie(oldmovie) {

    var id = getUrlParameter("id");
    var newTitle = document.getElementById("title").value;
    var newYear = document.getElementById("year").value;
    var newimdbVotes = document.getElementById("imdbVotes").value;
    var newimdbRating = document.getElementById("imdbRating").value;
    var newRuntime = document.getElementById("runtime").value;
    var newGenre = document.getElementById("genre").value;
    var newReleased = document.getElementById("released").value;
    var newPoster = document.getElementById("poster").value;
    var newRated = document.getElementById("rated").value;
    var newDirector = document.getElementById("director").value;
    var newWriter = document.getElementById("writer").value;
    var newActors = document.getElementById("actors").value;
    var newPlot = document.getElementById("plot").value;
    var newLanguage = document.getElementById("language").value;
    var newCountry = document.getElementById("country").value;
    var newAwards = document.getElementById("awards").value;
    var newRatings = document.getElementById("ratings").value;
    var newMetascore = document.getElementById("metascore").value;
    var newimdbID = document.getElementById("imdbID").value;
    var newType = document.getElementById("type").value;
    var newDVD = document.getElementById("dvd").value;
    var newBoxOffice = document.getElementById("boxoffice").value;
    var newProduction = document.getElementById("production").value;
    var newWebsite = document.getElementById("website").value;
    var newResponse = document.getElementById("response").value;

    var movie = new Movie({
        _id: id,
        Title: newTitle,
        Year: newYear,
        imdbVotes: newimdbVotes,
        imdbRating: newimdbRating,
        Runtime: newRuntime,
        Genre: newGenre,
        Released: newReleased,
        Poster: newPoster,
        Rated: newRated,
        Director: newDirector,
        Writer: newWriter,
        Actors: newActors,
        Plot: newPlot,
        Language: newLanguage,
        Country: newCountry,
        Awards: newAwards,
        Ratings: newRatings,
        Metascore: newMetascore,
        imdbID: newimdbID,
        Type: newType,
        DVD: newDVD,
        BoxOffice: newBoxOffice,
        Production: newProduction,
        Website: newWebsite,
        Response: newResponse

    });


    if (localStorage.getItem('access Token') == null) {
        console.log("You need to sign in before saving");
    } else if (oldMovie == movie) {
        console.log("Nothing to update")
    } else {
        movie.saveMovie()
            .then(function() {
                console.log("The movie has been modified");
            });

    }
}



function deleteMovie() {
    var id = this.parentNode.getAttribute("id");
    var movie = new Movie({ _id: id });
    if (confirm("Are you sure you want to delete ?")) {
        movie.deleteMovie().then(function() {
            alert("The entry has been deleted");
        });
    };

};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ?
        "" :
        decodeURIComponent(results[1].replace(/\+/g, " "));
}