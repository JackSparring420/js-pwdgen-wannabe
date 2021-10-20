// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21


let name = prompt('Come ti chiami?');
let age = prompt('Quanti anni hai?');
let favoriteColor = prompt('Qual è il tuo colore preferito?');
let final_number = 21
let password = name + age + favoriteColor + final_number

document.getElementById('password_assigned_a').innerHTML = "La password assegnata &#232: " + name + age + favoriteColor + "21";

document.getElementById('password_assigned_b').innerHTML = `La password assegnata &#232: ${password}`;