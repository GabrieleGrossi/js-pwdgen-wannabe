console.log("Ciao amico/a mio/a")
/*1- Chiedere all'utente il proprio nome */
/*2- Chiedere all'utente il proprio cognome */
/*3- Chiedere all'utente il proprio colore preferito */
/*4- Scrivere nella pagina HTML: nomecognomecolorepreferito21 */


// 1
const myName = prompt("Come ti chiami?")
console.log(myName);

// 2
const mySurname = prompt("E di cognome?")
console.log(mySurname)

// 3
const myFavouriteColor = prompt("So che è una cosa molto infantile, ma potresti dirmi il tuo colore preferito per favore?")
console.log(myFavouriteColor)

// 4A
const myStrongPsw = myName + mySurname + myFavouriteColor + '21'
console.log(myStrongPsw)

// 4B
document.getElementById("your_newstrongpsw").textContent = myStrongPsw