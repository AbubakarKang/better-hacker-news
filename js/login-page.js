//----------------------------\\ ELEMENTS //----------------------------\\

const body = document.body;

const submitInputs = document.querySelectorAll("input[type='submit']");
const usernameInputs = document.querySelectorAll("input[type='text']");
const passwordInputs = document.querySelectorAll("input[type='password']");
const inputs = document.querySelectorAll("input[type='text'], input[type='password']");

const forgotPassword = document.querySelector("a");

const columns = document.querySelectorAll("td");

const headings = document.querySelectorAll("b");

//----------------------------\\ FUNCTIONS //---------------------------\\

let inputLabels = [];

body.style.margin = 0;
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.justifyContent = "center";

inputs.forEach(input => {
	input.style.padding = "10px";
	input.style.margin = "10px 0";
	input.style.borderRadius = "10px";
	input.style.border = "1px solid #ccc";
	input.style.boxShadow = "0px 0px 5px -3px black";
	input.style.background = "rgba(255, 255, 255, 0.2)";
});

for (let i = 1; i <= columns.length; i++) {
	if (i % 2 !== 0) {
		inputLabels.push(columns[i - 1]);
	}
}

inputLabels.forEach(label => {
	label.style.display = "none";
});

usernameInputs.forEach(input => {
	input.placeholder = "Username";
});

passwordInputs.forEach(input => {
	input.placeholder = "Password";
});

headings.forEach(heading => {
	heading.style.color = "black";
	heading.style.fontSize = "30px";
	heading.style.fontFamily = "monospace, sans-serif";
	heading.style.textAlign = "center";
});

submitInputs.forEach(input => {
	input.style.left = "50%";
	input.style.color = "black";
	input.style.border = "none";
	input.style.padding = "10px";
	input.style.margin = "10px 0";
	input.style.cursor = "pointer";
	input.style.background = "white";
	input.style.borderRadius = "10px";
	input.style.position = "absolute";
	input.style.transform = "translateX(-50%)";
	input.style.boxShadow = "0px 0px 5px -3px black";
});

forgotPassword.style.left = "50%";
forgotPassword.style.marginBottom = "60px";
forgotPassword.style.position = "absolute";
forgotPassword.style.textDecoration = "none";
forgotPassword.style.transform = "translate(-50%, -50%)";
