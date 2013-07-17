AUI().use(
  'aui-scroller', 'anim-node-plugin',
  function(A) {
   var component = new A.Scroller({
      contentBox: '#scroller-content',
      height: 50,
      orientation: 'horizontal',
      width: 960
    }).render();
  }
);