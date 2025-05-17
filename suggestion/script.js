// Get user from localStorage (must be set during login)
const loggedInUser = localStorage.getItem("loggedInUser") || "Guest";
document.querySelector(".name").textContent = loggedInUser;

function submitSuggestion() {
  const text = document.getElementById("suggestion").value.trim();
  const thankYouMsg = document.getElementById("thank-you");

  if (text) {
    const previous = JSON.parse(localStorage.getItem("suggestions") || "[]");
    previous.push({ 
      name: loggedInUser, 
      message: text, 
      time: new Date().toISOString() 
    });
    localStorage.setItem("suggestions", JSON.stringify(previous));

    document.getElementById("suggestion").value = "";
    thankYouMsg.style.display = "block";
  } else {
    alert("Please enter a suggestion before submitting.");
  }
}
