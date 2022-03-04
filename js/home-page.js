//----------------------------\\ ELEMENTS //----------------------------\\

let websiteName = document.querySelector(".hnname");

let tables = document.querySelectorAll("table");
let mainTable = tables[0];
let navBar = tables[1];
let contentTable = tables[2];
let infoTable = tables[3];

let navBarRows = navBar.querySelector("tbody").querySelector("tr").querySelectorAll("td");
let leftNavBarRow = navBarRows[0];
let middleNavBarRow = navBarRows[1];
let rightNavBarRow = navBarRows[2];
let leftNavBarRowIMG = leftNavBarRow.querySelector("img");
let middleNavBarRowLinks = middleNavBarRow.querySelectorAll("a");
let loginBtn = rightNavBarRow.querySelector("a");

//----------------------------\\ FUNCTIONS //---------------------------\\

document.body.style.margin = "0";

mainTable.width = "100%";

navBar.style.height = "70px";
navBar.style.boxShadow = "0px 0px 15px -5px black";

leftNavBarRowIMG.style.width = "30px";
leftNavBarRow.style.padding = "0 10px";
leftNavBarRowIMG.style.height = "30px";

websiteName.style.fontSize = "20px";
websiteName.style.fontWeight = "normal";
websiteName.style.paddingRight = "30px";

middleNavBarRowLinks.forEach(link => {
	link.style.padding = "0 10px";
	link.style.fontSize = "15px";
	link.style.textTransform = "capitalize";
});

loginBtn.style.fontSize = "15px";
loginBtn.style.marginRight = "10px";
loginBtn.style.padding = "10px 15px";
loginBtn.style.borderRadius = "10px";
loginBtn.style.textTransform = "capitalize";
loginBtn.style.boxShadow = "0px 0px 5px -3px black";
loginBtn.style.background = "rgba(255, 255, 255, 0.2)";
