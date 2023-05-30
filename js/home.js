const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Dane produktów
const products = [
    {
      brand: 'item 1',
      shortDes: 'a short desc...',
      price: '$20',
      actualPrice: '$40',
      discount: '50% off',
      image: 'img/card1.png',
    },
    {
      brand: 'item 2',
      shortDes: 'a short desc...',
      price: '$30',
      actualPrice: '$60',
      discount: '50% off',
      image: 'img/card1.png',
    },
    {
      brand: 'item 3',
      shortDes: 'a short desc...',
      price: '$20',
      actualPrice: '$40',
      discount: '50% off',
      image: 'img/card1.png',
    },
    {
      brand: 'item 4',
      shortDes: 'a short desc...',
      price: '$30',
      actualPrice: '$60',
      discount: '50% off',
      image: 'img/card1.png',
    },
  ];