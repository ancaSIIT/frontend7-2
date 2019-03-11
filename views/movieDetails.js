document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    var id = getUrlParameter("id");
    var container = document.getElementById("movieDetails");
    var movie = new Movie({ _id: id });
    movie.getMovie().then(function() {
        container.innerHTML = "<div class='info'><h2 id='title'>" + movie.Title + "</h2><p id='year'>(" + movie.Year + ")</p>" +
            "<p id='imdbVotes'> IMDb votes: <br />" + movie.imdbVotes + "</p><p id='imdbRating' title='Rating IMDb'>" +
            "<i class='fas fa-star' style='font-size:25px;color:yellow'></i>&nbsp;&nbsp;" + movie.imdbRating + "</p>" +
            "<div style='clear:both'></div><div class='line'><p id='runtime'>" + movie.Runtime + "</p><p id='genre'>" + movie.Genre + "</p>" +
            "<p id='released'>" + movie.Released + "</p></div><br /><div style='clear:both'></div></div><div id='image'>" +
            "<img id='poster' src='" + movie.Poster + "' alt='" + movie.Title + "'/></div><p id='rated' class='datails'><label>Rated:&nbsp;</label>" + movie.Rated + "</p>" +
            "<p id='director' class='datails'><label>Director:&nbsp;</label>" + movie.Director + "</p><p id='writer' class='datails'>" +
            "<label>Writer:&nbsp;</label>" + movie.Writer + "</p><p id='actors' class='datails'><label>Actors:&nbsp;</label>" + movie.Actors + "</p>" +
            "<p id='plot' class='datails'><label>Plot:&nbsp;</label>" + movie.Plot + "</p><p id='language' class='datails'><label>Language:&nbsp;" +
            "</label>" + movie.Language + "</p><p id='country' class='datails'><label>Country:&nbsp;</label>" + movie.Country + "</p>" +
            "<p id='awards' class='datails'><label>Movie awards:&nbsp;</label>" + movie.Awards + "</p><label id='ratingLabel'>Ratings:&nbsp;</label>" +
            "<ul id='ratings' class='datails'></ul><p id='metascore' class='datails'><label>Metascore:&nbsp;</label>" + movie.Metascore + "</p>" +
            "<p id='imdbID' class='datails'><label>IMDb ID:&nbsp;</label>" + movie.imdbID + "</p><p id='type' class='datails'><label>Type:&nbsp;" +
            "</label>" + movie.Type + "</p><div class='btns' id=" + movie._id + "><button id='editMovie'>Edit</button><button id='deleteMovie'>Delete</button></div>";
        console.log(movie);

        var list = document.getElementById('ratings');
        for (var i = 0; i < movie.Ratings.length; i++) {
            list.innerHTML += "<li>Source: " + movie.Ratings[i].Source + ", Value: " + movie.Ratings[i].Value + "</li>";
        }
        container.querySelector("#editMovie").addEventListener("click", editMovie);
        container.querySelector("#deleteMovie").addEventListener("click", deleteMovie);
    });
}

