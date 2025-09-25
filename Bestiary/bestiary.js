fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    const container = document.getElementById("bestiary");

    monsters.forEach(monster => {
      const card = document.createElement("article");
      card.classList.add("monster-card");

      card.innerHTML = `
        <div class="monster-img">
          <img src="${monster.image}" alt="${monster.name}">
        </div>
        <div class="monster-info">
          <h2>${monster.name}</h2>
          <p class="category">${monster.category}</p>
          <p class="desc">${monster.description}</p>
          <div class="combat-info">
            <p><strong>Strengths:</strong> ${monster.strengths}</p>
            <p><strong>Weaknesses:</strong> ${monster.weaknesses}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading monsters:", err));
