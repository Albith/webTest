
var numberOfClicks=0;
var Image1="http://pacman.com/en/wp-content/themes/PACMAN/images/uploads/pacman_here_you_go-480x449.png";
var Image2="http://blazekick.com/wp-content/uploads/2014/07/474400-mrs-_pepper_pac_man.png";

function changeImage1(){
var imageElement=document.getElementById("myImg");
imageElement.src=Image1;
}

function changeImage2(){
var imageElement=document.getElementById("myImg");
imageElement.src=Image2;
}
function changeBGRed()
{
 var bodyElement= document.getElementById("BG");
 bodyElement.style.backgroundColor="red";
 
clickedButton();
}
function changeBGBlue()
{
 var bodyElement= document.getElementById("BG");
 bodyElement.style.backgroundColor="blue";
clickedButton();
}
function clickedButton()
{
  //1.Updating number of Clicks.
  numberOfClicks = numberOfClicks +1;
  //2.Getting message element.
  var messageElement= document.getElementById("message"); 
   //3.Changing message text.
   messageElement.innerHTML="YOU HAVE CLICKED "+numberOfClicks+" times.";
}
