const contentRedirect=[
    {id: 1, title:"About me", link:"/HTML/about.html",keywords: ["education", "skills", "about"]},
    {id: 2, title:"Games", link:"/HTML/games.html",keywords: ["games", "2D", "3D"]},
    {id: 3, title:"Projects", link:"/HTML/projects.html",keywords: ["projects", "circuits", "software","online"]},
    {id: 4, title:"Artwork",link:"/HTML/artwork.html",keywords: ["art", "digital art", "models"]},
    {id: 5, title:"Game Blogs",link:"/HTML/gameblogs.html",keywords: ["blog", "writing", "opinion"]},
];



function createContentCard (content){

    const mainCard = document.createElement("div");
    mainCard.classList.add("card");
    mainCard.setAttribute("data-content-id", content.id); //Creates main card

    const link = document.createElement("a");
    link.href = content.link;
    link.textContent = content.title;
    link.target = "_blank";
    link.classList.add("card-title");

    mainCard.appendChild(link);
    

    return mainCard;
}

const container = document.querySelector("#content-container");

if (container) {
    contentRedirect.map(content => {
        container.appendChild(createContentCard(content));
    });
}



const header = document.getElementById("heading");
const cards = document.querySelectorAll("card");


window.addEventListener("scroll", () =>{
     if (window.innerWidth >= 1024) {
        if (window.scrollY > 100) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    }
});

const searchBar = document.getElementById("search");

function displayCards(cards) {
    container.innerHTML = "";

    cards.forEach(card => {
        container.appendChild(createContentCard(card));
    });
}

// initial load
displayCards(contentRedirect);

if (searchBar) {
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();

        const filterCards = contentRedirect.filter(item => {
            const matchTitle = item.title
                .toLowerCase()
                .includes(searchTerm);

            const matchKeyword = item.keywords.some(keyword =>
                keyword.toLowerCase().includes(searchTerm)
            );

            return matchTitle || matchKeyword;
        });

        displayCards(filterCards);
    });
}

