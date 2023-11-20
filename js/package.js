const packages = [
  {
    id: "p1",
    location: "Mumbai",
    imageUrl:
      "https://media.istockphoto.com/photos/mumbai-skyline-at-marinedrive-picture-id525069828",
    description:
      "Mumbai, the financial capital of India, is a bustling metropolis known for its vibrant energy, historic landmarks, and Bollywood glamour.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Mumbai, the city of dreams.",
          "Check-in to your hotel and relax.",
          "Explore the Gateway of India and Marine Drive.",
          "Experience the bustling street life at Colaba Causeway.",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Elephanta Caves, a UNESCO World Heritage Site.",
          "Explore Chhatrapati Shivaji Maharaj Terminus.",
          "Stroll through the iconic Chhatrapati Shivaji Park.",
          "Discover the vibrant culture of Dharavi.",
        ],
      },
      {
        day: 3,
        activities: [
          "Take a ferry to Alibaug for a day trip.",
          "Relax on Alibaug Beach and explore Kolaba Fort.",
          "Enjoy water sports and beach activities.",
        ],
      },
      {
        day: 4,
        activities: [
          "Visit the Prince of Wales Museum.",
          "Explore the famous Juhu Beach.",
          "Experience the nightlife at Bandra Worli Sea Link.",
        ],
      },
      {
        day: 5,
        activities: [
          "Shop at the bustling markets of Crawford Market.",
          "Explore the diverse street food of Mumbai.",
          "Depart from Mumbai with unforgettable memories.",
        ],
      },
    ],
    guides: [
      {
        id: "g1",
        name: "Arun Kumar",
        image: "https://dummyimage.com/150x150/3498db/ffffff",
        location: "Kochi",
        expertise: ["History", "Culture", "Local Cuisine"],
        languages: ["English", "Malayalam", "Hindi"],
      },
      {
        id: "g2",
        name: "Priya Patel",
        image: "https://dummyimage.com/150x150/e74c3c/ffffff",
        location: "Thekkady",
        expertise: ["Wildlife", "Nature", "Adventure"],
        languages: ["English", "Tamil", "Gujarati"],
      },
    ],
    cost: 25000,
  },
  {
    id: "p2",
    location: "Udaipur",
    imageUrl:
      "https://media.istockphoto.com/photos/udaipur-city-palace-picture-id545310425",
    description:
      "Udaipur, the 'City of Lakes,' is a romantic destination in Rajasthan known for its palaces, temples, and scenic lakes.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Udaipur, the City of Lakes.",
          "Check-in to your hotel with a view of Lake Pichola.",
          "Explore the majestic City Palace.",
          "Take a boat ride on Lake Pichola.",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the stunning Jag Mandir and Jag Niwas.",
          "Explore the beautiful Saheliyon Ki Bari.",
          "Stroll through the local markets of Udaipur.",
        ],
      },
      {
        day: 3,
        activities: [
          "Take a day trip to the famous Kumbhalgarh Fort.",
          "Visit the intricate Ranakpur Jain Temple.",
          "Experience a traditional Rajasthani cultural show.",
        ],
      },
      {
        day: 4,
        activities: [
          "Explore the vintage car museum in Udaipur.",
          "Relax at Fateh Sagar Lake.",
          "Shop for traditional Rajasthani handicrafts.",
        ],
      },
      {
        day: 5,
        activities: [
          "Enjoy a leisurely breakfast overlooking the lakes.",
          "Depart from Udaipur with cherished memories.",
        ],
      },
    ],
    guides: [],
    cost: 22000,
  },

  {
    id: "p3",
    location: "Rajasthan",
    imageUrl:
      "https://media.istockphoto.com/photos/amber-fort-jaipur-picture-id859366432",
    description:
      "Rajasthan, the 'Land of Kings,' is a state in North India famous for its rich history, vibrant culture, and majestic forts.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Jaipur, the Pink City.",
          "Check-in to your heritage hotel.",
          "Explore the magnificent Amer Fort.",
          "Visit the City Palace and Jantar Mantar.",
        ],
      },
      {
        day: 2,
        activities: [
          "Take a hot air balloon ride for a panoramic view.",
          "Visit the Hawa Mahal and Jal Mahal.",
          "Explore the local markets for Rajasthani crafts.",
        ],
      },
      {
        day: 3,
        activities: [
          "Drive to Jodhpur, the Blue City.",
          "Visit Mehrangarh Fort and Jaswant Thada.",
          "Explore the bustling Sardar Market.",
        ],
      },
      {
        day: 4,
        activities: [
          "Proceed to Udaipur, the City of Lakes.",
          "Visit the City Palace and Jagdish Temple.",
          "Stroll through the vibrant markets of Udaipur.",
        ],
      },
      {
        day: 5,
        activities: [
          "Relax at Fateh Sagar Lake.",
          "Explore the vintage car museum.",
          "Depart from Udaipur with royal memories.",
        ],
      },
    ],
    guides: [],
    cost: 28000,
  },
  {
    id: "p4",
    location: "Goa",
    imageUrl:
      "https://media.istockphoto.com/photos/cavelossim-beach-south-goa-india-picture-id1286488041",
    description:
      "Goa, a coastal paradise, is known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Goa, the beach capital of India.",
          "Check-in to your beachside resort.",
          "Relax on the sandy shores of Calangute Beach.",
          "Explore the vibrant markets of Anjuna.",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the historic Fort Aguada.",
          "Enjoy water sports at Baga Beach.",
          "Explore the nightlife of Tito's Lane.",
        ],
      },
      {
        day: 3,
        activities: [
          "Take a day trip to Dudhsagar Waterfalls.",
          "Experience the spice plantations of Goa.",
          "Relax and rejuvenate with a spa day.",
        ],
      },
      {
        day: 4,
        activities: [
          "Explore the churches of Old Goa.",
          "Cruise on the Mandovi River at sunset.",
          "Enjoy a beachside seafood dinner.",
        ],
      },
      {
        day: 5,
        activities: [
          "Relax on the beach for your last day in Goa.",
          "Shop for souvenirs at the flea markets.",
          "Depart from Goa with sun-kissed memories.",
        ],
      },
    ],
    guides: [],
    cost: 18000,
  },

  {
    id: "p5",
    location: "Hampi",
    imageUrl:
      "https://media.istockphoto.com/photos/hampi-karnataka-india-ancient-ruins-of-vijayanagar-empire-picture-id657907858",
    description:
      "Hampi, a UNESCO World Heritage Site, is an ancient city in Karnataka known for its ruins, temples, and unique landscape.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Hospet, the gateway to Hampi.",
          "Check-in to your hotel and relax.",
          "Explore the Virupaksha Temple and Hampi Bazaar.",
          "Witness the sunset at Hemakuta Hill.",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the impressive Vijaya Vittala Temple.",
          "Explore the Royal Enclosure and Lotus Mahal.",
          "Take a coracle ride on the Tungabhadra River.",
        ],
      },
      {
        day: 3,
        activities: [
          "Hike to Matanga Hill for panoramic views.",
          "Explore the ruins of Achyutaraya Temple.",
          "Visit the Elephant Stables and Underground Shiva Temple.",
        ],
      },
      {
        day: 4,
        activities: [
          "Take a day trip to Badami and Aihole.",
          "Explore the rock-cut caves of Badami.",
          "Visit the ancient temples of Aihole.",
        ],
      },
      {
        day: 5,
        activities: [
          "Explore the Hampi Archaeological Museum.",
          "Relax by the riverside and soak in the atmosphere.",
          "Depart from Hampi with memories of ancient wonders.",
        ],
      },
    ],
    guides: [],
    cost: 20000,
  },
  {
    id: "p6",
    location: "Karnataka",
    imageUrl:
      "https://media.istockphoto.com/photos/golden-beach-of-gokarna-karnataka-picture-id645191086",
    description:
      "Karnataka, in South India, offers a diverse mix of landscapes, from beaches to hills, and is known for its rich cultural heritage.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Bangalore, the Silicon Valley of India.",
          "Check-in to your hotel and relax.",
          "Explore Lalbagh Botanical Garden.",
          "Experience the nightlife on MG Road.",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit the historic Bangalore Palace.",
          "Explore the innovative exhibits at Visvesvaraya Industrial and Technological Museum.",
          "Stroll through Cubbon Park.",
        ],
      },
      {
        day: 3,
        activities: [
          "Drive to Gokarna, a serene beach town.",
          "Relax on the pristine beaches of Gokarna.",
          "Explore the famous Om Beach and Mahabaleshwar Temple.",
        ],
      },
      {
        day: 4,
        activities: [
          "Visit Murudeshwar and its towering Shiva statue.",
          "Relax on the beaches of Murudeshwar.",
          "Explore the quaint town of Sirsi.",
        ],
      },
      {
        day: 5,
        activities: [
          "Visit the Jog Falls, one of the highest waterfalls in India.",
          "Explore the lush landscapes of Shimoga.",
          "Depart from Bangalore with memories of Karnataka's diversity.",
        ],
      },
    ],
    guides: [],
    cost: 23000,
  },
  {
    id: "p7",
    location: "Sindhudurg",
    imageUrl:
      "https://media.istockphoto.com/photos/malvan-tarkarli-sindhudurg-fort-maharashtra-picture-id1164507324",
    description:
      "Sindhudurg, a coastal district in Maharashtra, is known for its pristine beaches, historic forts, and seafood delicacies.",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrive in Malvan, the gateway to Sindhudurg.",
          "Check-in to your beachside resort.",
          "Explore the historic Sindhudurg Fort.",
          "Enjoy a boat ride to Tsunami Island.",
        ],
      },
      {
        day: 2,
        activities: [
          "Snorkel and scuba dive in the clear waters of Malvan.",
          "Visit the rock-cut Kunkeshwar Temple.",
          "Explore the vibrant Malvan Market.",
        ],
      },
      {
        day: 3,
        activities: [
          "Take a day trip to Tarkarli Beach for water sports.",
          "Relax on the white sandy shores of Tarkarli.",
          "Enjoy a traditional Malvani seafood feast.",
        ],
      },
      {
        day: 4,
        activities: [
          "Visit the Vijaydurg Fort, known as the 'Gibraltar of the East.'",
          "Explore the ancient Rameshwar Temple.",
          "Experience a sunset cruise in the backwaters.",
        ],
      },
      {
        day: 5,
        activities: [
          "Relax on the beaches of Malvan for your last day.",
          "Indulge in Malvani cuisine.",
          "Depart from Sindhudurg with memories of coastal bliss.",
        ],
      },
    ],
    guides: [],
    cost: 19000,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // code for get and set packgeId
  const urlSearchParams = new URLSearchParams(window.location.search);
  const packageId = urlSearchParams.get("id");

  async function getPackageById(packageId) {
    try {
      const response = await axios.get(
        `https://drab-cyan-seahorse-yoke.cyclic.app/packages/${packageId}`
      );

      displayPackage(response.data);
    } catch (error) {
      console.error("Error fetching package:", error.message);
    }
  }

  getPackageById(packageId);

  // code for display package

  const packageContainer = document.querySelector(".package");

  function displayPackage(package) {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "package-details");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image");
    imageContainer.setAttribute("style", "margin:20px;text-align:center;");

    const image = document.createElement("img");
    image.setAttribute("src", package.imageUrl);
    image.setAttribute("alt", package.location);
    image.setAttribute("style", "height:650px;width:1100px");

    imageContainer.appendChild(image);

    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("class", "content");

    const heading = document.createElement("h2");
    heading.innerText = package.location;

    const description = document.createElement("p");
    description.innerText = package.description;

    contentContainer.appendChild(heading);
    contentContainer.appendChild(description);

    const itineraryContainer = document.createElement("div");
    itineraryContainer.setAttribute("class", "package-itinerary");

    const itineraryHeading = document.createElement("h3");
    itineraryHeading.innerText = "Itinerary";

    itineraryContainer.appendChild(itineraryHeading);

    const itineraryList = document.createElement("ul");

    package.itinerary?.forEach((day) => {
      const dayItem = document.createElement("li");

      const dayHeading = document.createElement("h4");
      dayHeading.innerText = `Day ${day.day}`;

      const activitiesList = document.createElement("ul");

      day.activities.forEach((activity) => {
        const activityItem = document.createElement("li");
        activityItem.innerText = activity;
        activitiesList.appendChild(activityItem);
      });

      dayItem.appendChild(dayHeading);
      dayItem.appendChild(activitiesList);

      itineraryList.appendChild(dayItem);
    });

    itineraryContainer.appendChild(itineraryList);

    // guide section

    const guideContainer = document.createElement("div");

    const guideHeading = document.createElement("h2");
    guideHeading.innerText =
      package.guides?.length > 0 ? "Guide for this tour" : "";
    guideHeading.setAttribute("style", "margin-bottom:10px");

    guideContainer.appendChild(guideHeading);

    package.guides?.forEach(function (guide, index) {
      var guideDiv = document.createElement("div");
      guideDiv.setAttribute("class", "box");
      guideDiv.setAttribute("data-aos", "fade-up");
      guideDiv.setAttribute("class", "package-guide");

      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("class", "image");

      var image = document.createElement("img");
      image.setAttribute("src", guide.image);
      image.setAttribute("alt", guide.name);
      image.setAttribute("style", "width:200px;height:200px");

      var nameHeader = document.createElement("h3");
      nameHeader.innerText = guide.name;

      imageDiv.appendChild(image);
      imageDiv.appendChild(nameHeader);

      var contentDiv = document.createElement("div");
      contentDiv.setAttribute("class", "content");

      var detailsParagraph = document.createElement("p");
      detailsParagraph.innerHTML = `
        <b>Location</b>: Based in ${guide.location}<br />
        <b>Specialization</b>: ${guide.expertise?.join(", ")}<br />
        <b>Languages</b>: ${guide.languages?.join(", ")}<br />
      `;

      contentDiv.appendChild(detailsParagraph);

      guideDiv.append(imageDiv, contentDiv);

      guideContainer.appendChild(guideDiv);
    });

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("style", "text-align:center");

    var button = document.createElement("a");

    button.setAttribute("class", "btn");
    button.innerText = "Book Now";

    button.addEventListener("click", handleMoreDetailsClick);

    function handleMoreDetailsClick() {
      const userId = localStorage.getItem("_id");

      if (userId) {
        window.location.href = `./booknow.html?location=${package.location}&packageId=${package._id}&userId=${userId}`;
      } else {
        alert("Please login first..!!");
        window.location.href = "./packages.html";
      }
    }

    buttonDiv.appendChild(button);

    mainContainer.appendChild(imageContainer);
    mainContainer.appendChild(contentContainer);
    mainContainer.appendChild(itineraryContainer);
    mainContainer.appendChild(guideContainer);
    mainContainer.appendChild(buttonDiv);

    packageContainer.appendChild(mainContainer);
  }
});
