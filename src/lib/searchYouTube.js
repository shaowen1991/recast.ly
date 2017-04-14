var searchYouTube = (options, callback) => {
  $.get(
    //url
    'https://www.googleapis.com/youtube/v3/search',
    //parameters for API
    {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      timeout: 500
    })
    .done(function(data) {
      //when success load data
      console.log('$get success');
      data = data.items;
      callback(data);
    })
    .fail(function(data) {
      //when failed to load data
      console.log('$get failed');
    });

  // Here is the ajax approach of this get request from youtube api
  // $.ajax({
  //   url: yturl,
  //   type: 'GET',
  //   dataType: 'json',
  //   data: $.extend({
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: 'true',
	// 	  key: options.key,
	// 	  q: options.query,
  //   },
  //    {maxResults: options.max}),

  //   success: function (data) {
  //     data = data.items;
  //     callback(data);
  //   },
  //   error: function (data) {
  //     console.log('error');
  //   }
  // });
};

window.searchYouTube = searchYouTube;
