var elsToggleButton = document.querySelectorAll('.directors__button');
elsToggleButton.forEach(function(button){
  button.addEventListener('click', function(){
    button.closest('.directors__box').classList.toggle('team-member__card--rotated');
  });
});