
  function openForm(roomName) {
    document.getElementById("roomType").value = roomName;
    document.getElementById("roomForm").classList.remove("hidden");
    document.getElementById("roomForm").classList.add("flex");
  }

  function closeForm() {
    document.getElementById("roomForm").classList.add("hidden");
    document.getElementById("roomForm").classList.remove("flex");
  }
function returnHome(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Redirect to home page
    window.location.href = "index.html";
  }

  // Attach to the form submit event
  document.querySelector("form").addEventListener("submit", returnHome);
