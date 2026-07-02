const itinerary = [
  {
    day: "Friday 3rd July",
    activities: [
      "Arrive in Amsterdam",
      "Check into accommodation",
      "Evening walk around city"
    ]
  },
  {
    day: "Saturday 4th July",
    activities: [
      "Breakfast in city centre",
      "Canal cruise",
      "Explore Dam Square",
      "Night out"
    ]
  },
  {
    day: "Sunday 5th July",
    activities: [
      "Brunch",
      "Museum District visit",
      "Vondelpark chill",
      "Dinner in city"
    ]
  }
];

// SCREEN SWITCHING
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === "itinerary") {
    renderItinerary();
  }
}

// RENDER ITINERARY
function renderItinerary() {
  const container = document.getElementById("itinerary-content");

  if (!container) return;

  container.innerHTML = itinerary.map(day => `
    <div class="card">
      <h3>${day.day}</h3>
      <ul>
        ${day.activities.map(a => `<li>${a}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

// optional: safe initial load
document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");
});