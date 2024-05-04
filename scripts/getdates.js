
const lastModifiedDate = new Date(document.lastModified);

const formattedDate = lastModifiedDate.toDateString();

document.getElementById('lastModified').textContent = `Last modified: ${formattedDate}`;