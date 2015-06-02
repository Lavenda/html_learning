/**
 * Created by Lavenda on 2015/6/2.
 */

window.onload=function(){
    loadPage();
    loadPage();
    loadPage();
    loadPage();
    load();


    window.onscroll = function(){
        checkFlag();
    }
}


function load(){
    loadPage();
    imgLocation("container", "box");
}

function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");
    var lasContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(lasContentHeight - scrollTop - pageHeight < 0){
        load();
    }
}


function loadPage(){
    var divContainer = document.getElementById("container");
    var divBox = document.getElementsByClassName("box")[0];
    for(var i=2; i<10; i++){
        var copyBox = divBox.cloneNode(true);
        var imgTag = copyBox.getElementsByTagName("div")[0].getElementsByTagName("img")[0];
        imgTag.src = "images/" + i + ".jpg";
        divContainer.appendChild(copyBox);
    }
}


function imgLocation(parent, content){
    var cparent = document.getElementById(parent);
    var ccontents = getChildElement(cparent, content);
    var imgWidth = ccontents[0].offsetWidth;
    var screenWidth = document.documentElement.clientWidth;
    var cols = Math.floor(screenWidth / imgWidth);
    cparent.style.cssText = "width:" + imgWidth*cols + "px; margin:0px auto;";

    var boxHeights = [];
    for(var i=0; i<ccontents.length; i++){
        if(i<cols) {
            boxHeights[i] = ccontents[i].offsetHeight;
        }
        else{
            var minHeight = Math.min.apply(null, boxHeights);
            var minIndex = getMinHeightLocation(boxHeights, minHeight);
            ccontents[i].style.position = "absolute";
            ccontents[i].style.top = minHeight + "px";
            ccontents[i].style.left = ccontents[minIndex].offsetLeft + "px";
            boxHeights[minIndex] = boxHeights[minIndex] + ccontents[i].offsetHeight;
        }
    }
}

function getMinHeightLocation(boxHeights, minHeight){
    for(var i in boxHeights){
        if(boxHeights[i] == minHeight){
            return i
        }
    }
}


function getChildElement(parent, content){
    var contents = [];
    var allContent = parent.getElementsByTagName("*");
    for(var i=0; i<allContent.length; i++){
        if(allContent[i].className==content){
            contents.push(allContent[i]);
        }
    }
    return contents;
}