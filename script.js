const usernameInput = document.querySelector("#username");
const searchBtn = document.querySelector("#searchBtn");
const result = document.querySelector("#result");

searchBtn.addEventListener("click", getUser);
usernameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getUser();
  }
});

// async makes the function Promise-based. await pauses that async function at a Promise until the Promise settles, without blocking the JavaScript thread.
async function getUser() {
  const username = usernameInput.value;

  console.log("Searching for:", username);

  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();

  console.log(data);
}
