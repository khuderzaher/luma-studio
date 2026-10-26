(() => {
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-category]")];
  const empty = document.querySelector(".filter-empty");
  if (!buttons.length || !cards.length) return;
  buttons.forEach(button => button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    buttons.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let count = 0;
    cards.forEach(card => {
      const show = selected === "all" || card.dataset.category === selected;
      card.hidden = !show;
      if (show) count += 1;
    });
    if (empty) empty.hidden = count !== 0;
  }));
})();