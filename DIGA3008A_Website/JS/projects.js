const projectNames=[
    {id: 1, title:"Electronics safe code", description:"This project contains a three part system that needs to get a specific code to unlock a safe."},
    {id: 2, title:"Morabaraba", description:"A multiyplayer online game of Morabaraba."},
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

const container = document.querySelector("#content-container-projects");

if (container) {
    projectNames.map(content => {
        container.appendChild(createProjectCard(content));
    });
}