var networkMenu = document.getElementById("network_menu");
var settingsMenu = document.getElementById("settings");

var networkForm = document.querySelector(".networks-tab__network-form");
var quickAddObj = document.getElementById("quickAdd");

//Home Menu L1s
var ethereumMenu = document.getElementById("eth-alts");
var bnbMenu = document.getElementById("bnb-alts");

//Variables
var checkNetwork = false;
var checkSettings = false;

var ethShow = false;
var bnbShow = false;

var netForm = false;
var addForm = false;

function openNetwork(){
  if(checkNetwork){
    networkMenu.style.display = "none";
    checkNetwork = false;

  }
  else{
    networkMenu.style.display = "flex";
    checkNetwork = true;
  }

}

function openMenu(){
  if(checkSettings){
    settingsMenu.style.display = "none";
    checkSettings = false;
  }
  else{
    settingsMenu.style.display = "block";
    checkSettings = true;
  }
  console.log("working");
}

function closeMenu(){
  checkSettings = false;
  settingsMenu.style.display = "none";
  console.log("thefuck");
}

function openEth(){
  if(ethShow){
    ethereumMenu.style.display = "none";
    ethShow = false;
  }
  else{
    ethereumMenu.style.display = "block";
    ethShow = true;
  }
}

function openBnb(){
  if(bnbShow){
    bnbMenu.style.display = "none";
    bnbShow = false;
  }
  else{
    bnbMenu.style.display = "block";
    bnbShow = true;
  }
}

function customNetworks(){
  if(netForm){
    networkForm.style.display = "none";
    netForm = false;
  }
  else{
    networkForm.style.display = "flex";
    netForm = true;
  }
}

function quickAdd(){
  if(addForm){
    quickAddObj.style.display = "none";
    addForm = false;
  }
  else{
    quickAddObj.style.display = "block";
    addForm = true;
  }
}
