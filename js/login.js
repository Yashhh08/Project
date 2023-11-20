document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".Login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector(`input[name="email"]`).value;
    const password = document.querySelector(`input[name="password"]`).value;

    console.log({ email, password });

    async function login(email, password) {
      try {
        const response = await axios.post(
          "https://drab-cyan-seahorse-yoke.cyclic.app/users/login",
          { email, password }
        );

        const { user, token } = response.data;

        localStorage.setItem("jwtToken", token);
        localStorage.setItem("name", user.name);
        localStorage.setItem("_id", user._id);

        window.location.reload();

        alert("login successfully");
      } catch (error) {
        console.error(error.message);
        alert("Wrong credentials..!!");
        form.reset();
      }
    }

    login(email, password);
  });
});
