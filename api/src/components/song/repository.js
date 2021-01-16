import Song from '../song/model';

const save = async data => {
	return Song.insertMany([data]);
};

export default {
	save,
};
