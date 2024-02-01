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