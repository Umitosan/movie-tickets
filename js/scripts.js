// BACK END




// FRONT END
$(document).ready(function() {
  $("#mainForm").submit(function(e) {
    e.preventDefault();

    // Gather user input from form fields
    var userName = $("#userName").val();
    var userMovie = $("#movie-titles").val();
    var userShowTime = $("#show-times").val();
    var userAge = $("#age").val();

    // var newUser =

    $(".ticket-summary #summary-sentence").text(userName);
    $(".ticket-summary #movie-result").text(userMovie);
    $(".ticket-summary #show-time-result").text(userShowTime);
    $(".ticket-summary #price-result").text("price");

    $(".ticket-summary").hide();
    $(".ticket-summary").show();

  });
});
