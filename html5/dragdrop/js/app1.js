/**
 * Created by Lavenda on 2015/6/4.
 */


var imgContainer;

window.onload = function(){
    imgContainer = document.getElementById("imgContainer");

    imgContainer.ondragover = function(event){
        event.preventDefault();
    }

    imgContainer.ondrop = function(event){
        event.preventDefault();
        var f = event.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(event){
            imgContainer.innerHTML = "<img src=\"" + fileReader.result + "\">";
        };
        fileReader.readAsDataURL(f);
    }
}