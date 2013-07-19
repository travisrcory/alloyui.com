AUI().use(
	'aui-overlay-context-panel', 'aui-overlay-manager',
	function(A) {
		var contextPanel1 = new A.OverlayContextPanel(
				{	
					anim: true,
					bodyContent: 'Type your name: <input type="text" value="Name"/> <button>Send</button>',
					boundingBox: '#question1',
					cancellableHide: true,
					hideDelay: 1000,
					hideOnDocumentClick: false,
					trigger: '#name',
				}).render();

		var alignContextPanel = function(contextPanel) {
			var overlayPoint = A.one('#overlayPoint').val();
			var targetPoint = A.one('#targetPoint').val();

			contextPanel.align('#name', [ overlayPoint, targetPoint ]);
		};

		A.on('click', function() { alignContextPanel(contextPanel1); }, '#overlayPoint');
		A.on('click', function() { alignContextPanel(contextPanel1); }, '#targetPoint');
		A.on('keydown', function() { alignContextPanel(contextPanel1); }, '#overlayPoint');
		A.on('keydown', function() { alignContextPanel(contextPanel1); }, '#targetPoint');


		alignContextPanel(contextPanel1);

		contextPanel1.toggle();
	}
);