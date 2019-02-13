// Make menu sticky for blog posts.
var header = document.querySelector('header');
var postHeader = document.querySelector('.post--title');

if (postHeader) {
  var origOffsetY = postHeader.offsetTop + postHeader.offsetHeight;
}

function onScroll(e) {
  window.scrollY > origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);

// Don't animate menu if the referrer is the current site.
if (document.referrer.includes("varunpai.com")) {
  var menuItems = document.querySelectorAll('.fade-in')

  menuItems.forEach(function(menuItem) {
    menuItem.style.webkitAnimationPlayState = "paused";
    menuItem.style.opacity = 1;
  });
}
