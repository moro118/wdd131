const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];


function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    if (!productNameSelect) return;
    const placeholder = productNameSelect.querySelector('option[disabled][selected]') || productNameSelect.querySelector('option[disabled]');
    productNameSelect.innerHTML = '';
    if (placeholder) productNameSelect.appendChild(placeholder);

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}


function updateFooter() {
    const yearEl = document.getElementById('currentyear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const lmEl = document.getElementById('lastmodified');
    if (lmEl) lmEl.textContent = `Last Modified: ${document.lastModified}`;
}


function handleReviewCount() {
  const counterEl = document.getElementById('review-count');
  if (!counterEl) return;

  const params = new URLSearchParams(window.location.search);
  const isSubmission = params.has('productName') || params.has('rating') || params.has('installDate');

  if (isSubmission) {
    const next = Number(localStorage.getItem('reviewCount') || 0) + 1;
    localStorage.setItem('reviewCount', next);
  }

  counterEl.textContent = localStorage.getItem('reviewCount') || '0';
}

function fillReviewSummary() {
  const params = new URLSearchParams(window.location.search);
  if (!params.toString()) return; // no hay parámetros -> nada que mostrar

  // map id -> nombre del producto
  const productMap = products.reduce((m, p) => {
    m[p.id] = p.name;
    return m;
  }, {});

  const productId = params.get('productName') || '';
  const productName = productMap[productId] || productId || 'N/A';
  const rating = params.get('rating') || 'N/A';
  const installDate = params.get('installDate') || 'N/A';
  const comments = params.get('reviewText') || params.get('comments') || 'N/A';

  const setIf = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setIf('product-name', productName);
  setIf('rating', rating);
  setIf('install-date', installDate);
  setIf('comments', comments);
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    updateFooter();
    handleReviewCount();
    fillReviewSummary();
});