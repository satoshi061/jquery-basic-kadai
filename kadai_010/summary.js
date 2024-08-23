$(function() {
  $('#change-color').on('click', () => {
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', () => {
    $('#target').text('Hello!');
  });

  $('#fade-out').on('click', () => {
    $('#target').css('opacity', 0);
  });

  $('#fade-in').on('click', () => {
    $('#target').css('opacity', 1);
  });
});