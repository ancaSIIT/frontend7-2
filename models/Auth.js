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
    }).then((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      return this;
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
    }).then((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      return this;
  });
};

Authentification.prototype.logout = function() {
    return $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com//auth/logout",
      headers: { 'x-auth-token:': localStorage.getItem('accessToken')},
      method: "GET",
    }).then((response) => {
      localStorage.removeItem('accessToken');
      return this;
  });
};

  
