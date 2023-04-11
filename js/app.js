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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navItems = [
    { label: 'Section 1', href: '#section1' },
    { label: 'Section 2', href: '#section2' },
    { label: 'Section 3', href: '#section3' },
    { label: 'Section 4', href: '#section4' },
    { label: 'Section 5', href: '#section5' },
    { label: 'Section 6', href: '#section6' },
    { label: 'Section 7', href: '#section7' }
  ];

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

// Get the navigation menu element
const nav = document.getElementById('navbar');

// build the nav
  // Create a list item for each navigation item and append it to the nav
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    li.appendChild(a);
    nav.querySelector('ul').appendChild(li);



    // Add a scroll functionality to each navigation item
  a.addEventListener('click', event => {
    event.preventDefault(); 
    const scrollTarget = document.querySelector(item.href); // Get the scroll target section element
    scrollTarget.scrollIntoView({ behavior: 'smooth' }); // Scroll to the scroll target section
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('your-active-class');
      });
      
    //   // Add the 'selected' class to the target section
    scrollTarget.classList.add('your-active-class');
    document.querySelectorAll('li').forEach(li =>{
        li.classList.remove('tabSelected');

    })
    li.classList.add('tabSelected')
});

   // Remove the 'selected' class from all sections
  
  });

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// Define the navigation items

  
 
  


