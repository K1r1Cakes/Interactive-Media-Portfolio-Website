const gameblogNames=[
    {id: 1, title:"1", description:"2021"},
    {id: 2, title:"2", description:"2021"},
    {id: 3, title:"3", description:"2021"},
];

function createBlogCard(blog){
    const mainCard = document.createElement("div");
    mainCard.classList.add("blogCard");
    mainCard.setAttribute("data-content-id", blog.id);

    const caption = document.createElement("div");
    caption.classList.add("blog-caption");

    const title = document.createElement("h3");
    title.textContent = blog.title;

    const description = document.createElement("p");
    description.textContent = blog.description;

    mainCard.appendChild(title);
    mainCard.appendChild(description);

    
    return mainCard;
}

const blogContainer = document.querySelector("#content-container-gameblog");

if (blogContainer) {
    gameblogNames.map(content => {
        blogContainer.appendChild(createBlogCard(content));
    });
}