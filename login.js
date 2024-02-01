function goToLoginPage() {
    window.location.href = "login.html";
  }

  // Check if there is a successful login parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const loginSuccess = urlParams.get('loginSuccess');

  if (loginSuccess === 'true') {
    handleSuccessfulLogin();
  }

  function handleSuccessfulLogin() {
// Show a pop-up message
const popupMessage = document.createElement('div');
popupMessage.innerHTML = "<p>Logged in successfully!</p>";
popupMessage.style.backgroundColor = '#4caf50';
popupMessage.style.color = '#fff';
popupMessage.style.padding = '10px';
popupMessage.style.borderRadius = '5px';
popupMessage.style.position = 'fixed';
popupMessage.style.top = '85%';
popupMessage.style.left = '50%';
popupMessage.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(popupMessage);

// Close the pop-up after 3 seconds (adjust as needed)
setTimeout (function() {
  document.body.removeChild(popupMessage);
}, 3000);
  }