function Authentification (options = {}) {
    this.username = options.username;
    this.password = options.password;
}

Authentification.prototype.login = function() {
    return $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com//auth/login",
      method: "POST",
      data: {
        username: this.username,
        password: this.password,
      }
    });
  };

Authentification.prototype.register = function() {
    return $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com//auth/register",
      method: "POST",
      data: {
        username: this.username,
        password: this.password,
      }
    });
  };

Authentification.prototype.logout = function() {
    return $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com//auth/logout",
      headers: { 'x-auth-token:': localStorage.getItem('accessToken')},
      method: "GET",
    });
  };
