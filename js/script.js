// EXERCISE 1
const mailList = ["mickey@mouse.com", "donald@duck.com", "goofy@goof.com"];
console.log(mailList);
// let userMail = "";
let access = "";
let accessGranted = false;

const userMailElem = document.getElementById("email");
console.log(userMailElem);

const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function(){
    const userMail = userMailElem.value;

    for(i = 0; i < mailList.length; i++) {
        
        if (userMail === mailList[i]){
            accessGranted = true;
        } else{
            accessGranted = false;
        }
    }

    if (accessGranted){
        access = "Welcome!";
    } else {
        access = "Access Denied!";
    }

    document.getElementById("result").innerHTML = access;
})

/*
for(i = 0; i < 1; i++) {
    userMail = prompt("Inserire mail");
    if (userMail === mailList[i]){
        alert("Welcome!");
    } else {
        alert("Access Denied!");
        console.warn("Access Denied!");
    }
}
*/



