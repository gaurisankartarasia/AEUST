$(document).ready(function(){
    // Set modal image source on click
    $('.gallery img').click(function(){
      var imgSrc = $(this).attr('src');
      $('#modalImage').attr('src', imgSrc);
    });

    // Clear modal image source on modal close
    $('#imageModal').on('hidden.bs.modal', function () {
      $('#modalImage').attr('src', '');
    });
  });

  /***************Pop-Up Message ***********/
  document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    setTimeout(() => {
      popup.style.display = 'block';
      popup.style.top = '50px';
      popup.style.left = '50px';
    }, 1000);
  });
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.top = '-100px';
    popup.style.left = '-100px';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  }
  function redirectFeedback() {
    // Redirect to your Google Form URL
    window.location.href = 'https://forms.gle/CQSzW5kjLc6Kk9KZ7';
  }
  
