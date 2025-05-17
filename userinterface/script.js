function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

window.onclick = function(event) {
  if (!event.target.closest('.profile-container') && !event.target.closest('.sidebar')) {
    document.getElementById("sidebar").style.width = "0";
  }
};

const cards = document.querySelectorAll('.animal-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-in-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

const username = localStorage.getItem("username");
if (username) {
  document.getElementById("welcomeUser").textContent = `Hello, ${username}`;
  
  // Optional: Also change sidebar name
  const sidebarName = document.querySelector(".sidebar-header h3");
  if (sidebarName) {
    sidebarName.textContent = username;
  }
} else {
  document.getElementById("welcomeUser").textContent = "Welcome 😊";
}
