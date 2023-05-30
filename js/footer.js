const footer = document.createElement('footer');
footer.classList.add('bg-light', 'text-center');

const containerf = document.createElement('div');
containerf.classList.add('container', 'p-4');

const socialSection = document.createElement('section');
socialSection.classList.add('mb-4');

// Tworzenie przycisków dla mediów społecznościowych
const socialMediaUrls = [
  { name: 'Facebook', url: 'https://facebook.com', color: '#3b5998', icon: 'fa-brands fa-facebook-f' },
  { name: 'Twitter', url: 'https://twitter.com', color: '#55acee', icon: 'fab fa-twitter' },
  { name: 'Google', url: 'https://google.com', color: '#dd4b39', icon: 'fab fa-google' },
  { name: 'Instagram', url: 'https://Instagram.com', color: '#ac2bac', icon: 'fab fa-instagram' },
  { name: 'Github', url: 'https://github.com', color: '#333333', icon: 'fab fa-github' }
];

socialMediaUrls.forEach(socialMedia => {
  const socialLink = document.createElement('a');
  socialLink.classList.add('btn', 'btn-primary', 'btn-floating', 'm-1');
  socialLink.style.backgroundColor = socialMedia.color;
  socialLink.href = socialMedia.url;
  socialLink.role = 'button';

  const socialIcon = document.createElement('i');
  socialIcon.className = 'fa ' + socialMedia.icon;
  socialLink.appendChild(socialIcon);

  socialSection.appendChild(socialLink);
});

const textSection = document.createElement('section');
textSection.classList.add('mb-4');

const textParagraph = document.createElement('p');
textParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.';

textSection.appendChild(textParagraph);

const textCenter = document.createElement('div');
textCenter.classList.add('text-center', 'p-3');
textCenter.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

const copyrightText = document.createTextNode('© 2023 Copyright:');
const copyrightLink = document.createElement('a');
copyrightLink.classList.add('text-dark');
copyrightLink.href = 'https://google.com';
copyrightLink.textContent = 'XYZ';

textCenter.appendChild(copyrightText);
textCenter.appendChild(document.createTextNode(' '));
textCenter.appendChild(copyrightLink);

// Dodawanie elementów do drzewa dokumentu
containerf.appendChild(socialSection);
containerf.appendChild(textSection);
footer.appendChild(containerf);
footer.appendChild(textCenter);

// Pobieranie referencji do elementu, do którego chcesz wstawić stopkę
const footerContainer = document.getElementById('footerContainer');

// Dodawanie stopki do kontenera
footerContainer.appendChild(footer);
