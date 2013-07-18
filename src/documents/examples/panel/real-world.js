AUI().ready(
  'aui-panel', 'anim',
  function(A) {
    var exampleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    var container = new A.Panel(
      {
        collapsible: true,
        headerContent: 'Panel 1',
      }
    ).render('#myPanel');

    window.child1 = new A.Panel(
      {
        boundingBox: '#close',
        collapsible: true,
        headerContent: 'Child Panel 1',
        icons: [
          {
            icon: 'close',
            label: 'Close',
            id: 'close',
            handler: function(event) {
              var instance = this;

              if (confirm('Are you sure you want to close this panel?')) {
                new A.Anim(
                  {
                   node: child1.get('boundingBox'),
                    duration: 0.5,
                    to: {
                      opacity: 0
                    },
                    on: {
                      end: function(event) {
                        var instance = this;

                        child1.hide();
                      }
                    }
                  }
                ).run();
              }
            }
          }
        ],
        bodyContent: exampleText
      }
    ).render(container.bodyNode);
  }
);