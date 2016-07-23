$(function() {

});

function init() {
	gapi.client.setApiKey("AIzaSyD4KXnN-f5YuPnymtetxD2_JK9anHGSq3g");
	gapi.client.load("youtube" , "v3" , function() {
		// youtube api ready
	});
}