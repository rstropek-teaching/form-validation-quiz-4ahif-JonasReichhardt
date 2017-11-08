let firstName : HTMLElement;
let secName : HTMLElement;
let email : HTMLElement;
let inputBox : HTMLElement;
let box : HTMLInputElement;
let dropdown : HTMLSelectElement;

function unload(){
    firstName = document.getElementById("firstNameMandatory");
    secName = document.getElementById("lastNameMandatory");
    email = document.getElementById("emailMandatory");
    inputBox = document.getElementById("otherMediaChannel");

    switchVisibility(firstName,"hidden");
    switchVisibility(secName,"hidden");
    switchVisibility(email,"hidden");
    switchVisibility(inputBox,"hidden");

}

function switchVisibility(el:HTMLElement,str:string){
    el.style.visibility = str;
}

function clicked(){
    if(document.getElementById("firstName").nodeValue === null){
        switchVisibility(firstName,"visible");
    }
    if(document.getElementById("lastName").nodeValue === null){
        switchVisibility(secName,"visible");
    }
    box = <HTMLInputElement>document.getElementById("newsletter");
    if(document.getElementById("email").nodeValue === null && box.checked === true){
        switchVisibility(email,"visible");
    }
}

function changed(){
    dropdown = <HTMLSelectElement>document.getElementById("mediaChannelSelect");
    if(dropdown.selectedIndex===2){
        switchVisibility(inputBox,"visible");
    }else{
        switchVisibility(inputBox,"hidden");
    }
}