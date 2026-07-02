// ══════════════════════════════════════
//  TRIP DATA
// ══════════════════════════════════════

const itinerary = [
  {
    day: "Day 1",
    date: "Friday 3 July",
    title: "Arrival + Wondr",
    color: "blue",
    events: [
      { time: "06:16", name: "Eurostar departs London St Pancras", detail: "", tags: ["travel"] },
      { time: "11:20", name: "Arrive Amsterdam Centraal", detail: "", tags: [] },
      { time: "~12:00", name: "Travel to Uitdam bungalow", detail: "~18 mins · Drop bags · Check-in from 4pm", tags: ["travel"] },
      { time: "~13:00", name: "Wondr experience", detail: "£21pp · Indefinite time · Perfect while waiting for check-in", tags: ["activity"] },
      { time: "~15:30", name: "Albert Heijn supermarket run", detail: "Cheapest big supermarket — stock the bungalow", tags: ["food"] },
      { time: "16:00+", name: "Check in to EuroParcs bungalow", detail: "Zeedijk 2, Uitdam · Ref: HMT2BYCFTF", tags: [] },
      { time: "Night", name: "Satellite Sportscafé", detail: "£19pp · 15 mins from Centraal", tags: ["club"] }
    ]
  },
  {
    day: "Day 2",
    date: "Saturday 4 July",
    title: "Walibi Holland",
    color: "purple",
    events: [
      { time: "Morning", name: "Free morning — chill at bungalow", detail: "", tags: [] },
      { time: "~14:00", name: "Head to Walibi Holland", detail: "~45–50 mins from Amsterdam", tags: ["travel"] },
      { time: "14:30", name: "Walibi Holland — Half Day ticket", detail: "€23pp · Entry 2:30pm – 7:00pm · Book online!", tags: ["activity", "book"] },
      { time: "~19:30", name: "Return to Amsterdam", detail: "", tags: ["travel"] },
      { time: "Night", name: "Chicago Social Club", detail: "£10pp", tags: ["club"] }
    ]
  },
  {
    day: "Day 3",
    date: "Sunday 5 July",
    title: "Amsterdam + Tiki Pool",
    color: "teal",
    events: [
      { time: "Morning", name: "Free morning in Amsterdam", detail: "OBA Café Oosterdok rooftop (free) · Albert Cuijp Market", tags: ["free"] },
      { time: "Afternoon", name: "Lunch stop", detail: "Laurens or Friet Fries — see Food tab", tags: ["food"] },
      { time: "~16:00", name: "Head to Duinrell (Wassenaar)", detail: "~1 hour from Amsterdam — leave by 16:00 sharp", tags: ["travel"] },
      { time: "17:00", name: "Tiki Pool at Duinrell", detail: "€27.50pp · 4 hours · Arrival slot 17:00–17:15 · Until ~21:00", tags: ["activity", "booked"] },
      { time: "~21:00", name: "Dinner — Bourenjongen", detail: "£17pp · 2 cakes 🎂", tags: ["food"] },
      { time: "Night", name: "Escape", detail: "£9pp", tags: ["club"] }
    ]
  },
  {
    day: "Day 4",
    date: "Monday 6 July",
    title: "Checkout + Night Canal Cruise",
    color: "coral",
    events: [
      { time: "By 10:00", name: "Check out of bungalow — all 8", detail: "", tags: ["deadline"] },
      { time: "Morning", name: "Head into Amsterdam with bags", detail: "", tags: ["travel"] },
      { time: "Afternoon", name: "Jordaan wander + OBA rooftop", detail: "Last free explore of the trip", tags: ["free"] },
      { time: "Evening", name: "Food + last bits", detail: "Canela / Friet Fries / Le Smash — see Food tab", tags: ["food"] },
      { time: "~21:00", name: "Night canal cruise — all 8 🛶", detail: "£15pp · Bridges lit up after dark — way better at night", tags: ["activity"] },
      { time: "~22:30", name: "Leidseplein bar crawl", detail: "Paradiso / Melkweg — check Mon night listings · Bars open til 3–4am", tags: ["club"] },
      { time: "Late", name: "Jordaan canal walk", detail: "Stunning at night — free", tags: ["free"] },
      { time: "~02:00", name: "Head to Amsterdam Centraal", detail: "Rest, charge phones, grab food — 24hr spots inside", tags: ["travel"] },
      { time: "06:40", name: "Eurostar departs — all 8 together 🎉", detail: "Arrives London St Pancras 09:57", tags: ["travel"] }
    ]
  }
];

