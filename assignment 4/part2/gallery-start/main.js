const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames= ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"]

/* Declaring the alternative text for each image file */
const alternative = ["Closeup of a human eye", "Rock with a wave design", "Purple and white flowers", "Wall in a tomb", "Moth on a leaf"]
/* Looping through images */
const displayedImg = document.querySelector('.displayed-img');
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alternative[i]);

    newImage.addEventListener('click', function () {
        displayedImg.setAttribute('src', newImage.getAttribute('src')); // Set displayed image src
        displayedImg.setAttribute('alt', newImage.getAttribute('alt'));
    });
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    const currentClass = btn.getAttribute('class'); // Get current class name

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light'); // Change class to 'light'
        btn.textContent = 'Lighten';        // Update button text
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Dark overlay
    } else {
        btn.setAttribute('class', 'dark');  // Change class to 'dark'
        btn.textContent = 'Darken';         // Update button text
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove overlay
    }
});