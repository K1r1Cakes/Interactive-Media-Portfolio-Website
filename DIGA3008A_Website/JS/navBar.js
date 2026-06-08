const navLinks=[
    {id: 1,title:"Home", link:"../HTML/home.html"},
    {id: 2,title:"About Me", link:"../HTML/about.html"},
    {id: 3,title:"Games", link:"../HTML/games.html"},
    {id: 4,title:"Projects", link:"../HTML/projects.html"},
    {id: 5,title:"Artwork",link:"../HTML/artwork.html"},
    {id: 6,title:"Game Blogs",link:"../HTML/gameblogs.html"},
];


function createNavLink(item) {
    const link = document.createElement("a");

    link.href = item.link;
    link.textContent = item.title;
    link.classList.add("navbar-link");

    return link;
}


const navContainer = document.querySelector("#navbar-container");

//looks at current page, and excludes the link for that page while dynamically loading the rest
const currentPage = window.location.pathname.split("/").pop(); 

navLinks
    .filter(item => !item.link.includes(currentPage))
    .forEach(item => {
        navContainer.appendChild(createNavLink(item));
    });
