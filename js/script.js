$(document).ready(function () {
  $(".accordion-button").on("click", function () {
    $(this).next(".accordion-content").slideToggle();
  });

  var words = [
    "We are the embodiment of fluidity",
    "We are neither male nor female",
    "We aren’t bound by biology",
    "We are hybrid entities",
    "We embrace diverse expressions",
    "Our identities are fluid",
    "We disrupt conventional",
    "We rise above boundaries",

  ],
    i = 0;
  setInterval(function () {
    $('#words').fadeOut(function () {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    });
  }, 5000)
});
