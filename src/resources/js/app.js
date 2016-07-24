
function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

function handle(e){
    if(e.keyCode === 13){
       onClientLoad();
    }

    return false;
}

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

function resizeVideoHeight() {
  $(".video").css("height", $(".block").width() * 9/16);
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
    	maxResults: 3,
      type: 'video'
    });
    request.execute(function(response) {
      var results = response.result;
      $("#vid1").html("");
      $("#vid2").html("");
      $("#vid3").html("");


      $.each(results.items, function(index, item) {
        console.log(index);

        if (index==1){
          $.get("resources/tpl/item.html", function(data) {
          $("#vid1").append(tplawesome(data, [{"title":"", "videoid":item.id.videoId}])); // rm title
        });
        }
        else if (index==2){
          $.get("resources/tpl/item.html", function(data) {
          $("#vid2").append(tplawesome(data, [{"title":"", "videoid":item.id.videoId}])); // rm title
        });
        }
        else{
          $.get("resources/tpl/item.html", function(data) {
          $("#vid3").append(tplawesome(data, [{"title":"", "videoid":item.id.videoId}])); // rm title
        });
        }

      });
      resizeVideoHeight();
   });

}

