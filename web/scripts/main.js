
$( document ).ready(function(){

  var socket = io.connect('http://localhost:8000',{reconnection:false});
;
  socket.on('connect',function(){
    console.log('connected');

  });


  socket.on('userUpdate',function(users){

    updateUserList(users);
  });
});



function updateUserList(data){
  $("#userList").empty();
  data.users.forEach(function(data){

    $("#userList").append(`<li>${data}</li>`);
  });
}
