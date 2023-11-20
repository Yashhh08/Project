document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector(`input[name="name"]`).value;
    const email = document.querySelector(`input[name="email"]`).value;
    const password = document.querySelector(`input[name="password"]`).value;
    const confirmPassword = document.querySelector(`input[name="cpassword"]`)
      .value;

    if (password !== confirmPassword) {
      return alert("Check password again");
    }

    // console.log({ name, email, password, confirmPassword });

    const userDetails = { name, email, password };

    async function registerUser(userDetails) {
      try {
        const response = await axios.post(
          "https://drab-cyan-seahorse-yoke.cyclic.app/users",
          userDetails
        );

        const { user, token } = response.data;

        localStorage.setItem("jwtToken", token);

        window.location.href = "./index.html#Login-form";
      } catch (error) {
        console.error(error.message);
      }
    }
    registerUser(userDetails);
  });
});
