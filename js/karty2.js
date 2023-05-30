function generateProductCardsForPage(items) {
    const container = document.querySelector('.products-container');
    const sortButton = document.querySelector('#sortButton');
    const filterButton = document.getElementById('filterButton');
    const categorySelect = document.getElementById('categorySelect');
    const favouritesContainer = document.getElementById('.favouritesContainer');

    // Pętla generująca karty produktów
    for (let i = 0; i < items.length; i++) {
      const product = items[i];
  
      // Tworzenie elementów karty produktu
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.setAttribute('data-category', product.kategoria);

      const productImage = document.createElement('div');
      productImage.classList.add('product-image');
  
      const productThumb = document.createElement('img');
      productThumb.classList.add('product-thumb');
      productThumb.src = product.image; // Ustawienie ścieżki do obrazka z bazy danych
  
      const cardButton = document.createElement('button');
      cardButton.classList.add('card-btn');
      cardButton.textContent = 'add to favourites';
      
      cardButton.addEventListener('click', function() {
        // Przeniesienie obiektu do diva ulubionych
        favouritesContainer.appendChild(card);
      });
        
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
  
      const productShortDes = document.createElement('p');
      productShortDes.classList.add('product-short-des');
      productShortDes.textContent = product.opis; // Ustawienie opisu produktu z bazy danych
  
      const nazwa = document.createElement('h');
      nazwa.classList.add('product-brand');
      nazwa.textContent = product.nazwa;

      const kategoria = document.createElement('h4');
      kategoria.classList.add('data-category');
      kategoria.textContent = product.kategoria;
      kategoria.style.display = 'none';
  
      const cena = document.createElement('span');
      cena.classList.add('cena');
      cena.textContent = product.cena + ' zł'; // Ustawienie ceny produktu z bazy danych
  
      //Dodawanie elementów do karty produktu
      productImage.appendChild(productThumb);
      productImage.appendChild(cardButton);
  
      productInfo.appendChild(nazwa);
      productInfo.appendChild(productShortDes);
      productInfo.appendChild(cena);
      productInfo.appendChild(kategoria);
  
      card.appendChild(productImage);
      card.appendChild(productInfo);
  
      container.appendChild(card);

      
  

    }
    sortButton.addEventListener('click', function() {
      // Sortowanie elementów alfabetycznie po nazwie
      const sortedItems = items.sort((a, b) => a.nazwa.localeCompare(b.nazwa));
  
      // Usunięcie istniejących kart produktów
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
  
      // Generowanie kart produktów dla posortowanych elementów
      generateProductCardsForPage(sortedItems);
    });
    filterButton.addEventListener('click', function() {
      const selectedCategory = categorySelect.value; // Pobierz wybraną kategorię z listy rozwijanej
    
      // Pobierz wszystkie karty produktów
      const productCards = document.querySelectorAll('.product-card');
    
      // Iteruj przez wszystkie karty produktów i sprawdź, czy należą do wybranej kategorii
      for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const productCategory = card.getAttribute('data-category');
    
        // Sprawdź, czy wybrano wszystkie kategorie lub czy kategoria produktu zgadza się z wybraną kategorią
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
          // Pokaż karty produktów, które należą do wybranej kategorii lub wszystkie kategorie
          card.style.display = 'block';
        } else {
          // Ukryj karty produktów, które nie należą do wybranej kategorii
          card.style.display = 'none';
        }
      }
    });
  }
  
  // Wywołanie funkcji generującej karty produktów
  
  
  fetch('../../items.json')
    .then(response => response.json())
    .then(data => {
      // Tutaj możesz wykorzystać dane z pliku JSON
      console.log(data); // Wyświetlenie danych w konsoli
  
      generateProductCardsForPage(data);
    })
    .catch(error => {
      console.error('Błąd podczas pobierania danych:', error);
    });
