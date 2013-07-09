AUI().use('node', 'transition', 'aui-carousel', function (A) {

  A.one('.btn').on('click', function() {
    this.transition({ width: '400px' });
  });

  new A.Carousel({
    contentBox: '#myCarousel',
    intervalTime: 2,
    width: 700,
    height: 250
  }).render();

});