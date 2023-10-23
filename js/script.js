const mailList = ["mickey@mouse.com", "donald@duck.com", "goofy@goof.com"]
let userMail = "";

for(i = 0; i < 1; i++) {
    userMail = prompt("Inserire mail");
    if (userMail === mailList[i]){
        alert("Welcome!");
    } else {
        alert("Access Denied!");
        console.warn("Access Denied!");
    }
}




