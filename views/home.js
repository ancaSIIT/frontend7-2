$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
  initState();
  showAdd();
  var movieList = new MovieList({url:"https://ancient-caverns-16784.herokuapp.com/movies"});
  movieList.getMovies().then(function(response) {
    displayMovies(response.results);
  });
  
  $("#searchButton").on("click", function() {
      var searchBy=$("#searchInput").val();
      $("#movieList").empty();
      $("#searchInput").val("");
      console.log(searchBy);
      var movieList = new MovieList({url:"https://ancient-caverns-16784.herokuapp.com/movies?Title=" + searchBy});
      movieList.getMovies().then(function(response) {
        console.log(response);
        displayMovies(response.results);
      }).catch(function(error) {
        alert(error);
      })
  });

  var c=document.getElementById("inputContainer");
  var d=document.getElementById("advanceLink");
    d.addEventListener("click", function() {
        if (c.style.display === "block") {
            c.style.display = "none";
           location.reload(true);
          } else {
            c.style.display = "block";
            document.getElementById("movieList").innerHTML="";
          }
    });

    document.getElementById("submitSearch").addEventListener("click", function () {
        document.getElementById("movieList").innerHTML="";
        var search1=document.querySelector("input[name='Title']").value;
        var search2=document.querySelector("input[name='Year']").value;
        var search3=document.querySelector("input[name='Genre']").value;
        var search4=document.querySelector("input[name='Language']").value; 
        var search5=document.querySelector("input[name='imdbRating']").value;
        var search6=document.querySelector("input[name='Type']").value;
        var query={"Title":search1, "Year": search2, "Genre": search3, "Language": search4, "imdbRating": search5, "Type": search6};
        console.log(query);
        var text="";
        var x;
        for (x in query) {
            if (query[x]!="") {
                text+=x+"="+query[x]+"&";
            }
        }
        document.querySelector("input[name='Title']").value="";
        document.querySelector("input[name='Year']").value="";
        document.querySelector("input[name='Genre']").value="";
        document.querySelector("input[name='Language']").value=""; 
        document.querySelector("input[name='imdbRating']").value="";
        document.querySelector("input[name='Type']").value="";
      console.log(text);
      var movieList = new MovieList({url:"https://ancient-caverns-16784.herokuapp.com/movies?"+text});
      movieList.getMovies().then(function(response) {
        displayMovies(response.results);
      }).catch(function(error) {
        alert(error);
      })
  })
};

function displayMovies(movies) {
  if (movies.length==0) {
    $("#movieList").append(`<p style="color:white; margin-left:20px; font-size:1em">Your search did not match any movie.</p>`);
  }
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
          <img src="${poster}" alt="${title}"/>
          <h6>Year: ${year}</h6>
          <h6>Runtime: ${runtime}</h6>
          <h6>Genre: ${genre}</h6>
          <h6>Language: ${language}</h6>
          <h6>Country: ${country}</h6>
          <h6>imdbRating: ${imdbRating}</h6>
          <h6>imdbVotes: ${imdbVotes}</h6>
          <h6>imdbID: ${imdbID}</h6>
          <h6>Type: ${type}</h6><br />
          <button id="details" class="btn btn-primary">Details</button>`
        );
        $("#movieList").on("click", "#details", function() {
          var id = $(this).parent().attr("id");
          window.open("movieDetails.html?id="+id, "_self");
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

// LOGIN FUNCTION
$(document).ready(function () {
  $("#login").click(function () {
    event.preventDefault();
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    // Checking for blank fields.
    if (username == '' || password == '') {
      $('input[type="text"],input[type="password"]').css("border", "2px solid red");
      $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
      alert("Please fill all fields!");
    } else {
      var authModel = new Authentication({ username: username, password: password });
      authModel.login().then(function(response) {
        location.reload();
        $("#welcome").text("Logged in as " + username);
      },
      function(response){
        $("#authError").text("Username is not registered!")
      });
    }
  });
});


// REGISTER FUNCTION
$(document).ready(function () {
  $("#register").click(function (event) {
    event.preventDefault();
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    if (username == '' || password == '') {
      alert("Please fill all fields!");
    } else {
      var authModel = new Authentication({ username: username, password: password });
      authModel.register().then(function(response) {
        location.reload();
        $("#welcome").text("Logged in as " + username);
      },
      function(response){
        $("#authError").text("Username already registered!")
      });
    }
  });
});

// LOGOUT FUNCTION
$(document).ready(function () {
  $("#logout").click(function (event) {
    event.preventDefault();
    var authModel = new Authentication();
    authModel.logout().then(function(response) {
      location.reload();
      $("#welcome").text("");
    });
  });
});

function showAdd() {
  $("#addMovie").addClass("displayNone");
  if (localStorage.getItem('accessToken') !== null) {
    $("#addMovie").removeClass("displayNone");
  }
};

function initState() {
  if (localStorage.getItem('accessToken') !== null) {
    $("#logout").removeClass("displayNone");
    $("#dropdownMenu1").addClass("displayNone");
  } else{
    $("#logout").addClass("displayNone");  
    $("#dropdownMenu1").removeClass("displayNone");
  }
  
}