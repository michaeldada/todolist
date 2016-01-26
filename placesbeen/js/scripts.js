function Location(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addresses = [];
}

Location.prototype.fullLocation = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function(){
  $("form#new-location").submit(function(event){
    event.preventDefault();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var newLocation = new Location(inputtedStreet, inputtedCity, inputtedState);

    $("ul#locations").append("<li><span class='location'>" + newLocation.fullLocation() +"</span></li>");

    $(".location").last().click(function(){
    $("#show-location").show();
    $("#show-location h2").text(newLocation.fullLocation());
    $(".street").text(newLocation.street);
    $(".city").text(newLocation.city);
    $(".state").text(newLocation.state);

    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");

    });

  });


});
