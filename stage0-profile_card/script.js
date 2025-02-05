// Function to update the current UTC time
function updateUTCTime() {
  const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();
  const utcTime = now.toUTCString();
  currentTimeElement.textContent = `${utcTime}`;
}

// Update the UTC time immediately and every second
updateUTCTime();
setInterval(updateUTCTime, 1000);