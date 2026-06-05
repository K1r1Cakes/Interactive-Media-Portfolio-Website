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
    link.classList.add("card-title");

    // const link = document.createElement("a");
    // link.href = content.link;
    // link.classList.add("link");

    // const card = document.createElement("a");
    // card.href = content.link;
    // card.classList.add("card");

    // const title = document.createElement("div");
    // title.classList.add("card-title");
    // title.textContent = content.title;


    mainCard.appendChild(link);
    //card.appendChild(link);

    return mainCard;
}

const container = document.querySelector("#content-container");
contentRedirect.map(content => {
    const card = createContentCard(content);
    container.appendChild(card);
})

