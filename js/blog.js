const blogs = [
  {
    id: "b1",
    title: "A Culinary Journey Through Mumbai",
    imageUrl: "https://dummyimage.com/800x400/3498db/ffffff",
    description:
      "Explore the diverse and flavorful street food of Mumbai, from vada pav to pav bhaji. Join us on a culinary adventure through the bustling streets of the city.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    id: "b2",
    title: "Spice Trail: A Foodie's Guide to Kerala",
    imageUrl: "https://dummyimage.com/800x400/e74c3c/ffffff",
    description:
      "Embark on a spice-filled journey in the picturesque state of Kerala. Discover the unique flavors of Kerala cuisine and the art of blending spices in traditional dishes.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    id: "b3",
    title: "Tasting Tradition: Rajasthani Cuisine Unveiled",
    imageUrl: "https://dummyimage.com/800x400/2ecc71/ffffff",
    description:
      "Dive into the royal flavors of Rajasthan with this culinary exploration. From dal baati churma to laal maas, experience the rich culinary heritage of the desert state.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    id: "b4",
    title: "Street Food Diaries: Delhi's Chaat Delights",
    imageUrl: "https://dummyimage.com/800x400/f39c12/ffffff",
    description:
      "Join us on a gastronomic tour through the streets of Delhi, where the chaat culture is unparalleled. Savor the tangy and spicy flavors of Delhi's famous street chaat.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    id: "b5",
    title: "Coastal Delights: Seafood Extravaganza in Goa",
    imageUrl: "https://dummyimage.com/800x400/9b59b6/ffffff",
    description:
      "Experience the taste of the sea in Goa as we explore the vibrant and delectable world of seafood. From fish curry rice to prawn balchão, indulge in Goa's coastal delights.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // code for get and set blogId
  const urlSearchParams = new URLSearchParams(window.location.search);
  const blogId = urlSearchParams.get("id");

  async function getBlogById(blogId) {
    try {
      const response = await axios.get(
        `https://drab-cyan-seahorse-yoke.cyclic.app/blogs/${blogId}`
      );

      displayBlog(response.data);
    } catch (error) {
      console.error("Error fetching package:", error.message);
    }
  }

  getBlogById(blogId);

  // code for display blog

  function displayBlog(blog) {
    const blogsContainer = document.querySelector(".blogs");

    const heading = document.createElement("h1");
    heading.setAttribute("class", "heading");
    heading.innerText = `${blog.title}`;

    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "image");
    imageDiv.setAttribute("style", "text-align:center");

    var image = document.createElement("img");
    image.setAttribute("src", blog.imageUrl);
    image.setAttribute("alt", blog.title);
    image.setAttribute("style", "height:500px;width:800px");

    imageDiv.appendChild(image);

    const blogPage = document.createElement("p");
    blogPage.setAttribute("class", "blogpage");
    blogPage.innerHTML = `${blog.description}`;

    const div = document.createElement("div");
    div.setAttribute("style", "text-align:center");

    const backButton = document.createElement("a");
    backButton.setAttribute("href", "./blogs.html");
    backButton.setAttribute("class", "btn");
    backButton.innerText = "Back";

    div.appendChild(backButton);

    blogsContainer.appendChild(heading);
    blogsContainer.appendChild(imageDiv);
    blogsContainer.appendChild(blogPage);
    blogsContainer.appendChild(div);
  }

  // displayBlog(blog);
});
