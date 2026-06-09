const projectNames=[
    {id: 1, title:"Electronics safe code", description:"This project contains a three part system that needs to get a specific code to unlock a safe."},
    {id: 2, title:"Morabaraba", description:"A multiyplayer online game of Morabaraba."},
    {id: 3, title:"Reverse 2048", description:"A C++ game of reverse 2048 that uses two AI algortihms to play against each other"},
];

function createProjectCard(project){
    const mainCard = document.createElement("div");
    mainCard.classList.add("projectCard");
    mainCard.setAttribute("data-content-id", project.id);

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    mainCard.appendChild(title);
    mainCard.appendChild(description);

    return mainCard;
}

const projectContainer = document.querySelector("#content-container-projects");

if (projectContainer) {
    projectNames.map(content => {
        projectContainer.appendChild(createProjectCard(content));
    });
}