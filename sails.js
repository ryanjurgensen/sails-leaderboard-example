// lift sails                                                                                                          
require('sails').lift({
	appName: "Sails Example",

	bootstrap: function() {

		// Populate leaderboard data
		_.each(['Claude Shannon', 'Carl Friedrich Gauss', 'Marie Curie', 'Ada Lovelace', 'Grace Hopper', 'Nikola Tesla'], function(title, index) {
			Leader.findOrCreate({
				title: title,
				votes: 0
			}, ['title'], function() {});
		});
	},

	appPath: __dirname,

	port: 5010,

	appEnvironment: 'development',

	datasource: require("./config").datasource,

	rigging: true

	// To make the server use SSL (https), specify a key and cert string
	// ssl: {
		// key: fs.readFileSync('ssl/private.key.pem'),
		// cert: fs.readFileSync('ssl/combined.crt')
	// }
});