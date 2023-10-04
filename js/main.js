
import navbar  from './navbar.js';
// Append Navbar For The Current Page
const nav_container = document.querySelector('.navbar');
if(nav_container){
    nav_container.innerHTML = navbar;
}