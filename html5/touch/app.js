/**
 * Created by Lavenda on 2015/6/4.
 */


var CANVAS_WIDTH = 500, CANVAS_HEIGHT = 500;
var mycanvas;
var context;

window.onload = function(){
    createCanvas();
    drawRect();
}



function createCanvas(){
    document.body.innerHTML = "<canvas id=\"mycanvas\" width=\""+ CANVAS_WIDTH + "\" height=\"" + CANVAS_HEIGHT + "\"></canvas>"

    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");

}



function drawRect(){
    context.fillStyle = "#FF0000";
    context.translate(250, 250);
    context.rotate(75 * Math.PI / 180);
    context.fillRect(-100, -100, 200, 200);
    //context.setTransform(1, 0, 0, 1, 0, 0);
}