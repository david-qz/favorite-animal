// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const startButton = document.getElementById('start-button');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
tosCheckbox.addEventListener('change', () => {
    startButton.disabled = !tosCheckbox.checked;
});
