const artNames=[
    {id: 1, title:"Muppet", description:"2025", link:"/Interactive-Media-Portfolio-Website/Media/art1.jpeg"},
    {id: 2, title:"Takalani Sesame", description:"2023", link:"/Interactive-Media-Portfolio-Website/Media/art2.jpeg"},
    {id: 3, title:"The Litch", description:"2021",link:"/Interactive-Media-Portfolio-Website/Media/art3.jpeg" },
    {id: 4, title:"Angel", description:"2022",link:"/Interactive-Media-Portfolio-Website/Media/art4.jpeg" },
    {id: 5, title:"Sea Creatures", description:"2025",link:"/Interactive-Media-Portfolio-Website/Media/art5.jpeg" },
    {id: 6, title:"Snake eye", description:"2023",link:"/Interactive-Media-Portfolio-Website/Media/art6.jpeg" },
    {id: 7, title:"Jellyfish", description:"2024",link:"/Interactive-Media-Portfolio-Website/Media/art7.jpeg" },
    {id: 8, title:"Tomie", description:"2021",link:"/Interactive-Media-Portfolio-Website/Media/art8.jpeg" },
];

function createArtCard(art){
    const mainCard = document.createElement("div");
    mainCard.classList.add("artCard");
    mainCard.setAttribute("data-content-id", art.id);

    const image = document.createElement("img");
    image.src = art.link;
    image.alt = art.title;
    image.classList.add("art-image");

    const title = document.createElement("h3");
    title.textContent = art.title;

    const description = document.createElement("p");
    description.textContent = art.description;

    mainCard.appendChild(image);
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