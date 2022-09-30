console.log(document.getElementById('mail'));

let mail = document.getElementById('mail');

mail.hidden = true;

let mailicon = document.getElementById('mailicon');

mailicon.onclick = function() {
    if (mail.hidden === false) {
        mail.hidden = true;
    } else {
        mail.hidden = false;
    }
}

console.log(document.getElementById('phone'));

let phone = document.getElementById('phone');

phone.hidden = true;

let phoneicon = document.getElementById('phoneicon');

phoneicon.onclick = function() {
    if (phone.hidden === false) {
        phone.hidden = true;
    } else {
        phone.hidden = false;
    }
}
