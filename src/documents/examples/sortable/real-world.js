AUI().ready(
	'aui-sortable',
	function(A) {
	new A.Sortable(
			{
				dd: {
					handles: ['.drag-handle']
				},
				nodes: '#sortable li',
			}
		);
	}
);