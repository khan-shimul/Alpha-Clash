// Get element Text by Id
function getElementTextById (id) {
    const element = document.getElementById(id);
    const text = element.innerText;
    return text;
}
// Function for hide element
function hideElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

// Function for show the element
function showElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// Remove bg color
function removeBgColor (id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

// Search Element by Id
function searchElementValueById (id) {
    const elementValue = document.getElementById(id).innerText;
    const value = parseInt(elementValue);
    return value;
};

// Set Inner Text by id
function setInnerText (id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

// Adding bg color
function setBackgroundColor (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getARandomAlphabet () {
    // create an alphabet array
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabetsString.split('');
    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabetsArray[index];
    return alphabet;
}