document.addEventListener("DOMContentLoaded", function () {
  const urlSearchParams = new URLSearchParams(window.location.search);

  //   const urlLocation = urlSearchParams.get("location");
  const packageId = urlSearchParams.get("packageId");
  const userId = urlSearchParams.get("userId");

  const jwtToken = localStorage.getItem("jwtToken");

  const form = document.querySelector(".bnform");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const arrivalDate = form.querySelector('input[name="arrivalDate"]').value;
    const departureDate = form.querySelector('input[name="departureDate"]')
      .value;
    const plan = form.querySelector('select[name="plan"]').value;
    const paymentMode = form.querySelector('select[name="paymentMode"]').value;
    const contactNumber = form.querySelector('input[name="number"]').value;

    const formData = {
      userId,
      packageId,
      startDate: new Date(arrivalDate),
      endDate: new Date(departureDate),
      plan,
      paymentMode,
    };

    // console.log(formData);

    async function createOrder(formData) {
      try {
        const response = await axios.post(
          "https://drab-cyan-seahorse-yoke.cyclic.app/orders",
          formData,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        const orderId = response.data._id;

        window.location.href = `./orderSuccess.html?orderId=${orderId}`;
      } catch (error) {
        console.error(error.message);
      }
    }

    createOrder(formData);
  });
});
