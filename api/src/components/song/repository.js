import Song from '../song/model';

const save = async data => {
	return await Song.insertMany([data]);
};

const searchByIdSpotify = async id => {
	return await Song.findOne({ spotifyId: id });
};

export default {
	save,
	searchByIdSpotify,
};
