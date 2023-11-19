const guides = [
  {
    _id: "g1",
    name: "Arun Kumar",
    image: "https://dummyimage.com/150x150/3498db/ffffff",
    location: "Kochi",
    expertise: ["History", "Culture", "Local Cuisine"],
    languages: ["English", "Malayalam", "Hindi"],
  },
  {
    _id: "g2",
    name: "Priya Patel",
    image: "https://dummyimage.com/150x150/e74c3c/ffffff",
    location: "Thekkady",
    expertise: ["Wildlife", "Nature", "Adventure"],
    languages: ["English", "Tamil", "Gujarati"],
  },
  {
    _id: "g3",
    name: "Rajesh Nair",
    image: "https://dummyimage.com/150x150/2ecc71/ffffff",
    location: "Alleppey",
    expertise: ["Backwaters", "Boat Cruises", "Local Arts"],
    languages: ["English", "Malayalam", "Kannada"],
  },
  {
    _id: "g4",
    name: "Anjali Singh",
    image: "https://dummyimage.com/150x150/f39c12/ffffff",
    location: "Munnar",
    expertise: ["Hiking", "Tea Plantations", "Photography"],
    languages: ["English", "Hindi", "Bengali"],
  },
  {
    _id: "g5",
    name: "Vikram Sharma",
    image: "https://dummyimage.com/150x150/9b59b6/ffffff",
    location: "Mumbai",
    expertise: ["Urban Exploration", "History", "Cuisine"],
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    _id: "g6",
    name: "Meera Desai",
    image: "https://dummyimage.com/150x150/2c3e50/ffffff",
    location: "Udaipur",
    expertise: ["Palaces", "Cultural Heritage", "Boat Rides"],
    languages: ["English", "Hindi", "Rajasthani"],
  },
  {
    _id: "g7",
    name: "Karan Verma",
    image: "https://dummyimage.com/150x150/3498db/ffffff",
    location: "Rajasthan",
    expertise: ["Forts", "Desert Safari", "Folk Music"],
    languages: ["English", "Hindi", "Rajasthani"],
  },
  {
    _id: "g8",
    name: "Neha Kapoor",
    image: "https://dummyimage.com/150x150/e74c3c/ffffff",
    location: "Goa",
    expertise: ["Beach Life", "Nightlife", "Water Sports"],
    languages: ["English", "Konkani", "Hindi"],
  },
  {
    _id: "g9",
    name: "Karthik Rao",
    image: "https://dummyimage.com/150x150/2ecc71/ffffff",
    location: "Hampi",
    expertise: ["Archaeology", "Hiking", "Ancient Ruins"],
    languages: ["English", "Kannada", "Hindi"],
  },
  {
    _id: "g10",
    name: "Deepa Mishra",
    image: "https://dummyimage.com/150x150/f39c12/ffffff",
    location: "Karnataka",
    expertise: ["Nature", "Cultural Diversity", "Cuisine"],
    languages: ["English", "Kannada", "Hindi"],
  },
  {
    _id: "g11",
    name: "Rahul Joshi",
    image: "https://dummyimage.com/150x150/3498db/ffffff",
    location: "Sindhudurg",
    expertise: ["Coastal Life", "Historic Forts", "Seafood"],
    languages: ["English", "Marathi", "Konkani"],
  },
  {
    _id: "g12",
    name: "Divya Saxena",
    image: "https://dummyimage.com/150x150/e74c3c/ffffff",
    location: "Delhi",
    expertise: ["Historical Monuments", "Shopping", "Street Food"],
    languages: ["English", "Hindi", "Punjabi"],
  },
  {
    _id: "g13",
    name: "Aditya Kapoor",
    image: "https://dummyimage.com/150x150/2ecc71/ffffff",
    location: "Varanasi",
    expertise: ["Spirituality", "Ganges Ghats", "Traditional Music"],
    languages: ["English", "Hindi"],
  },
  {
    _id: "g14",
    name: "Ayesha Khan",
    image: "https://dummyimage.com/150x150/f39c12/ffffff",
    location: "Kolkata",
    expertise: ["Cultural Festivals", "Colonial Architecture", "Cuisine"],
    languages: ["English", "Bengali", "Hindi"],
  },
];

{
  // <div class="box" data-aos="fade-up">
  //   <div class="image">
  //     <img src="./images/tourguide3.jpeg" alt="mumbai" />
  //     <h3>Arjun Desai</h3>
  //   </div>
  //   <div class="content">
  //     <p>
  //       <b>Location</b>: Based in Mumbai
  //       <br />
  //       <b>Specialization </b>: Historical and architectural tours in Mumbai.
  //       <br />
  //       <b>Experience</b>: Years of guiding visitors through Mumbai's
  //       colonial-era landmarks and vibrant neighborhoods.
  //       <br />
  //       <b>Languages</b>: Fluent in English, Hindi, and Marathi.
  //       <b>Passion</b>: Sharing the city's diverse history, from the Gateway of
  //       India to the hidden gems of South Mumbai.
  //       <br />
  //       <b>Approach</b>: Personalized tours that uncover Mumbai's rich cultural
  //       and architectural heritage.
  //       <br />
  //     </p>
  //     <a href="./booknow.html" class="btn">
  //       {" "}
  //       book now
  //     </a>
  //   </div>
  // </div>;
}

document.addEventListener("DOMContentLoaded", function () {
  function displayGuides(guides) {
    const boxContainer = document.querySelector(".box-container");

    guides.forEach(function (guide, index) {
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
});
