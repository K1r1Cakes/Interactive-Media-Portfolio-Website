const gameNames=[
    {id: 1, title:"Clawstrophobic", description:"A 2D top-down survival game where players must escape an island they crash-landed on"},
    {id: 2, title:"Planet Destroyer", description:"An asteroids varients where you destroy planets and avoid asteroids"},
];

function createGameCard(game){
    const mainCard = document.createElement("div");
    mainCard.classList.add("gameCard");
    mainCard.setAttribute("data-content-id", game.id);

    const title = document.createElement("h3");
    title.textContent = game.title;

    const description = document.createElement("p");
    description.textContent = game.description;

    mainCard.appendChild(title);
    mainCard.appendChild(description);

    return mainCard;
}

const gamesContainer = document.querySelector("#content-container-games");

if (gamesContainer) {
    gameNames.map(content => {
        gamesContainer.appendChild(createGameCard(content));
    });
}