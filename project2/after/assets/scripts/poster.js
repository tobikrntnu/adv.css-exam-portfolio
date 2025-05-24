
/**
 * @author Carlos Vicient-Monllaó
 * @description This file contains the JavaScript code responsible for generating and visualizing the poster. 
 * It handles the toggle functionality between viewport-fit and fullscreen modes, updates the width display, 
 * and ensures proper behavior during transitions and window resizing. 
 * 
 * Note: This code is provided as part of the coursework for IDG1293-Advanced-CSS. 
 * Students are not allowed to modify this code.
 */

const posterContainer = document.getElementById('poster-container');
const toggleButton = document.getElementById('toggle-button');
const mainContainer = document.querySelector('main');
const widthDisplay = document.getElementById('width-display');

let isFullscreen = false;

toggleButton.addEventListener('click', () => {
    isFullscreen = !isFullscreen;
    updatePosterDisplay();
});

function updateWidthDisplay() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            //with clientWidth we can see the size of the content with no padding.
            const posterWidth = Math.round(posterContainer.offsetWidth);
            const mainWidth = Math.round(mainContainer.offsetWidth);
            console.log('Poster width:', posterWidth);
            console.log('Main width:', mainWidth);
            widthDisplay.textContent = `Width: ${posterWidth}px`;
        });
    });
}

function updatePosterDisplay() {
    if (isFullscreen) {
        posterContainer.classList.remove('viewport-fit');
        posterContainer.classList.add('fullscreen');
        mainContainer.classList.add('has-fullscreen');
    } else {
        posterContainer.classList.remove('fullscreen');
        posterContainer.classList.add('viewport-fit');
        mainContainer.classList.remove('has-fullscreen');
    }

    // Listen for the transition end event
    const onTransitionEnd = () => {
        updateWidthDisplay();
        posterContainer.removeEventListener('transitionend', onTransitionEnd);
    };
    
    posterContainer.addEventListener('transitionend', onTransitionEnd);
}

// Update width on window resize
window.addEventListener('resize', updateWidthDisplay);

// Initialize the default view
updatePosterDisplay();

// Update width on initial load
updateWidthDisplay();