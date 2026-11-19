/* Product detail data and gallery for Aqua Arcade. Cart actions are handled by shared script.js. */
(()=>{
const games = [
  {
    "slug": "stardew-valley",
    "name": "Stardew Valley",
    "image": "game-farm.jpg",
    "price": "29,99 zł",
    "priceValue": 29.99,
    "categories": [
      "Simulation",
      "Indie"
    ],
    "platforms": [
      "PC"
    ],
    "description": "Rozwijaj własną farmę, poznawaj mieszkańców doliny i odkrywaj sekrety spokojnego, pikselowego świata.",
    "about": "Stardew Valley to urocza gra symulacyjna, w której przejmujesz zaniedbaną farmę i stopniowo zamieniasz ją w tętniące życiem gospodarstwo. Uprawiaj rośliny, hoduj zwierzęta, nawiązuj przyjaźnie, bierz udział w wydarzeniach w miasteczku i odkrywaj ukryte sekrety doliny.",
    "features": [
      "Uprawa i rozwój farmy",
      "Relacje z mieszkańcami",
      "Eksploracja i odkrywanie tajemnic",
      "Relaksująca, otwarta rozgrywka"
    ],
    "release": "26 lutego 2016",
    "developer": "ConcernedApe",
    "genre": "Simulation, Indie",
    "mode": "Single-player",
    "specPlatforms": "PC (Windows, macOS, Linux)"
  },
  {
    "slug": "the-sims-4",
    "name": "The Sims 4",
    "image": "game-life.jpg",
    "price": "199,90 zł",
    "priceValue": 199.9,
    "categories": [
      "Simulation"
    ],
    "platforms": [
      "PC"
    ],
    "description": "Twórz Simów, buduj domy i kieruj codziennym życiem bohaterów w rozbudowanym symulatorze życia.",
    "about": "Twórz własnych bohaterów, projektuj ich domy i opowiadaj historie, które rozwijają się dzięki codziennym wyborom. Kształtuj relacje, realizuj marzenia i urządź świat po swojemu.",
    "features": [
      "Tworzenie postaci",
      "Budowanie i urządzanie domów",
      "Relacje i codzienne historie",
      "Swoboda kreatywnej rozgrywki"
    ],
    "release": "2 września 2014",
    "developer": "Maxis",
    "genre": "Simulation",
    "mode": "Single-player",
    "specPlatforms": "PC"
  },
  {
    "slug": "subnautica",
    "name": "Subnautica",
    "image": "game-ocean.jpg",
    "price": "109,99 zł",
    "priceValue": 109.99,
    "categories": [
      "Action",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "description": "Eksploruj obcy ocean, odkrywaj podwodne ekosystemy i walcz o przetrwanie w głębinach.",
    "about": "Odkrywaj rozległy podwodny świat obcej planety. Zbieraj surowce, konstruuj sprzęt, poznawaj niezwykłe ekosystemy i schodź coraz głębiej, aby odkryć tajemnice oceanu.",
    "features": [
      "Eksploracja podwodnego świata",
      "Odkrywanie ekosystemów",
      "Zbieranie surowców i crafting",
      "Przetrwanie w głębinach"
    ],
    "release": "23 stycznia 2018",
    "developer": "Unknown Worlds Entertainment",
    "genre": "Action, Adventure",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Xbox"
  },
  {
    "slug": "terraria",
    "name": "Terraria",
    "image": "game-sandbox.jpg",
    "price": "37,99 zł",
    "priceValue": 37.99,
    "categories": [
      "Adventure",
      "Indie",
      "Retro Classics"
    ],
    "platforms": [
      "PC",
      "Nintendo"
    ],
    "description": "Kop, buduj, walcz i odkrywaj proceduralnie generowany świat pełen tajemnic i skarbów.",
    "about": "Wyrusz do świata, w którym możesz kopać, budować, tworzyć przedmioty i walczyć z niezwykłymi przeciwnikami. Każda wyprawa może prowadzić do nowych odkryć i skarbów.",
    "features": [
      "Odkrywanie proceduralnego świata",
      "Budowanie i crafting",
      "Walka z przeciwnikami i bossami",
      "Swoboda eksploracji"
    ],
    "release": "16 maja 2011",
    "developer": "Re-Logic",
    "genre": "Adventure, Indie",
    "mode": "Single-player / Multiplayer",
    "specPlatforms": "PC, Nintendo Switch"
  },
  {
    "slug": "aqua-rush-ocean-circuit",
    "name": "Aqua Rush: Ocean Circuit",
    "image": "game-aqua-rush.jpg",
    "price": "89,99 zł",
    "priceValue": 89.99,
    "categories": [
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "description": "Futurystyczne wyścigi na wodzie. Ścigaj się przez tropikalne oceany, podwodne tunele i wodne metropolie.",
    "about": "Pędź przez futurystyczne trasy nad i pod powierzchnią oceanu. Łącz precyzję, prędkość i odwagę na torach otoczonych tropikalnymi wyspami oraz neonowymi metropoliami.",
    "features": [
      "Futurystyczne wyścigi wodne",
      "Tropikalne trasy i podwodne tunele",
      "Dynamiczna rywalizacja",
      "Neonowy świat przyszłości"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Action",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Xbox"
  },
  {
    "slug": "everdream-the-floating-isles",
    "name": "Everdream: The Floating Isles",
    "image": "game-everdream.jpg",
    "price": "119,99 zł",
    "priceValue": 119.99,
    "categories": [
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Nintendo"
    ],
    "description": "Odkrywaj unoszące się wyspy, starożytne ruiny i tajemnice zapomnianej cywilizacji.",
    "about": "Wyrusz w podróż przez archipelag wysp unoszących się nad chmurami. Odkrywaj ruiny, poznawaj sekrety dawnej cywilizacji i przemierzaj malownicze, fantastyczne krajobrazy.",
    "features": [
      "Eksploracja latających wysp",
      "Starożytne ruiny",
      "Tajemnice zapomnianej cywilizacji",
      "Fantastyczne krajobrazy"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Adventure",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Nintendo"
  },
  {
    "slug": "luminara-echoes-of-eden",
    "name": "Luminara: Echoes of Eden",
    "image": "game-luminara.jpg",
    "price": "149,99 zł",
    "priceValue": 149.99,
    "categories": [
      "RPG",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "description": "Rozbudowane RPG w magicznym świecie kryształowych lasów, starożytnych mocy i świetlistych miast.",
    "about": "Poznaj magiczny świat kryształowych lasów i świetlistych miast. Rozwijaj bohatera, odkrywaj starożytne moce i podążaj śladami tajemnic ukrytych w krainie Eden.",
    "features": [
      "Rozwój bohatera",
      "Kryształowe lasy",
      "Starożytne moce",
      "Świetliste miasta"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "RPG, Adventure",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Xbox"
  },
  {
    "slug": "pixel-quest-dx",
    "name": "Pixel Quest DX",
    "image": "game-pixel-quest-dx.jpg",
    "price": "24,99 zł",
    "priceValue": 24.99,
    "categories": [
      "Retro Classics",
      "Indie"
    ],
    "platforms": [
      "PC",
      "Nintendo"
    ],
    "description": "Klasyczna platformówka w nowoczesnym wydaniu. Skacz, zbieraj przedmioty i odkrywaj kolorowe światy pełne sekretów i bossów.",
    "about": "Kolorowa platformówka inspirowana klasycznymi grami. Przemierzaj kolejne poziomy, zbieraj przedmioty, odkrywaj ukryte przejścia i stawiaj czoła wymagającym bossom.",
    "features": [
      "Klasyczna platformówka",
      "Kolorowe światy",
      "Sekrety i znajdźki",
      "Starcia z bossami"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Retro Classics, Indie",
    "mode": "Single-player",
    "specPlatforms": "PC, Nintendo"
  },
  {
    "slug": "neon-drift-2003",
    "name": "Neon Drift 2003",
    "image": "game-neon-drift-2003.jpg",
    "price": "59,99 zł",
    "priceValue": 59.99,
    "categories": [
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "description": "Uliczne wyścigi w klimacie wczesnych lat 2000. Tunuj auta, zdobywaj reputację i ścigaj się w neonowych miastach.",
    "about": "Wskocz do świata nocnych ulicznych wyścigów. Personalizuj samochody, buduj reputację i rywalizuj na trasach rozświetlonych neonami, inspirowanych estetyką początku lat 2000.",
    "features": [
      "Uliczne wyścigi",
      "Personalizacja samochodów",
      "Neonowe miasta",
      "Budowanie reputacji"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Action",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Xbox"
  },
  {
    "slug": "oceanlife",
    "name": "OceanLife",
    "image": "game-oceanlife.jpg",
    "price": "44,99 zł",
    "priceValue": 44.99,
    "categories": [
      "Simulation",
      "Indie"
    ],
    "platforms": [
      "PC"
    ],
    "description": "Zanurz się w tętniącym życiem oceanie. Odkrywaj rafy, poznawaj gatunki i buduj własne podwodne sanktuarium.",
    "about": "Stwórz własne podwodne sanktuarium. Odkrywaj rafy koralowe, poznawaj morskie gatunki i dbaj o harmonijny rozwój swojego fragmentu oceanu.",
    "features": [
      "Odkrywanie raf",
      "Poznawanie morskich gatunków",
      "Budowanie sanktuarium",
      "Spokojna rozgrywka"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Simulation, Indie",
    "mode": "Single-player",
    "specPlatforms": "PC"
  },
  {
    "slug": "skyline-builders",
    "name": "Skyline Builders",
    "image": "game-skyline-builders.jpg",
    "price": "79,99 zł",
    "priceValue": 79.99,
    "categories": [
      "Strategy",
      "Simulation"
    ],
    "platforms": [
      "PC"
    ],
    "description": "Zaprojektuj nowoczesne, ekologiczne miasto przyszłości. Rozwijaj infrastrukturę, dbaj o mieszkańców i środowisko.",
    "about": "Zaprojektuj miasto przyszłości i rozwijaj je krok po kroku. Planuj infrastrukturę, odpowiadaj na potrzeby mieszkańców i szukaj równowagi między rozwojem a środowiskiem.",
    "features": [
      "Projektowanie miasta",
      "Rozwój infrastruktury",
      "Zarządzanie potrzebami mieszkańców",
      "Ekologiczne planowanie"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Strategy, Simulation",
    "mode": "Single-player",
    "specPlatforms": "PC"
  },
  {
    "slug": "starfall-chronicles",
    "name": "Starfall Chronicles",
    "image": "game-starfall-chronicles.jpg",
    "price": "139,99 zł",
    "priceValue": 139.99,
    "categories": [
      "RPG",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "PlayStation"
    ],
    "description": "Epicka przygoda RPG w kosmicznej odsłonie. Poznaj barwne postacie, rozwijaj drużynę i odkryj tajemnice galaktyki.",
    "about": "Wyrusz w kosmiczną przygodę RPG. Poznawaj niezwykłe postacie, rozwijaj drużynę i odkrywaj sekrety galaktyki podczas międzygwiezdnej podróży.",
    "features": [
      "Kosmiczna przygoda RPG",
      "Rozwój drużyny",
      "Barwne postacie",
      "Tajemnice galaktyki"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "RPG, Adventure",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation"
  },
  {
    "slug": "garden-tails",
    "name": "Garden Tails",
    "image": "game-garden-tails.jpg",
    "price": "37,99 zł",
    "priceValue": 37.99,
    "categories": [
      "Indie",
      "Simulation"
    ],
    "platforms": [
      "PC",
      "Nintendo"
    ],
    "description": "Urocza gra o opiece nad zwierzętami, uprawie ogrodu i budowaniu własnego, przytulnego domu.",
    "about": "Zadbaj o przytulny zakątek, opiekuj się zwierzętami i rozwijaj własny ogród. Spokojna rozgrywka pozwala tworzyć miejsce, do którego chce się wracać.",
    "features": [
      "Opieka nad zwierzętami",
      "Uprawa ogrodu",
      "Budowanie przytulnego domu",
      "Spokojna, kreatywna zabawa"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Indie, Simulation",
    "mode": "Single-player",
    "specPlatforms": "PC, Nintendo"
  },
  {
    "slug": "virtual-league-2006",
    "name": "Virtual League 2006",
    "image": "game-virtual-league-2006.jpg",
    "price": "49,99 zł",
    "priceValue": 49.99,
    "categories": [
      "Retro Classics",
      "Action"
    ],
    "platforms": [
      "PC",
      "PlayStation",
      "Xbox"
    ],
    "description": "Klasyczna gra sportowa w stylu lat 2000. Stwórz drużynę, weź udział w ligach i sięgnij po mistrzostwo.",
    "about": "Poczuj klimat sportowych gier z połowy lat 2000. Stwórz własną drużynę, rywalizuj w rozgrywkach ligowych i walcz o miejsce na szczycie.",
    "features": [
      "Tworzenie drużyny",
      "Rozgrywki ligowe",
      "Sportowa rywalizacja",
      "Nostalgiczny klimat 2000s"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Retro Classics, Action",
    "mode": "Single-player",
    "specPlatforms": "PC, PlayStation, Xbox"
  },
  {
    "slug": "mystic-islands",
    "name": "Mystic Islands",
    "image": "game-mystic-islands.jpg",
    "price": "89,99 zł",
    "priceValue": 89.99,
    "categories": [
      "Adventure",
      "Indie"
    ],
    "platforms": [
      "PC",
      "Xbox",
      "Nintendo"
    ],
    "description": "Przygodowa gra eksploracyjna o odkrywaniu tajemniczej wyspy, starożytnych ruin i zaginionej cywilizacji.",
    "about": "Odkrywaj tajemniczą wyspę, przemierzaj starożytne ruiny i szukaj śladów zaginionej cywilizacji. Każdy zakątek skrywa fragment większej historii.",
    "features": [
      "Eksploracja tajemniczej wyspy",
      "Starożytne ruiny",
      "Ślady zaginionej cywilizacji",
      "Odkrywanie sekretów"
    ],
    "release": "Informacja przykładowa",
    "developer": "Informacja przykładowa",
    "genre": "Adventure, Indie",
    "mode": "Single-player",
    "specPlatforms": "PC, Xbox, Nintendo"
  }
];
const slug=new URLSearchParams(location.search).get('game')||'stardew-valley';
const game=games.find(item=>item.slug===slug)||games[0];
const $=id=>document.getElementById(id);
const set=(id,value)=>{const el=$(id);if(el)el.textContent=value;};
document.title=game.name+' | Aqua Arcade';set('crumb-name',game.name);set('product-title',game.name);set('product-description',game.description);set('product-price',game.price);set('buy-platform',game.platforms.join(' · '));set('product-platform-line','🎮 '+game.platforms.join(' · '));set('product-about',game.about);set('detail-release',game.release);set('detail-developer',game.developer);set('detail-genre',game.genre);set('detail-mode',game.mode);set('detail-platforms',game.specPlatforms);set('product-quote',game.name+' — odkryj swój własny cyfrowy świat.');
$('product-add').dataset.name=game.name;
$('product-cover').src='assets/'+game.image;$('product-cover').alt='Okładka gry '+game.name;
$('product-tags').innerHTML=game.categories.map(c=>'<span class="aa-product-tag"></span>').join('');[...$('product-tags').children].forEach((el,i)=>el.textContent=game.categories[i]);
const featureIcons=['🍃','👥','⚒','💙'];$('product-features').innerHTML=game.features.map((f,i)=>'<div class="aa-feature"><span class="aa-feature-icon">'+featureIcons[i%featureIcons.length]+'</span><span></span></div>').join('');[...$('product-features').querySelectorAll('.aa-feature span:last-child')].forEach((el,i)=>el.textContent=game.features[i]);
const thumbs=$('product-thumbs');const gallery=[game.image];if(game.slug==='stardew-valley')gallery.push('blog.jpg','bg.jpg','hero.jpg');else gallery.push('bg.jpg','hero.jpg');gallery.slice(0,4).forEach((file,i)=>{const b=document.createElement('button');b.type='button';b.className=i===0?'active':'';b.setAttribute('aria-label','Pokaż grafikę '+(i+1));const img=document.createElement('img');img.src='assets/'+file;img.alt=game.name+' — grafika '+(i+1);b.append(img);b.addEventListener('click',()=>{$('product-cover').src='assets/'+file;thumbs.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));});thumbs.append(b);});
$('wishlist-button').addEventListener('click',e=>{const b=e.currentTarget;b.classList.toggle('is-saved');b.textContent=b.classList.contains('is-saved')?'♥ Added to wishlist':'♡ Add to wishlist';});
const coverWrap=document.querySelector('.aa-product-cover-wrap');
const lightbox=$('product-lightbox'),lightboxImage=$('lightbox-image'),lightboxCaption=$('lightbox-caption');
const closeLightbox=()=>{lightbox?.classList.remove('is-open');lightbox?.setAttribute('aria-hidden','true');document.body.classList.remove('aa-lightbox-active');};
const openLightbox=()=>{if(!lightbox||!lightboxImage)return;lightboxImage.src=$('product-cover').src;lightboxImage.alt=$('product-cover').alt;lightboxCaption.textContent=game.name;lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('aa-lightbox-active');$('lightbox-close')?.focus();};
coverWrap?.addEventListener('click',openLightbox);
coverWrap?.setAttribute('role','button');coverWrap?.setAttribute('tabindex','0');coverWrap?.setAttribute('aria-label','Powiększ okładkę gry '+game.name);
coverWrap?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox();}});
$('lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

})();
