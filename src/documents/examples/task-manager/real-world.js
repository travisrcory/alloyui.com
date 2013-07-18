AUI().ready('aui-task-manager', 'aui-base', function(A) {

  var numTimersNode = A.one('#numTimers');
  var taskLengthNode = A.one('#numTimers');
  var infoBoxNode = A.one('#infoBox');

  function getNumTimers() {
    return parseInt(numTimersNode.val());
  }

  function getTaskLength() {
    return parseInt(taskLengthNode.val());
  }

  var ids = [];

  function stopTasks() {
    infoBoxNode.removeClass('running-task-manager').removeClass('running-no-task-manager');

    A.Array.each(
      ids,
      function(item, index, collection) {
        A.clearInterval(item);
        window.clearInterval(item);
      }
    );

    ids = [];
  }

  var now = A.Lang.now;

  var counter = 0;
  var counterNode = A.one('#counter');

  var incrementCounter = function() {
    counterNode.html(counter++);
  };

  function createTest(hostObject) {
    return function() {
      var numTimers = getNumTimers();
      var taskLength = getTaskLength();

      for (var i = 0; i < numTimers; i++) {
        ids.push(
          hostObject.setInterval(
            function() {
              var start = now();

              while (now() - start < taskLength) {
                incrementCounter();
              }
            },
            50
          )
        );
      }
    }
  }

  var withTaskManager = createTest(A);
  var withoutTaskManager = createTest(window);

  var withTaskManagerNode = A.one('#withTaskManager');
  var withoutTaskManagerNode = A.one('#withoutTaskManager');
  var stopTasksNode = A.one('#stopTasks');

  withTaskManagerNode.on(
    'click',
    function(event) {
      event.preventDefault();

      stopTasks();
      withTaskManager();

      infoBoxNode.addClass('running-task-manager');
    }
  );

  withoutTaskManagerNode.on(
    'click',
    function(event) {
      event.preventDefault();

      stopTasks();
      withoutTaskManager();

      infoBoxNode.addClass('running-no-task-manager');
    }
  );

  stopTasksNode.on(
    'click',
    function(event) {
      event.preventDefault();

      stopTasks();
    }
  );

  // Start animation (simple animation done to show direct performance impact on setInterval)
  var animationBox =  A.one('#animationBox').getDOM();
  var animation = A.one('#animation').getDOM();

  var animationBoxWidth = animationBox.offsetWidth;
  var animationWidth = animation.offsetWidth;
  var move = animationWidth / 100;

  var left = 0;
  var reverse = false;

  setInterval(function() {
    var maxLeft = animationWidth - animationBoxWidth;

    left += reverse ? -move : move;

    left = Math.max(0, Math.min(maxLeft, left));

    if (left == maxLeft) {
      reverse = true;
    }
    else if (left == 0) {
      reverse = false;
    }

    animationBox.style.left = left + 'px';
  }, 15);
});