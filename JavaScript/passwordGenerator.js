/*
*********     code from MRGCode       *********
*********     September 12 2021       *********
********* https://github.com//MRGCode *********
*/

function generatePassword() {
    let inputNumber = document.getElementById('pwLenght').value;    // entering the length of the password
    const upperChars = document.getElementById('cbUpperABC');       // upper Chars are selected
    const lowerChars = document.getElementById('cbLowerAbc');       // lower Chars are selected
    const numChars = document.getElementById('cbNumber');           // Numbers are selected
    const specialChars = document.getElementById('cbSpecialChars'); // special Chars are selected
    let charSet = '';   // Compound string for the loop
    const warning = 'There must be a minimum of 6 and a maximum of 21 characters.'

    if (upperChars.checked) {   // check if uppers Chars selected
        charSet = charSet.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (lowerChars.checked) {   // check if lower Chars selected
        charSet = charSet.concat('abcdefghijklmnopqrstuvwxyz');
    }
    if (numChars.checked) {     // check if Numbers selected
        charSet = charSet.concat('123456789');
    }
    if (specialChars.checked) { // check if special Chars selected
        charSet = charSet.concat('!§$%&/=@#_*-+')
    }

    if (inputNumber >= 6 && inputNumber <= 21) { // check if input Number (smaller or greater)
        let password = "";        // variable for the final password
        for (let i = 0, n = charSet.length; i < inputNumber; ++i) {
            password += charSet.charAt(Math.random() * n)
        }
        document.getElementById('output').innerHTML = password;   // password output
    } else {
        alert(warning); // warning if inputNumber smaller or greater as allowed.
    }
}


window.onload = function (e) {  //onload time and date output
    time();
    date();
};

function time() {
    /* ------------------------------------------------------------------------- ||
    || 24h clock // GMT+ 1 hour // UTC+2 hours                                   ||
    || Standard time zone: UTC/GMT +1 hour                                       ||
    || Summer time: +1 hour                                                      ||
    || Current time zone difference (12. September 2021): UTC/GMT +2 hours       ||
    || Time zone designation: CEST                                               ||
    || Summertime started on - Sunday 28 March 2021, 02:00 - Local Standard Time ||
    || Summertime ends on - Sunday 31 October 2021, 03:00 - Local Summer Time    ||
    ---------------------------------------------------------------------------- */
    let localTime = new Date();
    document.getElementById('time').innerHTML = localTime.toLocaleTimeString('de-DE', {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    setTimeout(time, 500)
}

function date() {
    let localDate = new Date();
    document.getElementById('date').innerHTML = localDate.toLocaleDateString('de-DE', {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    setTimeout(date, 10000)
}
