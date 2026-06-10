const gameblogNames=[
    {id: 1, title:"Vampire Survivors: How Simplicity Creates Complexity", link: "/Interactive-Media-Portfolio-Website/PDF/Gameblog1.pdf",image:"/Interactive-Media-Portfolio-Website//Media/glasses.png"},
    {id: 2, title:"Five Nights at Freddy’s: The Evolution of a Narrative", link: "/Interactive-Media-Portfolio-Website/PDF/Gameblog2.pdf",image:"/Interactive-Media-Portfolio-Website//Media/glasses.png"},
    {id: 3, title:"Keep Talking and Nobody Explodes: Communication and Cooperation Under Pressure", link: "/Interactive-Media-Portfolio-Website/PDF/Gameblog3.pdf",image:"/Interactive-Media-Portfolio-Website//Media/glasses.png"},
];

function createBlogCard(blog){
    const mainCard = document.createElement("div");
    mainCard.classList.add("blogCard");
    mainCard.setAttribute("data-content-id", blog.id);

    const image = document.createElement("img");
    image.src = content.image;
    image.alt = content.title;
    image.classList.add("blog-image");

    const link = document.createElement("a");
    link.href = blog.link;
    link.textContent = blog.title;
    link.target = "_blank";
    link.classList.add("blog-title");

    mainCard.appendChild(image);
    mainCard.appendChild(link);
    

    return mainCard;
}

const blogContainer = document.querySelector("#content-container-gameblog");

if (blogContainer) {
    gameblogNames.map(content => {
        blogContainer.appendChild(createBlogCard(content));
    });
}