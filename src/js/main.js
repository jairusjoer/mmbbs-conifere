// Highlight current page in navigation
var url = window.location.pathname;
var nav = document
  .getElementsByTagName('nav')[0]
  .getElementsByClassName('navigation-menu-item');
for (const link of nav) {
  if (url == link.pathname) {
    link.classList.add('current');
    // Force ignore identical pathnames
    break;
  }
}

// Slider for /werkstatt/
if (url == '/werkstatt/') {
  new Glide('.glide', {
    type: 'carousel',
    gap: 0,
  }).mount();
}

// Footer state indicator
var date = new Date();
var hour = date.getHours();
var time;
var item = document.getElementsByClassName('footer-item-state')[0];

if (hour >= 10 && hour < 18) {
  time = 'open';
  item.classList.add(time);
  item.innerText = 'Geöffnet';
} else if (hour < 10 || hour >= 18) {
  time = 'close';
  item.classList.add(time);
  item.innerText = 'Geschlossen';
}
