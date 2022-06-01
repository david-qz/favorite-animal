// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const startButton = document.getElementById('start-button');
const dogDesigner = document.getElementById('dog-designer');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
tosCheckbox.addEventListener('change', () => {
    startButton.disabled = !tosCheckbox.checked;
});

startButton.addEventListener('click', () => {
    dogDesigner.classList.remove('hidden');
});