import youtubeService from '../../services/youtube';
import lyricsService from '../../services/lyrics';

const add = async data => {
	for (let i = 0; i < data.items.length; i++) {
		let nameSong = data.items[i].name;
		let artistSong =
			data.items[i] && data.items[i].artists && data.items[i].artists[0]
				? data.items[i].artists[0].name
				: null;

		let videoLink = await youtubeService.search(nameSong);
		let lyrics = await lyricsService.search(artistSong, nameSong);

		data.items[i].youtubeLink = videoLink;
		data.items[i].lyrics = lyrics;
	}
	return data;
};

export default {
	add,
};
