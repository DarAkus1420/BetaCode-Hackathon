import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SearchSchema = new Schema(
	{
		song: {
			type: String,
			required: true,
			uppercase: true,
		},
		artist: {
			type: String,
			required: true,
			uppercase: true,
		},
		response: {
			type: Object,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Search', SearchSchema);
