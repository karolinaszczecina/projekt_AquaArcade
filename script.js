/* Aqua Arcade — shared navigation, cart, product-card navigation and filters. */
(() => {
  'use strict';

  const menuButton = document.querySelector('#games-menu-btn');
  const menu = document.querySelector('#games-menu');
  const closeMenu = () => {
    menu?.classList.add('hidden');
    menuButton?.setAttribute('aria-expanded', 'false');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('hidden') === false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) closeMenu();
  });

  const cartButton = document.querySelector('#cart-toggle');
  const cart = document.querySelector('#cart-popover');
  const cartCount = document.querySelector('#cart-count');
  const cartItems = document.querySelector('#cart-items');
  const cartEmpty = document.querySelector('#cart-empty');
  const storageKey = 'aqua-arcade-cart';
  let items = [];
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) items = saved.filter(x => typeof x === 'string').slice(0, 100);
  } catch (_) {}

  function renderCart() {
    const count = String(items.length);
    if (cartCount) cartCount.textContent = count;
    document.querySelectorAll('[data-cart-badge]').forEach(el => { el.textContent = count; });
    if (cartItems) {
      cartItems.replaceChildren(...items.map(name => {
        const li = document.createElement('li');
        li.textContent = name;
        return li;
      }));
    }
    if (cartEmpty) cartEmpty.hidden = items.length > 0;
  }

  function closeCart() {
    cart?.classList.add('hidden');
    cartButton?.setAttribute('aria-expanded', 'false');
  }

  cartButton?.addEventListener('click', () => {
    const isOpen = cart?.classList.toggle('hidden') === false;
    cartButton.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.aa-cart-wrap')) closeCart();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      closeCart();
    }
  });

  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
      items.push(button.dataset.name || 'Game');
      try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch (_) {}
      renderCart();
      const toast = document.querySelector('#toast');
      if (toast) {
        toast.textContent = 'Added to cart: ' + (button.dataset.name || 'Game');
        toast.classList.remove('hidden');
      }
    });
  });

  // Whole product tiles navigate on every page load; nested controls keep their own actions.
  const productCardSelector = '#game-list .aa-card-clickable, #catalog-products .aa-shop-card';
  document.addEventListener('click', event => {
    const card = event.target.closest(productCardSelector);
    if (!card || event.target.closest('a, button, input, select, textarea, label')) return;
    const url = card.dataset.productUrl || card.closest('.aa-shop-column')?.querySelector('a.aa-shop-photo')?.getAttribute('href');
    if (url) window.location.assign(url);
  });
  document.querySelectorAll(productCardSelector).forEach(card => {
    card.addEventListener('keydown', event => {
      if (event.target !== card || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      const url = card.dataset.productUrl || card.closest('.aa-shop-column')?.querySelector('a.aa-shop-photo')?.getAttribute('href');
      if (url) window.location.assign(url);
    });
  });

  renderCart();

  const cards = [...document.querySelectorAll('#game-list .aa-card')];
  // Home-page sorting uses the same four modes as the store's catalog.
  const homeSort = document.querySelector('#home-sort-products');
  const homeGrid = document.querySelector('#game-list');
  const homeSortItems = cards.map((card, index) => {
    const priceLabel = card.querySelector('.aa-price')?.textContent || '';
    const price = Number(priceLabel.replace(/[^\d,.]/g, '').replace(/\s/g, '').replace(',', '.')) || 0;
    return { card, index, price, title: (card.dataset.name || '').toLocaleLowerCase() };
  });
  function sortHomeGames() {
    if (!homeSort || !homeGrid) return;
    const mode = homeSort.value;
    const order = [...homeSortItems].sort((a, b) =>
      mode === 'name' ? a.title.localeCompare(b.title) :
      mode === 'price-asc' ? a.price - b.price :
      mode === 'price-desc' ? b.price - a.price :
      a.index - b.index
    );
    order.forEach(({ card }) => homeGrid.append(card));
  }
  homeSort?.addEventListener('change', sortHomeGames);
  sortHomeGames();
  const search = document.querySelector('#game-search');
  let selectedCategory = 'All Games';
  let selectedPlatform = 'All Platforms';

  function updateGames() {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    let count = 0;
    const normalizeTokens = value => (value || '').split(/\s+/).filter(Boolean).map(token => token.toLocaleLowerCase());
    cards.forEach(card => {
      const searchable = ((card.dataset.name || '') + ' ' + card.textContent).toLocaleLowerCase();
      const byName = !query || searchable.includes(query);
      const categories = normalizeTokens(card.dataset.categories);
      const platforms = normalizeTokens(card.dataset.platforms);
      const byCategory = selectedCategory === 'All Games' || categories.includes(selectedCategory.toLocaleLowerCase());
      const byPlatform = selectedPlatform === 'All Platforms' || platforms.includes(selectedPlatform.toLocaleLowerCase());
      const visible = byName && byCategory && byPlatform;
      card.hidden = !visible;
      card.classList.toggle('filter-hidden', !visible);
      if (visible) count++;
    });
    const none = document.querySelector('#no-games');
    if (none) none.classList.toggle('hidden', count > 0);
  }

  document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('is-active', item === button));
      updateGames();
    });
  });
  document.querySelectorAll('[data-platform]').forEach(button => {
    button.addEventListener('click', () => {
      selectedPlatform = button.dataset.platform;
      document.querySelectorAll('[data-platform]').forEach(item => item.classList.toggle('is-active', item === button));
      updateGames();
    });
  });
  search?.addEventListener('input', updateGames);
  document.querySelector('#search-form')?.addEventListener('submit', event => {
    event.preventDefault();
    updateGames();
    document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.querySelector('#view-all')?.addEventListener('click', () => {
    selectedCategory = 'All Games';
    selectedPlatform = 'All Platforms';
    if (search) search.value = '';
    document.querySelectorAll('[data-category],[data-platform]').forEach(button => {
      button.classList.toggle('is-active', button.dataset.category === 'All Games' || button.dataset.platform === 'All Platforms');
    });
    updateGames();
  });
  updateGames();
})();
