var player1ready = false;


console.log("connected to lobby.js");
console.log("Player One Status" + player1ready);
$(document).ready(function(){


 $.get("/api/user_data").then(function(data) {
   $(".member-email-1").text(data.email);
   $(".member-username-1").text(data.username);
  });


  $("#citySearch").click(function(){
    var value = $("#cityName").val();
    console.log(value);
    $.ajax({
      type: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + value + "&sensor=false&key=AIzaSyDije1gHJ-JpNUMGPBbZl8Fq8c9tsu3COk",
      dataType: "json",
      success: processJSON
    });

    function processJSON(json) {
      console.log(json);
      playerReady(player1ready);
    }
  });

 function updateMove(move) {
  // console.log(move);
  $.ajax({
   method: "PUT",
   url: "/playermove",
   data: {move:move}
  }).done(
   // console.log("finished")
  );
}
function playerReady(player){
  player = true;
  console.log("Player status " + player);
}


});
