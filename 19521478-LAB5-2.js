const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let i = 1;
for (i; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    newImage.setAttribute('class', 'now_img');
    thumbBar.appendChild(newImage);
}

let nowImage = document.querySelectorAll('.now_img');

nowImage[0].onclick = function () {
    displayedImage.setAttribute('src', 'images/pic' + 1 + '.jpg');
}
nowImage[1].onclick = function () {
    displayedImage.setAttribute('src', 'images/pic' + 2 + '.jpg');
}
nowImage[2].onclick = function () {
    displayedImage.setAttribute('src', 'images/pic' + 3 + '.jpg');
}
nowImage[3].onclick = function () {
    displayedImage.setAttribute('src', 'images/pic' + 4 + '.jpg');
}
nowImage[4].onclick = function () {
    displayedImage.setAttribute('src', 'images/pic' + 5 + '.jpg');
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    let atr = btn.getAttribute('class');
    if (atr == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = rgba(0, 0, 0, 0.5);
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = rgba(0, 0, 0, 0);
    }
}