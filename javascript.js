window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = ""; // required for Chrome
  event.message = "Out so soon? Sure you don't want high quality photos?";
  return event.message;
});