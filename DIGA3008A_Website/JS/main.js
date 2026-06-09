const contentRedirect=[
    {id: 1, title:"About me", link:"../HTML/about.html"},
    {id: 2, title:"Games", link:"../HTML/games.html"},
    {id: 3, title:"Projects", link:"../HTML/projects.html"},
    {id: 4, title:"Artwork",link:"../HTML/artwork.html"},
    {id: 5, title:"Game Blogs",link:"../HTML/gameblogs.html"},
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

window.addEventListener("scroll", () =>{
     if (window.innerWidth >= 768) {
        if (window.scrollY > 100) {
            heading.classList.add("shrink");
        } else {
            heading.classList.remove("shrink");
        }
    }
});




