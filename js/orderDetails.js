document.addEventListener("DOMContentLoaded", function () {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const orderId = urlSearchParams.get("orderId");

  const jwtToken = localStorage.getItem("jwtToken");

  //   display data

  const orderSection = document.querySelector(".orderDetails");

  function displayOrderDetails(orderData) {
    orderSection.innerHTML = "";

    const packageImageDiv = document.createElement("imageDiv");

    const image = document.createElement("img");
    image.src = orderData.packageId.imageUrl;
    image.setAttribute("style", "height:300px; width:400px");

    packageImageDiv.appendChild(image);

    const orderIdParagraph = document.createElement("p");
    orderIdParagraph.innerText = `Order ID: ${orderData._id}`;

    const userName = document.createElement("p");
    userName.innerText = `Name : ${orderData.userId.name}`;

    const userEmail = document.createElement("p");
    userEmail.innerText = `Email : ${orderData.userId.email}`;

    const packageLocation = document.createElement("p");
    packageLocation.innerText = `Location: ${orderData.packageId.location}`;

    const packageCost = document.createElement("p");
    packageCost.innerText = `Cost: ${orderData.packageId.cost}`;

    const startDateParagraph = document.createElement("p");
    startDateParagraph.innerText = `Start Date: ${new Date(
      orderData.startDate
    ).toLocaleDateString()}`;

    const endDateParagraph = document.createElement("p");
    endDateParagraph.innerText = `End Date: ${new Date(
      orderData.endDate
    ).toLocaleDateString()}`;

    const planParagraph = document.createElement("p");
    planParagraph.innerText = `Plan: ${orderData.plan}`;

    const paymentModeParagraph = document.createElement("p");
    paymentModeParagraph.innerText = `Payment Mode: ${orderData.paymentMode}`;

    const createdAtParagraph = document.createElement("p");
    createdAtParagraph.innerText = `Created At: ${new Date(
      orderData.createdAt
    ).toLocaleString()}`;

    const updatedAtParagraph = document.createElement("p");
    updatedAtParagraph.innerText = `Updated At: ${new Date(
      orderData.updatedAt
    ).toLocaleString()}`;

    const backHomeButton = document.createElement("button");
    backHomeButton.innerText = "Back Home";
    backHomeButton.setAttribute("class", "btn");

    backHomeButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });

    orderSection.appendChild(packageImageDiv);
    orderSection.appendChild(orderIdParagraph);
    orderSection.appendChild(userName);
    orderSection.appendChild(userEmail);
    orderSection.appendChild(packageLocation);
    orderSection.appendChild(packageCost);
    orderSection.appendChild(startDateParagraph);
    orderSection.appendChild(endDateParagraph);
    orderSection.appendChild(planParagraph);
    orderSection.appendChild(paymentModeParagraph);
    orderSection.appendChild(backHomeButton);
    // orderSection.appendChild(createdAtParagraph);
    // orderSection.appendChild(updatedAtParagraph);
  }

  //   get and set data

  let orderData = {};

  async function getOrderById(orderId) {
    try {
      const response = await axios.get(
        `https://drab-cyan-seahorse-yoke.cyclic.app/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      orderData = response.data;

      console.log(orderData);

      displayOrderDetails(orderData);
    } catch (error) {
      console.error(error.message);
    }
  }

  getOrderById(orderId);
});
