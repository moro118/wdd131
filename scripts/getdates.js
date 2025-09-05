// Set copyright year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
	yearSpan.textContent = new Date().getFullYear() + ' ';
}

// Set last modified date
const lastMod = document.getElementById('lastModified');
if (lastMod) {
	lastMod.textContent = 'Last Modified: ' + document.lastModified;
}
