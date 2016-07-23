function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {

	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyD4KXnN-f5YuPnymtetxD2_JK9anHGSq3g');

    search();
}

function search() {

	var realSearch = $('#searchQuery').val();
	var realRealSearch = realSearch.split("").reverse().join("");

	console.log("in "+realSearch);
	console.log("in in "+realRealSearch);

    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
    	part: 'snippet',
    	q: realRealSearch,
    	maxResults: 3
    });
    request.execute(function(response) {
      var results = response.result;
      $("#response").html("");
      $.each(results.items, function(index, item) {
        $.get("resources/tpl/item.html", function(data) {
            $("#response").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
        });
      });
      resetVideoHeight();
   });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);

}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
	showResponse(response);
}







// $(function() {

// });

// function init() {
// 	gapi.client.setApiKey("AIzaSyD4KXnN-f5YuPnymtetxD2_JK9anHGSq3g");
// 	gapi.client.load("youtube" , "v3" , function() {
// 		// youtube api ready
// 	});
// }


// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }

