const blogs = [
  {
    _id: "b1",
    title: "A Culinary Journey Through Mumbai",
    imageUrl: "https://dummyimage.com/800x400/3498db/ffffff",
    description:
      "Explore the diverse and flavorful street food of Mumbai, from vada pav to pav bhaji. Join us on a culinary adventure through the bustling streets of the city.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    _id: "b2",
    title: "Spice Trail: A Foodie's Gu_ide to Kerala",
    imageUrl: "https://dummyimage.com/800x400/e74c3c/ffffff",
    description:
      "Embark on a spice-filled journey in the picturesque state of Kerala. Discover the unique flavors of Kerala cuisine and the art of blending spices in traditional dishes.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    _id: "b3",
    title: "Tasting Tradition: Rajasthani Cuisine Unveiled",
    imageUrl: "https://dummyimage.com/800x400/2ecc71/ffffff",
    description:
      "Dive into the royal flavors of Rajasthan with this culinary exploration. From dal baati churma to laal maas, experience the rich culinary heritage of the desert state.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    _id: "b4",
    title: "Street Food Diaries: Delhi's Chaat Delights",
    imageUrl: "https://dummyimage.com/800x400/f39c12/ffffff",
    description:
      "Join us on a gastronomic tour through the streets of Delhi, where the chaat culture is unparalleled. Savor the tangy and spicy flavors of Delhi's famous street chaat.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
  {
    _id: "b5",
    title: "Coastal Delights: Seafood Extravaganza in Goa",
    imageUrl: "https://dummyimage.com/800x400/9b59b6/ffffff",
    description:
      "Experience the taste of the sea in Goa as we explore the vibrant and delectable world of seafood. From fish curry rice to prawn balchão, indulge in Goa's coastal delights.",
    createdAt: new Date(),
    createdBy: "Admin",
  },
];

{
  // <div class="box">
  //   <div class="image">
  //     <img src="./images/blog1taj.jpg" alt="" />
  //   </div>
  //   <div class="content">
  //     <h3>Agra Beyond the Taj Mahal:Unveiling H_idden Treasures</h3>
  //     <a href="./blog1.html" class="btn">
  //       Read More
  //     </a>
  //     <div class="icons">
  //       <a href="#">
  //         <i class="far fa-calendar"></i>27 spet 2023
  //       </a>
  //       <br />
  //       <a href="#">
  //         <i class="fas fa-user"></i>By admin
  //       </a>
  //     </div>
  //   </div>
  // </div>;
}

document.addEventListener("DOMContentLoaded", function () {
  function displayBlogs(blogs) {
    const boxContainer = document.querySelector(".box-container");

    blogs.forEach(function (blog, index) {
      var blogDiv = document.createElement("div");
      blogDiv.setAttribute("class", "box");
      blogDiv.setAttribute("style", "text-align:center");

      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("class", "image");

      var image = document.createElement("img");
      image.setAttribute("src", blog.imageUrl);
      image.setAttribute("alt", blog.title);

      imageDiv.appendChild(image);

      var contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "content");

      var titleHeader = document.createElement("h3");
      titleHeader.innerText = blog.title;
      titleHeader.setAttribute(
        "style",
        "overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;"
      );

      var readMoreLink = document.createElement("a");
      readMoreLink.setAttribute("href", `./blog.html?${"id=" + blog._id}`);
      readMoreLink.setAttribute("class", "btn");
      readMoreLink.innerText = "Read More";

      var iconsDiv = document.createElement("div");
      iconsDiv.setAttribute("class", "icons");

      const dateObject = new Date(blog.createdAt);

      var dateLink = document.createElement("a");
      dateLink.setAttribute("href", "#");
      dateLink.innerHTML = `<i class="far fa-calendar"></i>${dateObject.toLocaleDateString()}`;

      var authorLink = document.createElement("a");
      authorLink.setAttribute("href", "#");
      authorLink.innerHTML = `<i class="fas fa-user"></i>By ${blog.createdBy}`;

      iconsDiv.appendChild(dateLink);
      iconsDiv.appendChild(document.createElement("br"));
      iconsDiv.appendChild(authorLink);

      contentDiv.appendChild(titleHeader);
      contentDiv.appendChild(readMoreLink);
      contentDiv.appendChild(iconsDiv);

      blogDiv.appendChild(imageDiv);
      blogDiv.appendChild(contentDiv);

      boxContainer.appendChild(blogDiv);
    });
  }

  // displayBlogs(blogs);

  async function getBlogs() {
    try {
      const blogs = await axios.get(
        "https://drab-cyan-seahorse-yoke.cyclic.app/blogs"
      );

      displayBlogs(blogs.data);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  }

  getBlogs();
});
