// Funkcja generująca karty produktów


function generateProductCards(items) {
  const container = document.querySelector('.product-container');

  // Pętla generująca karty produktów
  for (let i = 0; i < items.length; i++) {
    const product = items[i];

    // Tworzenie elementów karty produktu
    const card = document.createElement('div');
    card.classList.add('product-card');

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');

    const productThumb = document.createElement('img');
    productThumb.classList.add('product-thumb');
    productThumb.src = product.image; // Ustawienie ścieżki do obrazka z bazy danych

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-btn');
    cardButton.textContent = 'add to favourites';

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productShortDes = document.createElement('p');
    productShortDes.classList.add('product-short-des');
    productShortDes.textContent = product.opis; // Ustawienie opisu produktu z bazy danych

    const nazwa = document.createElement('h');
    nazwa.classList.add('product-brand');
    nazwa.textContent = product.nazwa;

    const cena = document.createElement('span');
    cena.classList.add('cena');
    cena.textContent = product.cena + ' zł'; // Ustawienie ceny produktu z bazy danych

    //Dodawanie elementów do karty produktu
    productImage.appendChild(productThumb);
    productImage.appendChild(cardButton);

    productInfo.appendChild(nazwa);
    productInfo.appendChild(productShortDes);
    productInfo.appendChild(cena);

    card.appendChild(productImage);
    card.appendChild(productInfo);

    container.appendChild(card);
  }
}

// Wywołanie funkcji generującej karty produktów


fetch('../../items.json')
  .then(response => response.json())
  .then(data => {
    // Tutaj możesz wykorzystać dane z pliku JSON
    console.log(data); // Wyświetlenie danych w konsoli

    generateProductCards(data);
  })
  .catch(error => {
    console.error('Błąd podczas pobierania danych:', error);
  });
