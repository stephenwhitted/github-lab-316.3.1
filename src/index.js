/*// ALAB 316.1.1 DOM Manipulation (Part 1)
import "./styles.css";

// Copied from the assignment directions
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Part 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Part 2
const topMenuEL = document.getElementById("top-menu");
topMenuEL.style.setProperty("height", "100%");
topMenuEL.style.setProperty("background-color", "var(--top-menu-bg)");
topMenuEL.classList.add("flex-around");

// Part 3
menuLinks.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEL.appendChild(a);
});
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ALAB 316.3.1 (Part 2) Lab Begins
// ALAB 316.1.1 DOM Manipulation (Part 1)
import "./styles.css";


var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    { text: 'orders', href: '#', subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    { text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");


const topMenuEL = document.getElementById("top-menu");
topMenuEL.style.setProperty("height", "100%");
topMenuEL.style.setProperty("background-color", "var(--top-menu-bg)");
topMenuEL.classList.add("flex-around");


menuLinks.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEL.appendChild(a);
});


const topMenuLinks = document.querySelectorAll("#top-menu > a");


topMenuEL.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    
    if (event.target.tagName !== 'A') return;

    console.log('Clicked link text:', event.target.textContent);

    
    topMenuLinks.forEach(a => {
        if (a === event.target) {
            a.classList.toggle('active');
        } else {
            a.classList.remove('active'); 
        }
    });
});


const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
subMenuEl.style.right = "-100%"; 
