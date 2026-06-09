const artNames=[
    {id: 1, title:"Jellyfish", description:"2021"},
    {id: 2, title:"Astronaut", description:"2021"},
    {id: 3, title:"Sun", description:"2021"},
];

function createArtCard(art){
    const mainCard = document.createElement("div");
    mainCard.classList.add("artCard");
    mainCard.setAttribute("data-content-id", art.id);

    const caption = document.createElement("div");
    caption.classList.add("art-caption");

    const title = document.createElement("h3");
    title.textContent = art.title;

    const description = document.createElement("p");
    description.textContent = art.description;

    mainCard.appendChild(title);
    mainCard.appendChild(description);

    

    return mainCard;
}

const artContainer = document.querySelector("#content-container-artwork");

if (artContainer) {
    artNames.map(content => {
        artContainer.appendChild(createArtCard(content));
    });
}