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
	
		// .setZindex(2)
		
		// beachLayer.loadURL('https://a.tiles.mapbox.com/v3/brookebc.iepkcdg5/markers.geojson');	
	}

	// onEachFeature: function(feature, layer) {

	// 	var popupContent = [
	// 		"<h2>",
	// 		feature.properties.name,
	// 		"</h2>",
	// 		"<p>View and Tell Your Story</p>",
	// 		"<p><a class=\"btn btn-success\" ",
	// 		"href=\"/location/",
	// 		encodeURIComponent(feature.properties.lng),
	// 		"/",
	// 		encodeURIComponent(feature.properties.lat),
	// 		"/",
	// 		feature.properties.FOCUS_AREA,
	// 		"/",
	// 		feature.properties.name,
	// 		"\">",
	// 		"<span class=\"fa fa-plus\"></span> View/Add Story",
	// 		"</a>",
	// 		"</p>"

	// 	].join("");

	// 		if (feature.properties && feature.properties.popupContent) {
	// 			popupContent += feature.properties.popupContent;
	// 		}

	// 		layer.bindPopup(popupContent);

	// },
};


	