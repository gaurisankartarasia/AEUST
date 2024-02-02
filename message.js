/************Message*********** */
document.addEventListener('DOMContentLoaded', function () {
    const newPopup = document.getElementById('new-popup');
    setTimeout(() => {
      newPopup.style.display = 'block';
      newPopup.style.top = '50px';
      newPopup.style.left = '50px';
    }, 1000);
  });
  
  function closeNewPopup() {
    const newPopup = document.getElementById('new-popup');
    newPopup.style.top = '-100px';
    newPopup.style.left = '-100px';
    setTimeout(() => {
      newPopup.style.display = 'none';
    }, 500);
  }
  