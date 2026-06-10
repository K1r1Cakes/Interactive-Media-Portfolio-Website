const gameNames=[
    {id: 1, title:"Clawstrophobic", description:"A 2D top-down survival game where players must escape an island they crash-landed on.", link: "/HTML/game1.html"},
    {id: 2, title:"Planet Destroyer", description:"An asteroids varients where you destroy planets and avoid asteroids.", link: "/HTML/game2.html"},
    {id: 3, title: "Starship Salavage", description:"A 3D game where you play as an astronaut that must complete quests to escape the planet.", link: "/HTML/game3.html"},
    {id: 4, title:"Maze Escape", description:"Escape the maze while an enemy hunts you down.", link: "/HTML/game4.html"},
];

function createGameCard(game){
    const mainCard = document.createElement("div");
    mainCard.classList.add("gameCard");
    mainCard.setAttribute("data-content-id", game.id);

    const link = document.createElement("a");
    link.href = game.link;
    link.textContent = game.title;
    link.target = "_blank";
    link.classList.add("game-title");

    const description = document.createElement("p");
    description.textContent = game.description;

    mainCard.appendChild(link);
    mainCard.appendChild(description);

    return mainCard;
}

const gamesContainer = document.querySelector("#content-container-games");

if (gamesContainer) {
    gameNames.map(content => {
        gamesContainer.appendChild(createGameCard(content));
    });
}