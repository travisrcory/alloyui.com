AUI().use(
  'aui-drawing',
  function(A) {
  var drawing = A.Drawing.create('#myDrawing');
  var easingx = A.one('#easingx');
  var easingy = A.one('#easingy');
  var run = A.one('#run');

  var set = drawing.createSet(
    drawing.circle(300, 200, 8),
    drawing.circle(200, 100, 8),
    drawing.circle(100, 200, 8),
    drawing.circle(200, 300, 8),
    drawing.circle(200, 200, 8)
  ).attr(
    {
      stroke: 'none',
      fill: '#868686'
    }
  );

  var c = drawing.circle(200, 200, 10).attr(
    {
      stroke: '#4d4d4d',
      'stroke-width': 4
    }
  );

  var fade = function (id) {
    return function () {
      set.item(id).attr(
        {
          fill: '#aaa',
          r: 12
        }
      ).animate(
        {
          fill: '#868686',
          r: 8
        },
        500
      );
    };
  };

  run.on(
    'click',
    function(event) {
      var ex = easingx.val();
      var ey = easingy.val();

      c.stop().animate(
        {
          '20%': {cy: 200, easing: ey, callback: fade(0)},
          '40%': {cy: 100, easing: ey, callback: fade(1)},
          '60%': {cy: 200, easing: ey, callback: fade(2)},
          '80%': {cy: 300, easing: ey, callback: fade(3)},
          '100%': {cy: 200, easing: ey, callback: fade(4)}
        },
      5000).animate(
        {
          '20%': {cx: 300, easing: ex},
          '40%': {cx: 200, easing: ex},
          '60%': {cx: 100, easing: ex},
          '80%': {cx: 200, easing: ex},
          '100%': {cx: 200, easing: ex}
        },
      5000);
    }
  );
});