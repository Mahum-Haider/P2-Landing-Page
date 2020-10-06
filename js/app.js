/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navItems = document.getElementById('navbar__list'); 
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let section of sections){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${section.id}'>${section.dataset.nav}</a>`;

    navItems.appendChild(listItem);
};


// Add class 'active' to section when near top of viewport
 
const activeSection = function (section) {
    return Math.floor(section.getBoundingClientRect().top);
};

const addActiveClass = function (condition,section) {
    if(condition) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: orange;";
    };
};

const removeActiveClass = function (section) {
        section.classList.remove('your-active-class');
        section.style.cssText = "background-color: green;";
};

const sectionActivation = function () {
    sections.forEach(section => {
        const elementOffset = activeSection(section);

        viewPort = () => elementOffset < 180 && elementOffset >= -180;
        removeActiveClass(section);
        addActiveClass(viewPort(),section);
    });
};

window.addEventListener('scroll', sectionActivation);

// // Scroll to anchor ID using smoothScroll 

const scroll = new SmoothScroll('.navbar__menu  a[href*="#"]',{
    speed: 800 
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



// Set sections as active


