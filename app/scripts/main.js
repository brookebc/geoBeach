$(document).ready(function(){

	console.log('main.js loaded');
	beachmap.init();

	var map;
	
});

var map;

var beachmap = {

	init: function() {
		
		this.initEvents();
	},
	initEvents: function() {
		$('.clickers').on('click', '.pickme', this.addLayer);

	},
	addLayer: function(event) {
		event.preventDefault();
		console.log('i heard ya');

		var featureLayer = L.mapbox.featureLayer()
    	.addTo(map);

		featureLayer.loadID('examples.map-0l53fhk2');
  
	},
	locateMe: function(){


	}

};


	