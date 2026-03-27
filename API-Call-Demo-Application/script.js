// Step 6.1 fetch, display and error handling
const fetchUsers = () => {
  userContainer.innerHTML = "";
  loading.classList.remove("hidden");

  fetch("https://jsonplaceholder.typicode.com/users") // Step 4.2
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json(); // Step 4.3
    })
    .then(data => {
      displayUsers(data);
      loading.classList.add("hidden");
    })
    .catch(error => {  // Step 5.2 Use catch
      loading.classList.add("hidden");
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
};

const displayUsers = (users) => {
  users.forEach(user => {
    const { name, email, phone } = user;

    // Step 5.1
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `;

    userContainer.appendChild(userDiv);
  });
};

const fetchBtn = document.getElementById("fetchBtn");
const userContainer = document.getElementById("userContainer");
const loading = document.getElementById("loading"); // Step 5.3  Add loading

// Event Listener (Step 4.1)
fetchBtn.addEventListener("click", fetchUsers);
