const locationItems = document.querySelectorAll('.location-item');

locationItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.overlay').style.opacity = '1';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.overlay').style.opacity = '0';
  });
});