var zoomLevel = 1;
var zoomIncrement = 0.1;

function zoomIn() {
  zoomLevel += zoomIncrement;
  document.getElementById("zoomImg").style.transform = "scale(" + zoomLevel + ")";
}

function zoomOut() {
  if (zoomLevel > zoomIncrement) {
    zoomLevel -= zoomIncrement;
    document.getElementById("zoomImg").style.transform = "scale(" + zoomLevel + ")";
  }
}
