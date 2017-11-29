
console.log("connected to lobby.js");
$(document).ready(function(){
 $.get("/api/user_data").then(function(data) {
   $(".member-email").text(data.email);
   $(".member-username").text(data.username);
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
});
