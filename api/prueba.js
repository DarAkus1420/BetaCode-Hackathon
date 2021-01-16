const youtube = require('scrape-youtube').default;

youtube.search('perfect ed-sheeran', { type: 'video' }).then(results => {
	// Unless you specify a type, it will only return 'video' results
	console.log(results.videos);
});
