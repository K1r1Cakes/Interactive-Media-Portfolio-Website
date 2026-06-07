const navLinks=[
    {id: 1,title:"Home", link:"../HTML/home.html"},
    {id: 2,title:"Games", link:"../HTML/games.html"},
    {id: 3,title:"Projects", link:"../HTML/projects.html"},
    {id: 4,title:"Artwork",link:"../HTML/artwork.html"},
    {id: 5,title:"Game Blogs",link:"../HTML/gameblogs.html"},
];

function createNavLink(item) {
    const link = document.createElement("a");

    link.href = item.link;
    link.textContent = item.title;
    link.classList.add("navbar-link");

    return link;
}

const navContainer = document.querySelector("#navbar-container");

if (navContainer) {
    navLinks.map(item => {
        navContainer.appendChild(createNavLink(item));
    });
}
