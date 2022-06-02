// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const startButton = document.getElementById('start-button');
const dogDesigner = document.getElementById('dog-designer');
const dogSelect = document.getElementById('dog-select');
const dogDisplay = document.getElementById('dog-display');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const themeSelect = document.getElementById('theme-select');
const dogContainer = document.getElementById('dog-container');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
tosCheckbox.addEventListener('change', () => {
    startButton.disabled = !tosCheckbox.checked;
});

startButton.addEventListener('click', () => {
    tosCheckbox.disabled = true;
    startButton.classList.add('hidden');
    dogDesigner.classList.remove('hidden');
});

dogSelect.addEventListener('change', () => {
    const selection = `assets/dogs/${dogSelect.value}-dog.jpg`;
    dogDisplay.src = selection;
});

nameInput.addEventListener('input', () => {
    const input = nameInput.value;
    nameDisplay.textContent = input ? input : 'Fido';
});

themeSelect.addEventListener('change', () => {
    // Remove any theme class currently on element
    dogContainer.classList.forEach(className => {
        if (className.endsWith('-theme')) {
            dogContainer.classList.remove(className);
        }
    });

    // Add selected theme
    const selection = `${themeSelect.value}-theme`;
    dogContainer.classList.add(selection);
});