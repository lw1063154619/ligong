var oSpan=document.querySelectorAll(".comp span")
    oCom=document.getElementsByClassName("compy")
    oSpan[0].onclick=function () {
    oSpan[0].className="on";
     oCom[0].style.display="block";
     oSpan[1].className="" ;
     oCom[1].style.display="none"
}
oSpan[1].onclick=function () {
    oSpan[1].className="on";
    oCom[1].style.display="block";
    oSpan[0].className="" ;
    oCom[0].style.display="none"
}

