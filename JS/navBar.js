const navLinks=[
    {id: 1,title:"Home", link:"/index.html"},
    {id: 2,title:"About Me", link:"about.html"},
    {id: 3,title:"Games", link:"games.html"},
    {id: 4,title:"Projects", link:"projects.html"},
    {id: 5,title:"Artwork",link:"artwork.html"},
    {id: 6,title:"Game Blogs",link:"gameblogs.html"},
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

    console.log(item.link)