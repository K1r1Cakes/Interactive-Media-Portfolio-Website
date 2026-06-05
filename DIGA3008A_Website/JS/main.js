const contentRedirect=[
    {id: 1, title:"About me"},
    {id: 2, title:"Games"},
    {id: 3, title:"Projects"},
    {id: 4, title:"Artwork"},
    {id: 5, title:"Game Blogs"},
]

function createContentCard (content){
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-content-id"), content.id;

    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = content.title;
    
}