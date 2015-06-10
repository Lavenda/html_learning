/**
 * Created by Lavenda on 2015/6/9.
 */


var num = 0;
var txt;
var btn;

window.onload = function(){
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");

    if(sessionStorage.num1){
        num = sessionStorage.num1;
        showNum();
    }else{
        num = 0;
    }

    btn.onclick = function(){
        num++;
        sessionStorage.num1 =num;
        showNum();
    }
}


function showNum(){
    txt.innerHTML = num;
}