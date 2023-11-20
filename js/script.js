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
});
