//----------------------------\\ ELEMENTS //----------------------------\\

const hnmain = document.getElementById("hnmain");

const tables = document.querySelectorAll("table");
const mainTable = tables[0];
const navBar = tables[1];
const contentTable = tables[2];

const contentTableBody = contentTable.querySelector("tbody");
const contentTableBodyRows = contentTableBody.querySelectorAll("tr");

const contentTableBodyDataRows = [contentTableBodyRows[0], contentTableBodyRows[1], contentTableBodyRows[3]];

//----------------------------\\ FUNCTIONS //---------------------------\\

document.body.style.margin = 0;

mainTable.width = "100%";

navBar.style.height = "70px";
navBar.style.boxShadow = "0px 0px 15px -5px black";

contentTableBodyDataRows.forEach(row => {
	let dataRow = row.querySelectorAll("td");
	dataRow[0].style.textTransform = "capitalize";
});
