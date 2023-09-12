
let cookies=document.cookie
const body = document.body;
const div = document.querySelectorAll('div');
let cookie = cookies.split(';')

// decolaring cariables

// foloop for retieving cookies
for (let i=0; i<cookie.length; i++) {
    // setting the color theme
    if (cookie[i].includes('color')) {
        if (cookie[i].includes('dark')) {
            body.classList.toggle('dark');
        }
        else if (cookie[i].includes('light')) {
            body.classList.toggle('light');
        }

     }
     //setting the font-famely
    if (cookie[i].includes('font')) {
        if (cookie[i].includes('monospace')) {
            console.log('hello')
            body.classList.toggle('monospace');
        }
        else if (cookie[i].includes('arial')) {
            body.classList.toggle('arial');
        }
        else if (cookie[i].includes('times')) {
            body.classList.toggle('times');
        }
     }
     //setting the text size
     if (cookie[i].includes('text')) {
        if (cookie[i].includes('small')) {
            body.classList.toggle('small');
        }
        else if (cookie[i].includes('large')) {
            body.classList.toggle('large');
        }
        else {
            body.classList.toggle('medium');
        }
     }
     // setting the text tickness
     if (cookie[i].includes('thick')) {
        if (cookie[i].includes('bold')) {
            body.classList.toggle('bold');
        }
        else if (cookie[i].includes('thin')) {
            body.classList.toggle('thin');
        }

     }
}

