  var popup = document.querySelector(".popup");
  var openPopup = document.querySelector(".btn-map");
  var closePopup = document.querySelector(".popup-close");
  var login = document.querySelector("[name=name]");
  var email = document.querySelector("[name=e-mail]");
  var storage = localStorage.getItem("login");
  var form = document.querySelector("form");
  var windowPopup = document.querySelector(".window-popup");
  openPopup.addEventListener ("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup-show");
    document.querySelector(".window-popup").style.display = "block";
    if (storage) {
      login.value = storage;
      email.focus();}
      else {
        login.focus();
      }
  });
  form.addEventListener('submit', function(event) {
    if (!login.value || !email.value) {
      event.preventDefault();
      popup.classList.add("popup-error");
    }
    else {
      localStorage.setItem('login', login.value);
    }
});
  window.addEventListener ("keydown", function (event) {
    if (event.keyCode == 27) {
      if (popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show");
    document.querySelector(".window-popup").style.display = "none";
  };};});
  windowPopup.addEventListener ("click", function () {
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
    document.querySelector(".window-popup").style.display = "none";
  });
  closePopup.addEventListener ("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
    document.querySelector(".window-popup").style.display = "none";
  })
