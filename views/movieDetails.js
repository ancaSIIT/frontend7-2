document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    var id=getUrlParameter("id");
    var container=document.getElementById("movieDetails");
    var movie=new Movie({_id:id});
    movie.getMovie().then(function() {
        container.innerHTML="<div id='info'><h1 id='title'>"+movie.Title+"</h1><p id='year'>("+movie.Year+")</p>"+
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
        "<p id='response' class='datails'><label>Response: </label>"+movie.Response+"</p><div id='btns'><button id='editMovie'>"+
        "Edit movie</button><button id='deleteMovie'>Delete movie</button></div>";
        console.log(movie);

        var list=document.getElementById('ratings');
        for (var i=0; i<movie.Ratings.length; i++) {
            list.innerHTML+="<li>Source: "+movie.Ratings[i].Source+", Value: "+movie.Ratings[i].Value+"</li>";
        }
        container.querySelector("#editMovie").addEventListener("click", editMovie);
        container.querySelector("#deleteMovie").addEventListener("click", deleteMovie);
    });
}


/*function editMovie() {
    window.open("editMovie.html?id="+id, "_self");
}

function deleteMovie() {

}*/

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }