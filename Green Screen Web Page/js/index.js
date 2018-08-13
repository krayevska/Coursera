var imagefg = null;
var imagebg = null;
var canvas1, canvas2;

function foreground() {
  canvas1 = document.getElementById("C1");
  var fileimput = document.getElementById("fg");
  imagefg = new SimpleImage (fileimput);
  imagefg.drawTo(canvas1);
  }

function background() {
  var fileimput = document.getElementById("bg");
  imagebg = new SimpleImage (fileimput);
  canvas2 = document.getElementById("C2");
  imagebg.drawTo(canvas2);
  }

function composite() {
  if (imagebg.getHeight() !== imagefg.getHeight() || imagebg.getWidth()!== imagefg.getWidth()) {
   imagebg.setSize(imagefg.getWidth(), imagefg.getHeight());}
   var result = new SimpleImage (imagefg.getWidth(), imagefg.getHeight()); 
   for (var pixel of imagefg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
     if (pixel.getGreen() > 240) {
      var pixelbg = imagebg.getPixel(x,y);
      result.setPixel(x,y,pixelbg);
      }  
     else {
      result.setPixel(x,y,pixel); 
      }
    }
   return result;
  }

function greenscreen() {
 if (imagefg == null||!imagefg.complete()) {
   alert("foreground not loaded");
   return;
   }
 if (imagebg == null|| !imagebg.complete ()) {
   alert ("background not loaded");
   return;
   }  
 else {
  clearcanvases(); 
  var final = composite();
  final.drawTo(canvas1);
 } 
}
    
function clearcanvases() {
  clearcanvas (canvas1);
  clearcanvas (canvas2); 
  }
  
function clearcanvas(canvas) {
  var context = canvas.getContext ("2d"); 
  context.clearRect (0,0,canvas.width,canvas.height); 
 }