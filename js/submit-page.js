//----------------------------\\ ELEMENTS //----------------------------\\

const hnmain = document.getElementById("hnmain");

const tables = document.querySelectorAll("table");
const mainTable = tables[0];
const navBar = tables[1];
const contentTable = tables[2];

const contentTableBody = contentTable.querySelector("tbody");
const contentTableBodyRows = contentTableBody.querySelectorAll("tr");

const contentTableBodyDataRows = [contentTableBodyRows[0], contentTableBodyRows[1], contentTableBodyRows[3]];
const submitButton = contentTableBodyRows[5].querySelector("input");

//----------------------------\\ FUNCTIONS //---------------------------\\

document.body.style.margin = 0;

mainTable.width = "100%";

navBar.style.height = "70px";
navBar.style.boxShadow = "0px 0px 15px -5px black";

contentTableBodyDataRows.forEach(row => {
	let dataRow = row.querySelectorAll("td");
	dataRow[0].style.textTransform = "capitalize";
	let inputs = dataRow[1].querySelector("input, textarea");
	inputs.style.padding = "10px";
	inputs.style.margin = "10px 0";
	inputs.style.borderRadius = "10px";
	inputs.style.border = "1px solid #ccc";
	inputs.style.boxShadow = "0px 0px 5px -3px black";
	inputs.style.background = "rgba(255, 255, 255, 0.2)";
});

submitButton.style.color = "black";
submitButton.style.border = "none";
submitButton.style.padding = "10px";
submitButton.style.margin = "10px 0";
submitButton.style.cursor = "pointer";
submitButton.style.background = "white";
submitButton.style.borderRadius = "10px";
submitButton.style.textTransform = "capitalize";
submitButton.style.boxShadow = "0px 0px 5px -3px black";
