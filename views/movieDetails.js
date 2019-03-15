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
            "</label>" + movie.Type + "</p><div class='btns' id=" + movie._id + "><button id='editMovie' class='btn btn-primary'>Edit</button>" +
            "<button id='deleteMovie' class='btn btn-primary'>Delete</button></div>";
        console.log(movie);

        var list = document.getElementById('ratings');
        for (var i = 0; i < movie.Ratings.length; i++) {
            list.innerHTML += "<li>Source: " + movie.Ratings[i].Source + ", Value: " + movie.Ratings[i].Value + "</li>";
        }
        container.querySelector("#editMovie").addEventListener("click", editMovie);
        container.querySelector("#deleteMovie").addEventListener("click", deleteMovie);
        showBtns();
    });
}

function editMovie() {

    var id = getUrlParameter("id");
    var newcontainer = document.createElement("article");
    newcontainer.setAttribute("id", "EditmovieDetails")
    var movie = new Movie({ _id: id });
    movie.getMovie().then(function() {
        newcontainer.innerHTML =
            `<div class='info'>
            <div class='newtitle'><h3><input type='text' id='newtitle' value='${movie.Title}'/></h3></div></div>
            <div style='clear:both'></div>
            <div id='editpart1'><div class='text'><label>Year: </label><input type='text' class='editinput' id='newyear' value='${movie.Year}'/></div>
            <div class='text'><label> IMDb votes: </label><input type='text' class='editinput' id='newimdbVotes' value='${movie.imdbVotes}' </p></div>
            <div class='text'><label> Rating: </label><input type='text' class='editinput' id='newimdbRating' value='${movie.imdbRating}'</p></div>
            <div class='text'><label>Runtime: </label><input type='text' class='editinput' id='newruntime' value='${movie.Runtime}'></div>
            <div class='text'><label>Genre: </label><input type='text' id='newgenre' class='editinput' value='${movie.Genre}'></div>
            <div class='text'><label>Released: </label><input type='text' id='newreleased' class='editinput' value='${movie.Released}'></div>
            <div class='text'><label>PosterURL: </label><input id="newposterURL" class='editinput' type="text" value="${movie.Poster}"></div>
            <div class='text'><label>Rated: </label><input id="newrated" class='editinput' type="text" value="${movie.Rated}"></div>
            <div class='text'><label>Director: </label><input id="newdirector" class='editinput' type="text" value="${movie.Director}"></div>
            <div class='text'><label>Writer: </label><input id="newwriter" class='editinput' type="text" value="${movie.Writer}"></div></div>
            <div id='editpart2' ><div class='text'><label>Actors: </label><input id="newactors" class='editinput' type="text" value="${movie.Actors}"></div>
            <div class='text'><label>Plot: </label><textarea id="newplot" class='editinput'>${movie.Plot}</textarea></div>
            <div class='text'><label>Language: </label><input id="newlanguage" class='editinput' type="text" value="${movie.Language}"></div>
            <div class='text'> <label>Country: </label><input id="newcountry" class='editinput' type="text" value="${movie.Country}"></div>
            <div class='text'> <label>Movies: </label><input id="newawards" class='editinput' type="text" value="${movie.Awards}"></div>
            <div class='text'> <label>Ratings: </label><input id="newratings" class='editinput' type="text" value="${movie.Ratings[0].Value}"></div>
            <div class='text'> <label>Metascore: </label><input id="newmetascore" class='editinput' type="text" value="${movie.Metascore}"></div>
            <div class='text'> <label>IMDb ID: </label><input id="newimdbID" class='editinput' type="text" value="${movie.imdbID}"></div>
            <div class='text'> <label>Type: </label><input id="newtype" class='editinput' type="text" value="${movie.Type}"></div></div>
            <div style='clear:both'></div>  
            
            <div class="btns id="${movie._id }"><button id='saveEditMovie' class='btn btn-primary'>Save</button><button  id='close' class='btn btn-primary' >Close</button></div>`;



        newcontainer.querySelector("#saveEditMovie").addEventListener("click", saveMovie);
        newcontainer.querySelector("#close").addEventListener("click", closeEdit);
        document.getElementById("Details").appendChild(newcontainer);

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

function deleteMovie() {
    var id = this.parentNode.getAttribute("id");
    var movie = new Movie({ _id: id });
    if (confirm("Are you sure you want to delete ?")) {
        movie.deleteMovie().then(function() {
            movie.deleteMovie().then(function() {
                alert("The entry has been deleted");
                window.open("home.html?id=", "_self");
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

function showBtns() {
    $("#editMovie").addClass("displayNone");
    $("#deleteMovie").addClass("displayNone");
    if (localStorage.getItem('accessToken') !== null) {
      $("#editMovie").removeClass("displayNone");
      $("#deleteMovie").removeClass("displayNone");
      var name=document.getElementById("userName");
      name.innerHTML="User logged in";
    }
};