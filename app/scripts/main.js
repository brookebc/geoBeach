$(function(){

	console.log('main.js loaded');
	beachmap.init();
	
});

var beachmap = {

	init: function() {
		this.initStyling();
		this.initEvents();
	},
	initEvents: function() {
		$('.findbeaches').on('click', '.beachme', this.addBeaches);

	},
	initStyling: function() {
		// this.addLayer(L.geoJson(beachPoints));
		// this.addBeaches(L.mapbox.featureLayer(beachLayer));


	},
	addBeaches: function(event) {
		event.preventDefault();
		console.log('gotta love the beach');

		L.geoJson(beachPoints).addTo(map);
	}		
};


	