
  function openForm(roomName) {
    document.getElementById("roomType").value = roomName;
    document.getElementById("roomForm").classList.remove("hidden");
    document.getElementById("roomForm").classList.add("flex");
  }

  function closeForm() {
    document.getElementById("roomForm").classList.add("hidden");
    document.getElementById("roomForm").classList.remove("flex");
  }

