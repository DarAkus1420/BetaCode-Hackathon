import Search from './model';

const save = async searchData => {
	return Search.insertMany([searchData]);
};

export default {
	save,
};