const foodPlaces = [
  { name: "Chun", distance: "11 mins from Centraal", price: "~£14pp", note: "Great first-night dinner option" },
  { name: "Wd Bhurs", distance: "10 mins from Centraal", price: "~£9pp", note: "Quick, easy evening meal" },
  { name: "Friet Fries", distance: "20 mins from Centraal", price: "~£8pp", note: "Classic Dutch fries — great quick bite any day" },
  { name: "Le Smash", distance: "15 mins from Centraal", price: "~£10pp", note: "Good post-Walibi wind-down dinner" },
  { name: "Canela", distance: "15 mins from Centraal", price: "~£8pp", note: "Casual, solid — works any evening" },
  { name: "Laurens", distance: "15 mins from Centraal", price: "~£7pp", note: "Cheapest sit-down on the list" },
  { name: "Bourenjongen", distance: "13 mins from Centraal", price: "~£17pp", note: "2 cakes — post-Tiki Pool Sunday treat 🎂" },
  { name: "Albert Heijn", distance: "Multiple locations", price: "Budget — varies", note: "Cheapest big supermarket — stock the bungalow on arrival" }
];

const clubs = [
  {
    name: "Satellite Sportscafé",
    type: "Bar / Sports café",
    typeClass: "bar",
    location: "15 mins from Centraal",
    price: "~£19pp",
    note: "Good first-night spot — lively but not overwhelming. Great way to kick off the trip.",
    suggested: "Friday 3 July (Night 1)"
  },
  {
    name: "Chicago Social Club",
    type: "Club",
    typeClass: "club",
    location: "15 mins from Centraal",
    price: "~£10pp",
    note: "Solid mid-trip night out. Popular with groups, good vibe on Saturday nights.",
    suggested: "Saturday 4 July (after Walibi)"
  },
  {
    name: "Escape",
    type: "Club",
    typeClass: "club",
    location: "10 mins from Centraal",
    price: "~£9pp",
    note: "One of Amsterdam's biggest clubs. Sunday nights work well — massive dance floors.",
    suggested: "Sunday 5 July (after Tiki Pool)"
  },
  {
    name: "Paradiso",
    type: "Live music venue",
    typeClass: "venue",
    location: "Leidseplein area",
    price: "Varies by event",
    note: "Iconic Amsterdam venue. Check what's on Monday 6 July closer to the date.",
    suggested: "Monday 6 July (final night)"
  },
  {
    name: "Melkweg",
    type: "Live music venue",
    typeClass: "venue",
    location: "Leidseplein area",
    price: "Varies by event",
    note: "Right next to Paradiso — check their Monday listings too.",
    suggested: "Monday 6 July (final night)"
  },
  {
    name: "Leidseplein bars",
    type: "Bar strip",
    typeClass: "bar",
    location: "Central Amsterdam",
    price: "Varies",
    note: "Amsterdam's liveliest square. Bars open til 3–4am — perfect for the final overnight before the 06:40 train.",
    suggested: "Monday 6 July overnight → 7th"
  }
];

// ══════════════════════════════════════
//  TAG CONFIG
// ══════════════════════════════════════

const tagConfig = {
  activity: { label: "Activity", cls: "tag-activity" },
  travel:   { label: "Travel",   cls: "tag-travel" },
  food:     { label: "Food",     cls: "tag-food" },
  club:     { label: "Club/Bar", cls: "tag-club" },
  free:     { label: "Free",     cls: "tag-free" },
  book:     { label: "Book ahead!", cls: "tag-book" },
  booked:   { label: "✓ Booked", cls: "tag-booked" },
  deadline: { label: "Hard deadline", cls: "tag-deadline" }
};

function makeTags(tags) {
  return tags.map(t => {
    const cfg = tagConfig[t] || { label: t, cls: "" };
    return `<span class="tag ${cfg.cls}">${cfg.label}</span>`;
  }).join("");
}

// ══════════════════════════════════════
//  RENDERERS
// ══════════════════════════════════════

