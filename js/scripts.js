// BACK END

function User(name, age) {
  this.name = name;
  this.age = age;
}

function Ticket(title, time) {
  this.title = title;
  this.time = time;
}

var titleDiscount = function(title) {
  var titleDiscount = 0;
  switch (title) {
    case "Mad Max":
      titleDiscount = -2;
      break;
    case "Avatar":
      titleDiscount = -4;
      break;
    case "La La Land":
      titleDiscount = +1;
      break;
    default:
      titleDiscount = 0;
      break;
  }
  console.log( "title dis" + titleDiscount);
  return titleDiscount;
}

var timeDiscount = function(time) {
  var timeDiscount = 0;
  switch (true) {
    case ((time >= 0) && (time <= 5)) :
      timeDiscount = -2;
      break;
    case (time > 5):
      timeDiscount = 0;
      break;
    default:
      timeDiscount = 0;
      break;
  }
  console.log("time dis" + timeDiscount);
  return timeDiscount;
}

var ageDiscount = function(age) {
  var ageDiscount = 0;
  switch (true) {
    case (age <= 13):
      ageDiscount = -4;
      break;
    case (age >= 64):
      ageDiscount = -4;
      break;
    default:
      ageDiscount = 0;
      break;
  }
  console.log("age dis: " + ageDiscount);
  return ageDiscount;
}


Ticket.prototype.price = function(title , time , age) {
  var tmpPrice =  14 + titleDiscount(title) + timeDiscount(time) + ageDiscount(age);
  return "$" + tmpPrice + ".00";
}

// FRONT END
$(document).ready(function() {
  $("#mainForm").submit(function(e) {
    e.preventDefault();

    // Gather user input from form fields
    var userName = $("#userName").val();
    var userTitle = $("#movie-titles").val();
    var userShowTime = $("#show-times").val();
    var userShowTimePretty = $("#show-times option:selected").text();
    var userAge = $("#age").val();

    var newUser = new User(userName,userAge);
    var newTicket = new Ticket(userTitle,userShowTime);

    var finalPriceStr = newTicket.price(newTicket.title, newTicket.time, newUser.age);

    console.log("finalPriceStr: " , finalPriceStr)

    $(".ticket-summary #summary-sentence").text(userName);
    $(".ticket-summary #movie-result").text(userTitle);
    $(".ticket-summary #show-time-result").text(userShowTimePretty);
    $(".ticket-summary #price-result").text(finalPriceStr);

    $(".ticket-summary").hide();
    $(".ticket-summary").show();

  });
});
