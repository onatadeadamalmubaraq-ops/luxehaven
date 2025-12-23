
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

  const roomType = document.getElementById("roomType");
    const roomCount = document.getElementById("roomCount");
    const summary = document.getElementById("summary");

    function updateSummary() {
      if (roomType.value && roomCount.value) {
        summary.textContent = `You selected ${roomCount.value} ${roomType.value}`;
      } else {
        summary.textContent = "";
      }
    }

    roomType.addEventListener("change", updateSummary);
    roomCount.addEventListener("change", updateSummary);