function renderItinerary() {
  const c = document.getElementById("itinerary-content");
  if (!c) return;
  c.innerHTML = itinerary.map(d => `
    <div class="day-card">
      <div class="day-header color-${d.color}">
        <div class="day-pill">${d.day}</div>
        <div>
          <div class="day-title">${d.title}</div>
          <div class="day-date">${d.date}</div>
        </div>
      </div>
      <div class="events">
        ${d.events.map(e => `
          <div class="event">
            <div class="event-time">${e.time}</div>
            <div class="event-body">
              <div class="event-name">${e.name}</div>
              ${e.detail ? `<div class="event-detail">${e.detail}</div>` : ""}
              ${e.tags.length ? `<div class="tags">${makeTags(e.tags)}</div>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderFood() {
  const c = document.getElementById("food-content");
  if (!c) return;
  c.innerHTML = `<div class="food-grid">` +
    foodPlaces.map(f => `
      <div class="food-card">
        <div class="food-name">${f.name}</div>
        <div class="food-dist">📍 ${f.distance}</div>
        <div class="food-price">${f.price}</div>
        <div class="food-note">${f.note}</div>
      </div>
    `).join("") + `</div>`;
}

function renderClubs() {
  const c = document.getElementById("clubs-content");
  if (!c) return;
  c.innerHTML = clubs.map(cl => `
    <div class="club-card">
      <div class="club-top">
        <div>
          <div class="club-name">${cl.name}</div>
          <span class="club-type type-${cl.typeClass}">${cl.type}</span>
        </div>
        <div class="club-price">${cl.price}</div>
      </div>
      <div class="club-location">📍 ${cl.location}</div>
      <div class="club-note">${cl.note}</div>
      <div class="club-suggested">📅 ${cl.suggested}</div>
    </div>
  `).join("");
}

function renderInfo() {
  const c = document.getElementById("info-content");
  if (!c) return;
  c.innerHTML = `
    <div class="info-section">
      <div class="info-section-title">🏠 Bungalow</div>
      <div class="info-block">
        <div class="info-line"><span>Address</span><span>Zeedijk 2, Uitdam, Noord-Holland 1154 PP</span></div>
        <div class="info-line"><span>Ref</span><span>HMT2BYCFTF</span></div>
        <div class="info-line"><span>Check-in</span><span>From 4pm, Friday 3 July</span></div>
        <div class="info-line"><span>Checkout</span><span>Before 10am, Monday 6 July</span></div>
        <div class="info-line"><span>Host</span><span>EuroParcs</span></div>
      </div>
    </div>

    <div class="info-section">
      <div class="info-section-title">🚆 Trains</div>
      <div class="info-block">
        <div class="info-line"><span>Outbound</span><span>Fri 3 Jul · 06:16 → 11:20</span></div>
        <div class="info-line sub"><span></span><span>St Pancras → Amsterdam Centraal</span></div>
        <div class="info-line"><span>Return</span><span>Tue 7 Jul · 06:40 → 09:57</span></div>
        <div class="info-line sub"><span></span><span>Amsterdam Centraal → St Pancras</span></div>
      </div>
    </div>

    <div class="info-section">
      <div class="info-section-title">💰 Budget per person</div>
      <div class="info-block">
        <div class="info-line"><span>Activities</span><span>~£113</span></div>
        <div class="info-line"><span>Food</span><span>~£65</span></div>
        <div class="info-line"><span>Nightlife</span><span>~£46</span></div>
        <div class="info-line"><span>Travel</span><span>~£62</span></div>
        <div class="info-line"><span>Buffer</span><span>£25</span></div>
        <div class="info-line total"><span>Total</span><span>~£332</span></div>
      </div>
    </div>

    <div class="info-section">
      <div class="info-section-title">⚠️ Book before you go</div>
      <div class="info-block">
        <div class="info-line"><span>Walibi</span><span>€23pp · Buy online before Sat</span></div>
        <div class="info-line"><span>Tiki Pool</span><span>€27.50pp · 17:00 slot · Booked ✓</span></div>
        <div class="info-line"><span>Paradiso/Melkweg</span><span>Check Mon 6 Jul listings</span></div>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════
//  SCREEN SWITCHING
// ══════════════════════════════════════

const renderers = {
  itinerary: renderItinerary,
  food: renderFood,
  clubs: renderClubs,
  info: renderInfo
};

function showScreen(id, btn) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (btn) btn.classList.add("active");
  window.scrollTo(0, 0);
  if (renderers[id]) renderers[id]();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Amsterdam trip app loaded ✅");
});