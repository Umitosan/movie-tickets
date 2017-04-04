// BACK END

function User(name, age) {
  this.name = name;
  this.age = age;
}

function Ticket(title, time) {
  this.title = title;
  this.time = time;
}

Ticket.prototype.price = function(age) {
  console.log("user's age: " + age)
}

// FRONT END
$(document).ready(function() {
  $("#mainForm").submit(function(e) {
    e.preventDefault();

    // Gather user input from form fields
    var userName = $("#userName").val();
    var userTitle = $("#movie-titles").val();
    var userShowTime = $("#show-times").val();
    var userAge = $("#age").val();

    var newUser = new User(userName,userAge);
    var newTicket = new Ticket(userTitle,userShowTime);

    newTicket.price(newUser.age);

    $(".ticket-summary #summary-sentence").text(userName);
    $(".ticket-summary #movie-result").text(userTitle);
    $(".ticket-summary #show-time-result").text(userShowTime);
    $(".ticket-summary #price-result").text("price");

    $(".ticket-summary").hide();
    $(".ticket-summary").show();

  });
});
