// Footer Information
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').textContent = lastModified;

// Wind Chill Calculation
// Static values
const temperature = 5; // Celsius
const windSpeed = 10; // km/h

// Function to calculate wind chill (Metric)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Check conditions before calculating
if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = `${windChillValue.toFixed(1)}°C`;
} else {
    document.getElementById('wind-chill').textContent = "N/A";
}