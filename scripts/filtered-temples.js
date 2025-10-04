
  document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedP = document.getElementById('lastModified');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear() + ' ';
    if (lastModifiedP) lastModifiedP.textContent = 'Last Modified: ' + document.lastModified;
  });

  const mainnav = document.querySelector('.navigation')
  const hambutton = document.querySelector('#menu');


  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  });

 const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
 {
    templeName: "Queretaro Mexico",
    location: "Queretaro, Queretaro, Mexico",
    dedicated: "2023, January, 7",
    area: 27500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/queretaro-mexico-temple/queretaro-mexico-temple-23845.jpg"
  },

   {
    templeName: "Ciudad Juarez Mexico",
    location: "Cuidad Juarez, Chihuahua, Mexico",
    dedicated: "1999, January, 9",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/ciudad-juarez-mexico-temple/ciudad-juarez-mexico-temple-20545.jpg"
  },

   {
    templeName: "Guadalajara Mexico",
    location: "Zapopan, Jalisco, Mexico",
    dedicated: "2001, April, 29",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guadalajara-mexico-temple/guadalajara-mexico-temple-17313.jpg"
  }];

  createTempleCarsd();
  function createTempleCarsd() {
  temples.forEach(temple => {
    let card= document.createElement('section');
    let name=  document.createElement('h3');
    let location= document.createElement('p');
    let dedication= document.createElement('p');
    let area = document.createElement('p');
    let figure= document.createElement('figure');
    let img= document.createElement('img');

    name.textContent= temple.templeName;
    location.innerHTML=`<span class="Label">Location:</span> ${temple.location}`;
    dedication.innerHTML=`<span class="Label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML=`<span class="Label">Area:</span> ${temple.area} sq ft`;
    card.setAttribute('class', 'temple-card');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `Image of the ${temple.templeName}`);
    img.setAttribute('loading', 'lazy');
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(figure);
    figure.appendChild(img);
    document.querySelector('.temple-gallery').appendChild(card);
  })};

