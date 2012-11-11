Mast.routes.index = function(query,page) {
				
	// Empty container
	$(".sandbox").empty();
	
	// Create a component
	leaderBoard = new Mast.components.LeaderBoard({
		outlet:'.sandbox'
	});
}