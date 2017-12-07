/*
  CM1101
  Computer Information Systems
  Liam Clifford
  1713749
  Online Portfolio Project
*/

function clickScroll( moveValue ) {                           //This function will move the windows screen to the specified section
  var screenW = window.innerWidth;                            //Obtain the screen width (viewport width)
  var distance = screenW * moveValue;                         //Multiply 100vw by given value
  var divToMove = document.getElementById("main-container");  //Select the div to move
  divToMove.scroll(0,0);                                      //Reset the window position to far left
  divToMove.scrollBy(0, distance);                            //Move the scrollbar to the new position
}

function clickScrollPhone( moveValue ) {                      //This function will move the windows screen to the specified section
  var screenH = window.innerHeight;                           //Obtain the screen height (viewport height)
  var distance = screenH * moveValue;                         //Multiply 100vh by given value
  var divToMove = document.getElementById("main-container");  //Select the div to move
  divToMove.scroll(0,0);                                      //Reset the window position to top
  divToMove.scrollBy(0, distance);                            //Move the scrollbar to the new position
}

function displayImg1() {                                      //Function to display a specified image in a modal box
  var modal = document.getElementById("imgModal");            //Get the modal box div
  var modalImg = document.getElementById("imageArea");        //Get the modal div to display the image
  var captionText = document.getElementById("caption");       //Get the text to store under the image

  modal.style.display = "block";                              //Set the modal to be shown
  modalImg.src = "Res/Images/Portfoli_CouncilAppMobile.PNG";  //The source of the image
  modalImg.style.width = "250px";                             //The width of the image
  modalImg.style.height = "450px";                            //The height of the image
  captionText.innerHTML = "Council website";                  //The caption for the image
}

function displayImg2() {                                      //Function to display a specified image in a modal box
  var modal = document.getElementById("imgModal");            //Get the modal box div
  var modalImg = document.getElementById("imageArea");        //Get the modal div to display the image
  var captionText = document.getElementById("caption");       //Get the text to store under the image

  modal.style.display = "block";                              //Set the modal to be shown
  modalImg.src = "Res/Images/Portfoli_JonJo.PNG";             //The source of the image
  captionText.innerHTML = "Pizza Delivery App";               //The caption for the image
}

function displayImg3() {                                      //Function to display a specified image in a modal box
  var modal = document.getElementById("imgModal");            //Get the modal box div
  var modalImg = document.getElementById("imageArea");        //Get the modal div to display the image
  var captionText = document.getElementById("caption");       //Get the text to store under the image

  modal.style.display = "block";                              //Set the modal to be shown
  modalImg.src = "Res/Images/Portfoli_Sokoban.PNG";           //The source of the image
  modalImg.style.width = "450px";                             //The width of the image
  modalImg.style.height = "450px";                            //The height of the image
  captionText.innerHTML = "Pizza Delivery App";               //The caption for the image
}

function displayImg4() {                                      //Function to display a specified image in a modal box
  var modal = document.getElementById("imgModal");            //Get the modal box div
  var modalImg = document.getElementById("imageArea");        //Get the modal div to display the image
  var captionText = document.getElementById("caption");       //Get the text to store under the image

  modal.style.display = "block";                              //Set the modal to be shown
  modalImg.src = "Res/Images/Portfoli_Stellar_Game.PNG";      //The source of the image
  modalImg.style.width = "450px";                             //The width of the image
  modalImg.style.height = "350px";                            //The height of the image
  captionText.innerHTML = "Pizza Delivery App";               //The caption for the image
}

function closeModal() {
  var modal = document.getElementById("imgModal");            //Get the modal box div
  modal.style.display = "none";                               //Set the modal to be hidden
}
