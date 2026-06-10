const projectNames=[
    {id: 1, title:"Electronics safe code", description:"This project contains a three part system that needs to get a specific code to unlock a safe.", link:"/Interactive-Media-Portfolio-Website/HTML/project1.html"},
    {id: 2, title:"Morabaraba", description:"A multiyplayer online game of Morabaraba.", link:"/Interactive-Media-Portfolio-Website/HTML/project2.html"},
    {id: 3, title:"Reverse 2048", description:"A C++ game of reverse 2048 that uses two AI algortihms to play against each other", link:"/Interactive-Media-Portfolio-Website/HTML/project3.html"},
];

function createProjectCard(project){
    const mainCard = document.createElement("div");
    mainCard.classList.add("projectCard");
    mainCard.setAttribute("data-content-id", project.id);

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = project.title;
    link.target = "_blank";
    link.classList.add("project-title");

    const description = document.createElement("p");
    description.textContent = project.description;

    mainCard.appendChild(link);
    mainCard.appendChild(description);

    return mainCard;
}

const projectContainer = document.querySelector("#content-container-projects");

if (projectContainer) {
    projectNames.map(content => {
        projectContainer.appendChild(createProjectCard(content));
    });
}