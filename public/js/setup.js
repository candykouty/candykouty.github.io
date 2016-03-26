var mymap = L.map('mapid', {
	zoomControl: false,
	attributionControl: false
}).setView([48.08, 17.06], 4);
L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);

var anchorMarker = L.ExtraMarkers.icon({
	icon: 'fa-anchor',
	prefix: 'fa',
	markerColor: 'red',
	iconColor: '#FFFFF0',
	shape: 'square'
});

var heartMarker = L.divIcon({
	className: 'fa fa-heart heart-icon'
});
