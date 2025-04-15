function login() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  if (username === "anshu" || username === "aanya") {
    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").innerText = "Access denied. Only for Anshu and Aanya!";
  }
}

window.onload = function () {
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "dashboard.html") {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "index.html";
    document.getElementById("welcome-name").innerText = user.charAt(0).toUpperCase() + user.slice(1);
    document.getElementById("online-status").innerText = "Online";
  }
}
