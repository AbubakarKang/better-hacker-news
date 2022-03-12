//----------------------------\\ ELEMENTS //----------------------------\\

const body = document.body;

const heading = document.querySelector("b");

const textInput = document.querySelector("input[type='text']");
const submitInput = document.querySelector("input[type='submit']");

//----------------------------\\ FUNCTIONS //---------------------------\\

body.style.margin = 0;
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.justifyContent = "center";

textInput.style.padding = "10px";
textInput.style.margin = "10px 0";
textInput.style.borderRadius = "10px";
textInput.style.border = "1px solid #ccc";
textInput.style.boxShadow = "0px 0px 5px -3px black";
textInput.style.background = "rgba(255, 255, 255, 0.2)";

heading.style.color = "black";
heading.style.fontSize = "30px";
heading.style.fontFamily = "monospace, sans-serif";
heading.style.textAlign = "center";

submitInput.style.left = "50%";
submitInput.style.color = "black";
submitInput.style.border = "none";
submitInput.style.padding = "10px";
submitInput.style.margin = "10px 0";
submitInput.style.cursor = "pointer";
submitInput.style.background = "white";
submitInput.style.borderRadius = "10px";
submitInput.style.position = "absolute";
submitInput.style.transform = "translateX(-50%)";
submitInput.style.boxShadow = "0px 0px 5px -3px black";
