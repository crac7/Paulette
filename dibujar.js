var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle ="red";
lienzo.moveTo(50,150);
lienzo.lineTo(100,100);
lienzo.stroke();
lienzo.closePath();
