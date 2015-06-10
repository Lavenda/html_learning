/**
 * Created by Lavenda on 2015/6/4.
 */

var box1Div;
var box2Div;
var msgDiv;
var img1;

window.onload = function(){
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");

    //box1Div.ondragenter = function(event){
    //    showObj(event);
    //}


    box1Div.ondragover = function(event){
        event.preventDefault();
    }
    box2Div.ondragover = function(event){
        event.preventDefault();
    }


    img1.ondragstart = function(event){
        event.dataTransfer.setData("imgId", "img1");
    }


    box1Div.ondrop = dropImgHandler;
    box2Div.ondrop = dropImgHandler;


}


function dropImgHandler(event){
    showObj(event.dataTransfer);
    event.preventDefault();
    var img = document.getElementById(event.dataTransfer.getData("imgId"));
    event.target.appendChild(img);
}


function showObj(obj){
    var s = "";
    for(var k in obj){
        s += k + ":" + obj[k] + "<br/>";
    }
    msgDiv.innerHTML = s;
}