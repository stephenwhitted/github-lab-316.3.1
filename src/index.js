/* ALAB 316.1.1 DOM Manipulation (Part 1)
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

    document.addEventListener('DOMContentLoaded', function() {
        const mainEl = document.querySelector("main");
        if (mainEl) {
        mainEl.style.backgroundColor = "var(--main-bg)";
        } else {
        console.error('main element not found');
        }
    });
    
  
    
    const menuLinks = [
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

   
    const topMenuEl = document.getElementById("top-menu");
    topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

    menuLinks.forEach(link => {
        const menuItem = document.createElement("a");
        menuItem.href = link.href;
        menuItem.textContent = link.text;
        menuItem.style.padding = "1rem";
        menuItem.style.textDecoration = "none";
        menuItem.style.color = "white";

        menuItem.addEventListener('click', function(event) {
            event.preventDefault();
            
            document.querySelectorAll('#top-menu a').forEach(item => {
                item.style.backgroundColor = "";
            });
            menuItem.style.backgroundColor = "var(--sub-menu-bg)";

            if (link.subLinks) {
                updateSubMenu(link.subLinks);
            } else {
                mainEl.innerHTML = `<h1>${link.text}</h1>`;
                hideSubMenu();
            }
        });

        topMenuEl.appendChild(menuItem);
    });

   
    const subMenuEl = document.getElementById("sub-menu");
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
    subMenuEl.style.display = "none"; 

    function updateSubMenu(subLinks) {
        subMenuEl.innerHTML = ''; s
        subLinks.forEach(subLink => {
            const subItem = document.createElement("a");
            subItem.href = subLink.href;
            subItem.textContent = subLink.text;
            subItem.style.padding = "1rem";
            subItem.style.display = "block"; 
            subMenuEl.appendChild(subItem);
        });
        subMenuEl.style.display = "block"; 
    }

    function hideSubMenu() {
        subMenuEl.style.display = "none";
    }

