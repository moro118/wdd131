
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