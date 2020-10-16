var LoginComponent = new function() {
  var LoginComponent = document.getElementsByClassName("login-component");

  function showPassword() {
    var icon = LoginComponent[0].querySelectorAll(".icon-pw");
    
    icon[0].addEventListener("click", function(e) {
      var elementTarget = e.target;
      var input = elementTarget.parentElement.parentElement.children[0];
      var type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      elementTarget.classList.toggle('fa-eye-slash');
    })
  }

  function events() {
    if(!LoginComponent.length) {
      return true;
    }

    showPassword();
  }

  function init() {
    events();
  }

  return {
    init: init
  }
}

window.onload = function() {
  var loginComponent = LoginComponent;
  loginComponent.init();
}