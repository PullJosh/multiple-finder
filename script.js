var htmlResult = "";
for(i = 0; i < 10; i++){
  htmlResult += "<tr>";
  for(n = 1; n <= 10; n++) {
    htmlResult += "<td><div class='content'>" + String(n + i * 10) + "</div></td>";
  }
  htmlResult += "</tr>";
}

document.getElementById("numTable").innerHTML = htmlResult;

function updateColors() {
  $("#numTable td").removeClass("toggled");
  if($("#numInput").val() >= 0 && $("#numInput").val() <= 100) {
    $("#numTable td").each(function(index){
      if((index + 1) % $("#numInput").val() == 0) {
        $(this).addClass("toggled");
      }
    });
  }
}

$("#numInput").change(function() {
  updateColors();
});
$("#numInput").keyup(function() {
  updateColors();
});

window.onload = updateColors();
