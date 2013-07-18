AUI().use(
  'aui-sortable',
  function(A) {
    new A.Sortable(
    {
      nodes: '#vertical li',
      constrain: {
      stickY: true
      }
    }
    );
  }
);