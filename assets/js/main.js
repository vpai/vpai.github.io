$(window).load(function() {
  const pswpElement = document.querySelectorAll('.pswp')[0];
  const $thumbnails = $('.thumbnail');

  var items = $thumbnails.toArray().map(function(thumbnail) {
    return {
      src: thumbnail.src,
      w: thumbnail.naturalWidth,
      h: thumbnail.naturalHeight,
    }
  });

  $thumbnails.each(function(index, item) {
    $(this).click(function() {
      var options = { index: index };
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    });
  });
});
