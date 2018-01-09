var oh=document.querySelectorAll("h2")
    oli=document.querySelectorAll(".show ul li")
    oshow=document.getElementsByClassName("c-show")
    oh[0].onclick=function () {
        i=this.innerHTML;
        oh[1].innerHTML=i
    }
    for(var i=0;i < oli.length;i++ ) {
    oli[i].onclick=function () {
        d=this.innerHTML;
        oh[1].innerHTML=d;
        oshow[0].innerHTML=d
    }
}




