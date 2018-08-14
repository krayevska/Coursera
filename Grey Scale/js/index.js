var image, greyimage, canvas1, canvas2;


function iupload() {
  canvas1 = document.getElementById("C1");
  var fileimput = document.getElementById("finput");
  image = new SimpleImage (fileimput);
  greyimage = new SimpleImage (fileimput);
  image.drawTo(canvas1);
  }

function makegray() {
  for (var pixel of greyimage.values()) {
  var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  canvas2 = document.getElementById("C2");
  greyimage.drawTo(canvas2);
  }

function clearcanvases() {
  clearcanvas (canvas1);
  clearcanvas (canvas2); 
  }
  
function clearcanvas(canvas) {
  var context = canvas.getContext('2d'); 
  context.clearRect (0,0,canvas.width,canvas.height); 
 }