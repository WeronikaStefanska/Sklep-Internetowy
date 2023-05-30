// Kod tworzacy pasek nawigacji stronki :)

// Utworzenie elementu nav
const nav = document.createElement('nav');
// Dodanie klas
nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'navbar-style');

// Utworzenie diva dla elementow 
const containerDiv = document.createElement('div');
// Dodanie klas
containerDiv.classList.add('container', 'px-4');


// Element <a> przekierowujacy do strony glownej
const brandLink = document.createElement('a');
brandLink.classList.add('navbar-brand');
brandLink.href = '/';

// Element przechowujacy nazwe
const brandText = document.createElement('span');
brandText.classList.add('navbar-brand-text');
brandText.textContent = 'AllShop';

// Polaczenie przekierowania z logo
brandLink.appendChild(brandText);

// Przycisk rozwijania paska nawigaci
const toggleButton = document.createElement('button');
toggleButton.classList.add('navbar-toggler');
// Typ - przycisk
toggleButton.type = 'button';
// Typ - zwijanie i rozwijanie sekcji
toggleButton.setAttribute('data-bs-toggle', 'collapse');
toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
// Domyslnie zwiniety
toggleButton.setAttribute('aria-expanded', 'false');
toggleButton.setAttribute('aria-label', 'Toggle navigation');

// Ikonka przycisku - trzy poziome paski
const togglerIcon = document.createElement('span');
togglerIcon.classList.add('navbar-toggler-icon');

toggleButton.appendChild(togglerIcon);


const collapseDiv = document.createElement('div');
collapseDiv.classList.add('collapse', 'navbar-collapse');
collapseDiv.id = 'navbarSupportedContent';

const navList = document.createElement('ul');
navList.classList.add('navbar-nav', 'ms-auto', 'mb-2', 'mb-lg-0');

const navItems = [
  { text: 'Home', href: 'index.html' },
  { text: 'Products', href: 'products.html' },
  { text: 'Favourites', href: '', modalTarget: 'exampleModal' },
  { text: 'Basket', href: 'basket.html' },
  { text: 'Contact Us', href: 'contact.html' },
];

navItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');

  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = item.href;
  link.textContent = item.text;

  if (item.modalTarget) {
    link.setAttribute('data-bs-toggle', 'modal');
    link.setAttribute('data-bs-target', `#${item.modalTarget}`);
  }

  listItem.appendChild(link);
  navList.appendChild(listItem);
});

collapseDiv.appendChild(navList);
containerDiv.appendChild(brandLink);
containerDiv.appendChild(toggleButton);
containerDiv.appendChild(collapseDiv);
nav.appendChild(containerDiv);

// Wstawienie nawigacji do elementu o id="navbarContainer" na stronie
const navbarContainer = document.getElementById('navbarContainer');
navbarContainer.appendChild(nav);
