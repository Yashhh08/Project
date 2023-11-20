let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
};

let loginForm = document.querySelector(".Login-form");

document.querySelector("#login-btn").onclick = () => {
  const name = localStorage.getItem("name");

  !name && loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
};

let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");

  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // code for login user display and logout functionality

  const jwtToken = localStorage.getItem("jwtToken");
  const name = localStorage.getItem("name");

  const header = document.querySelector(".header");

  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "display:flex; justify-content:center; align-items:center; gap:5px"
  );

  header.appendChild(div);

  const welcome = document.createElement("h5");
  welcome.innerText = `Hello, ${name}`;

  name && div.appendChild(welcome);

  const logoutButton = document.createElement("button");
  logoutButton.innerText = "logout";
  logoutButton.setAttribute(
    "style",
    "padding:2px; border:1px solid black; border-radius:5px"
  );

  if (jwtToken) {
    div.appendChild(logoutButton);
  }

  async function logout() {
    try {
      const response = await axios.post(
        "https://drab-cyan-seahorse-yoke.cyclic.app/users/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      localStorage.clear();

      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  }

  logoutButton.addEventListener("click", function () {
    logout();
  });

  // code for display packages on index page

  const packagesContainer = document.querySelector("#box-packages");

  function displayPackages(packages) {
    packages.forEach(function (package, index) {
      if (index > 2) {
        return;
      }

      var packageDiv = document.createElement("div");
      packageDiv.setAttribute("class", "box");
      packageDiv.setAttribute("data-aos", "fade-up");

      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("class", "image");

      var image = document.createElement("img");
      image.setAttribute("src", package.imageUrl);
      image.setAttribute("alt", package.location);

      var locationHeader = document.createElement("h3");
      locationHeader.innerHTML =
        '<i class="fas fa-map-marker-alt"></i> ' + package.location;

      imageDiv.appendChild(image);
      imageDiv.appendChild(locationHeader);

      var contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "content");
      contentDiv.setAttribute("style", "text-align:center");

      var descriptionParagraph = document.createElement("p");
      descriptionParagraph.innerText = package.description;
      descriptionParagraph.setAttribute(
        "style",
        "text-align:center;	overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;"
      );

      // var itineraryList = document.createElement("ul");
      // package.itinerary.forEach(function (day) {
      //   var dayItem = document.createElement("li");
      //   dayItem.innerHTML = `<strong>Day ${
      //     day.day
      //   }:</strong> ${day.activities.join(", ")}`;
      //   itineraryList.appendChild(dayItem);
      // });

      var costParagraph = document.createElement("p");
      costParagraph.innerText = `Cost : Rs.${package.cost}`;
      costParagraph.setAttribute("style", "font-weight:900; text-align:center");

      var button = document.createElement("a");
      button.setAttribute("href", `./package.html?${"id=" + package._id}`);
      button.setAttribute("class", "btn");
      button.innerText = "More details";

      button.addEventListener("click", handleMoreDetailsClick);

      function handleMoreDetailsClick() {
        // console.log(package._id);
      }

      contentDiv.appendChild(descriptionParagraph);
      // contentDiv.appendChild(itineraryList);
      contentDiv.appendChild(costParagraph);

      packageDiv.appendChild(imageDiv);
      packageDiv.appendChild(contentDiv);
      contentDiv.appendChild(button);

      packagesContainer.appendChild(packageDiv);
    });
  }

  // displayPackages(packages);

  async function getPackages() {
    try {
      const packages = await axios.get(
        "https://drab-cyan-seahorse-yoke.cyclic.app/packages"
      );

      displayPackages(packages.data);
    } catch (error) {
      console.error("Error fetching packages:", error.message);
    }
  }

  getPackages();

  // code for display guides on index page

  function displayGuides(guides) {
    const boxContainer = document.querySelector("#box-guides");

    guides.forEach(function (guide, index) {
      if (index > 2) {
        return;
      }

      var guideDiv = document.createElement("div");
      guideDiv.setAttribute("class", "box");
      guideDiv.setAttribute("data-aos", "fade-up");

      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("class", "image");

      var image = document.createElement("img");
      image.setAttribute("src", guide.image);
      image.setAttribute("alt", guide.name);

      var nameHeader = document.createElement("h3");
      nameHeader.innerText = guide.name;

      imageDiv.appendChild(image);
      imageDiv.appendChild(nameHeader);

      var contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "content");

      var detailsParagraph = document.createElement("p");
      detailsParagraph.innerHTML = `
        <b>Location</b>: Based in ${guide.location}<br />
        <b>Specialization</b>: ${guide.expertise.join(", ")}<br />
        <b>Languages</b>: ${guide.languages.join(", ")}<br />
      `;

      // You can add more details like experience, passion, approach, etc.

      var bookNowBox = document.createElement("div");
      bookNowBox.setAttribute("style", "text-align:center");

      var bookNowLink = document.createElement("a");
      bookNowLink.setAttribute("href", "./booknow.html");
      bookNowLink.setAttribute("class", "btn");
      bookNowLink.innerText = "Book Now";

      // no need of button here, we can book package directlty and in that package booking form we can add dropdown menu for selecting guide.

      // bookNowBox.appendChild(bookNowLink);

      contentDiv.appendChild(detailsParagraph);
      contentDiv.appendChild(bookNowBox);

      guideDiv.appendChild(imageDiv);
      guideDiv.appendChild(contentDiv);

      boxContainer.appendChild(guideDiv);
    });
  }

  // displayGuides(guides);

  async function getGuides() {
    try {
      const guides = await axios.get(
        "https://drab-cyan-seahorse-yoke.cyclic.app/guides"
      );

      displayGuides(guides.data);
    } catch (error) {
      console.error("Error fetching guides:", error.message);
    }
  }

  getGuides();

  // code for display blogs on index page

  function displayBlogs(blogs) {
    const boxContainer = document.querySelector("#box-blogs");

    blogs.forEach(function (blog, index) {
      if (index > 2) {
        return;
      }

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
