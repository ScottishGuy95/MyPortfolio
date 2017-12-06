function clickScroll( moveValue ) {
  var screenW = window.innerWidth;
  var distance = screenW * moveValue;
  var divToMove = document.getElementById("main-container");
  divToMove.scrollBy(0,0);
  divToMove.scrollBy(0, distance);
}

function clickScrollPhone( moveValue ) {
  var screenH = window.innerHeight;
  var distance = screenH * moveValue;
  var divToMove = document.getElementById("main-container");
  divToMove.scrollTo(0,0);
  divToMove.scrollBy(0, distance);
}



function displayImg1() {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("imageArea");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = "Res/Images/Portfoli_CouncilAppMobile.PNG";
  modalImg.style.width = "250px";
  modalImg.style.height = "450px";
  captionText.innerHTML = "Council website";
}

function displayImg2() {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("imageArea");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = "Res/Images/Portfoli_JonJo.PNG";
  captionText.innerHTML = "Pizza Delivery App";
}

function displayImg3() {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("imageArea");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = "Res/Images/Portfoli_Sokoban.PNG";
  modalImg.style.width = "450px";
  modalImg.style.height = "450px";
  captionText.innerHTML = "Pizza Delivery App";
}

function displayImg4() {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("imageArea");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = "Res/Images/Portfoli_Stellar_Game.PNG";
  modalImg.style.width = "450px";
  modalImg.style.height = "350px";
  captionText.innerHTML = "Pizza Delivery App";
}

function closeModal() {
  var modal = document.getElementById("imgModal");
  modal.style.display = "none";
}
