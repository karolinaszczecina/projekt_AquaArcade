/* Aqua Arcade Blog interactions: category filters and live search. */
(() => {
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const articleCards = [...document.querySelectorAll(".aa-article-column")];
  const featured = document.querySelector("#featured-article");
  const searchInput = document.querySelector("#blog-search");
  const searchForm = document.querySelector("#blog-search-form");
  const noResults = document.querySelector("#blog-no-results");
  let activeFilter = "all";

  function updateArticles() {
    const query = (searchInput?.value || "").trim().toLocaleLowerCase();
    let visibleCount = 0;

    articleCards.forEach((card) => {
      const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
      const textMatch = card.textContent.toLocaleLowerCase().includes(query);
      const visible = categoryMatch && textMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (featured) {
      const categoryMatch = activeFilter === "all" || featured.dataset.category === activeFilter;
      const textMatch = featured.textContent.toLocaleLowerCase().includes(query);
      featured.hidden = !(categoryMatch && textMatch);
      if (!featured.hidden) visibleCount += 1;
    }

    if (noResults) noResults.hidden = visibleCount > 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      updateArticles();
    });
  });

  searchInput?.addEventListener("input", updateArticles);
  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    updateArticles();
    document.querySelector("#latest-articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelectorAll("[data-jump-filter]").forEach((link) => {
    link.addEventListener("click", () => {
      const category = link.dataset.jumpFilter;
      const matchingButton = filterButtons.find((button) => button.dataset.filter === category);
      matchingButton?.click();
    });
  });
})();
