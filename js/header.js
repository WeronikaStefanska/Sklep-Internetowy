
// Tworzenie headera
const header = document.createElement('header');
header.classList.add('hero-section');

const div = document.createElement('div');
div.classList.add('content');

const img = document.createElement('img');
img.src = 'img/logo.png';
img.classList.add('logo');
img.alt = '';

const p = document.createElement('p');
p.classList.add('sub-heading');
p.textContent = 'collection of all time';

// Dodawanie elementów do drzewa dokumentu
div.appendChild(img);
div.appendChild(p);
header.appendChild(div);

// Pobranie referencji do elementu, do którego chcesz wstawić nagłówek
const container = document.getElementById('headerContainer');

// Dodawanie nagłówka do kontenera
container.appendChild(header);


