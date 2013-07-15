AUI().ready('aui-color-picker-grid-plugin', function(A) {

  var limitedColors = [
        '000000', '993300', '333300', '003300', '003366', '000080', '333399', '333333',
        '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080',
        'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '969696',
        'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0',
        'FF99CC', 'FFCC99', 'FFFF99', 'CCFFCC', 'CCFFFF', '99CCFF', 'CC99FF', 'FFFFFF'
    ];

  colorPicker = new A.ColorPicker().plug(A.Plugin.ColorPickerGrid,
    {
      colors: limitedColors,
    }).render('#color-picker');

  var toggleWebsafe = A.one('#toggleWebsafe');
  var colorBox = A.one('#colorBox');
  var quote = A.one('#quote')

  toggleWebsafe.on('click', function(event) {
    var colors;

    if (event.currentTarget.attr('checked')) {
      colors = 'websafe';
    }
    else {
      colors = limitedColors;
    }

    colorPicker.cpgrid.set('colors', colors);
  });

  colorPicker.on('colorChange', function(event) {
    var rgb = colorPicker.get('rgb');

    colorBox.setStyle('backgroundColor', 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')');

    quote.setStyle('color', 'rgb(' + [rgb.r, rgb.g, rgb.b].join(',') + ')');
  });

});