function editMovie() {
    if (localStorage.getItem('access Token') == null) {
        console.log("You need to sign in before editing");
        alert("You need to sign in before editing");
    } else {


        var id = getUrlParameter("id");
        var newcontainer = document.getElementById("EditmovieDetails");
        var movie = new Movie({ _id: id });
        movie.getMovie().then(function() {
            newcontainer.innerHTML =
                `<div class="title"><label id="newValues">Title: </label><input id="newtitle" type="text" value="${movie.Title}"></div><br />
                    <div id='image'><img id='poster' src='${movie.Poster}'/></div>
                    <div class="year"><label id="newValues">Year: </label><input id="newyear" type="text" value="${movie.Year}"></div><br />
                    <div class="imdbvotes"><label id="newValues">IMDb votes: </label><input id="newimdbVotes" type="text" value="${movie.imdbVotes}"></div><br />
                    <div class="imdbratings"><label id="newValues">IMDb Rating: </label><input id="newimdbRating" type="number" value="${movie.imdbRating}"></div><br />
                    <div class="runtime"><label id="newValues">Runtime: </label><input id="newruntime" type="text" value="${movie.Runtime}"></div><br />
                    <div class="genre"><label id="newValues">Genre: </label><input id="newgenre" type="text" value="${movie.Genre}"></div><br />
                    <div class="released"><label id="newValues">Released: </label><input id="newreleased" type="text" value="${movie.Released}"></div><br />
                    <div class="posterURL"><label id="newValues">PosterURL: </label><input id="newposterURL" type="text" value="${movie.Poster}"></div><br />
                    <div class="rated"><div class=""><label id="newValues">Rated: </label><input id="newrated" type="text" value="${movie.Rated}"></div><br />
                    <div class="director"><label id="newValues">Director: </label><input id="newdirector" type="text" value="${movie.Director}"></div><br />
                    <div class="writer"><label id="newValues">Writer: </label><input id="newwriter" type="text" value="${movie.Writer}"></div><br />
                    <div class="actors"><label id="newValues">Actors: </label><input id="newactors" type="text" value="${movie.Actors}"></div><br />
                    <div class="plot"><label id="newValues">Plot: </label><textarea id="newplot">${movie.Plot}</textarea></div><br />
                    <div class="language"><label id="newValues">Language: </label><input id="newlanguage" type="text" value="${movie.Language}"></div><br />
                    <div class="country"><label id="newValues">Country: </label><input id="newcountry" type="text" value="${movie.Country}"></div><br />
                    <div class="movies"><label id="newValues">Movies: </label><input id="newawards" type="text" value="${movie.Awards}"></div><br />
                    <div class="ratings"></div><br /><label id="newValues">Ratings: </label><input id="newratings" type="text" value="${movie.Ratings[0].Value}"></div><br />
                    <div class="metascore"><label id="newValues">Metascore: </label><input id="newmetascore" type="text" value="${movie.Metascore}"></div><br />
                    <div class="imdbID"><label id="newValues">IMDb ID: </label><input id="newimdbID" type="text" value="${movie.imdbID}"></div><br />
                    <div class="type"><label id="newValues">Type: </label><input id="newtype" type="text" value="${movie.Type}"></div><br />
                    <div class="btns id="${movie._id }"><button id='saveEditMovie'>Save</button><button  id='close' " >Close</button></div>`;



            newcontainer.querySelector("#saveEditMovie").addEventListener("click", saveMovie);
            newcontainer.querySelector("#close").addEventListener("click", closeEdit);

            $("#movieDetails").slideToggle().toggleClass("active");

            function closeEdit() {
                window.open(location, '_self')
            }
        });



        function saveMovie() {

            var id = getUrlParameter("id");
            var newTitle = document.getElementById("newtitle").value;
            var newYear = document.getElementById("newyear").value;
            var newimdbVotes = document.getElementById("newimdbVotes").value;
            var newimdbRating = document.getElementById("newimdbRating").value;
            var newRuntime = document.getElementById("newruntime").value;
            var newGenre = document.getElementById("newgenre").value;
            var newReleased = document.getElementById("newreleased").value;
            var newPoster = document.getElementById("newposterURL").value;
            var newRated = document.getElementById("newrated").value;
            var newDirector = document.getElementById("newdirector").value;
            var newWriter = document.getElementById("newwriter").value;
            var newActors = document.getElementById("newactors").value;
            var newPlot = document.getElementById("newplot").value;
            var newLanguage = document.getElementById("newlanguage").value;
            var newCountry = document.getElementById("newcountry").value;
            var newAwards = document.getElementById("newawards").value;
            var newMetascore = document.getElementById("newmetascore").value;
            var newimdbID = document.getElementById("newimdbID").value;
            var newType = document.getElementById("newtype").value;
            var newRatings = [];
            var newRatingsContent = {};
            newRatingsContent.Value = document.getElementById("newratings").value;
            newRatings[0] = newRatingsContent





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
                Type: newType

            });

            movie.saveMovie()
                .then(function() {
                    console.log("The movie has been modified");
                    location.reload(true);
                }),
                function(response) {
                    alert("An error has occurred");
                }




        }

    }
}

function deleteMovie() {
    var id = this.parentNode.getAttribute("id");
    var movie = new Movie({ _id: id });
    if (confirm("Are you sure you want to delete ?")) {
        movie.deleteMovie().then(function() {
            movie.deleteMovie().then(function() {
                alert("The entry has been deleted");
            });
        });
    }
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ?
        "" :
        decodeURIComponent(results[1].replace(/\+/g, " "));
}