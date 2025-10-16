
const products = [
    {
      id: 'fc-1888',
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "Warp Equalizer",
      averagerating: 5.0
    }
];

// Function to populate product options in the select dropdown
function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}

// Function to update footer info
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastmodified').textContent = `Last Modified: ${lastModified}`;
}

// Event listener to run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    updateFooter();
});