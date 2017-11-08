var firstName;
var secName;
var email;
var inputBox;
var box;
var dropdown;
function unload() {
    firstName = document.getElementById("firstNameMandatory");
    secName = document.getElementById("lastNameMandatory");
    email = document.getElementById("emailMandatory");
    inputBox = document.getElementById("otherMediaChannel");
    switchVisibility(firstName, "hidden");
    switchVisibility(secName, "hidden");
    switchVisibility(email, "hidden");
    switchVisibility(inputBox, "hidden");
}
function switchVisibility(el, str) {
    el.style.visibility = str;
}
function clicked() {
    if (document.getElementById("firstName").nodeValue === null) {
        switchVisibility(firstName, "visible");
    }
    if (document.getElementById("lastName").nodeValue === null) {
        switchVisibility(secName, "visible");
    }
    box = document.getElementById("newsletter");
    if (document.getElementById("email").nodeValue === null && box.checked === true) {
        switchVisibility(email, "visible");
    }
}
function changed() {
    dropdown = document.getElementById("mediaChannelSelect");
    if (dropdown.selectedIndex === 2) {
        switchVisibility(inputBox, "visible");
    }
    else {
        switchVisibility(inputBox, "hidden");
    }
}
