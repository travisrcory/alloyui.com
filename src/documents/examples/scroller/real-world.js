AUI().use(
  'aui-scroller', 'anim-node-plugin',
  function(A) {
   var component = new A.Scroller({
      contentBox: '#scroller-content',
      height: 45,
      orientation: 'horizontal',
      width: 640
    }).render();
  }
);