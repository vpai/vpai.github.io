var header = document.querySelector('header');
var postHeader = document.querySelector('.post--title');
var origOffsetY = postHeader.offsetTop + postHeader.offsetHeight;

function onScroll(e) {
  window.scrollY > origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);
