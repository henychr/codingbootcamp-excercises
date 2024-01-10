
let theButton = document.getElementById('theButton');
    console.log(theButton);
let theText = document.querySelectorAll('.top-5__header');  
    console.log(theText);
theButton.onclick = function () { 
    for(let x of theText) {
        x.classList.toggle('top-5__header--colorized');
    }
};