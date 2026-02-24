
const container = document.getElementById("card-container");
const buttons = document.querySelectorAll(".filters button");

function createCards(filter = "all"){
  container.innerHTML = "";

  const filteredEntries = filter === "all"
  ? entries
  : entries.filter(entry => entry.category === filter);

  filteredEntries.forEach(entry => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<h2>${entry.title}</h2>
    <p class="content">${entry.content}</p>
    <div class="meta">
      <span class="category">${entry.category.toUpperCase()}</span>
      <span class="date">${entry.date}</span>
    </div>`;

    container.appendChild(card);
  });
}

// Archive goes newest to oldest
createCards()

// Filter system
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    createCards(filter);
  });
});