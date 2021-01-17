import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema(
	{
		spotifyId: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			uppercase: true,
		},
		artists: {
			type: Object,
			required: true,
		},
		details: {
			type: Object,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Song', SongSchema);
