
  // Look for .hamburger
  var menuenlaces = document.getElementById("menuenlaces");
  var hamburger = document.querySelector("#hamburger");
  // On click
  hamburger.addEventListener("click", () => {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menuenlaces.classList.toggle("menuenlaces_JS");
    menuenlaces.style.transition = "0.1s"
    // Do something else, like open/close menu
  });