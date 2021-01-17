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
			uppercase: true,
			required: true,
		},
		type: {
			type: String,
		},
		album: {
			type: Object,
		},
		artists: {
			type: Array,
		},
		externalUrls: {
			type: Object,
		},
		durationMs: {
			type: Number,
		},
		popularity: {
			type: Number,
		},
		video: {
			type: Object,
		},
		lyrics: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Song', SongSchema);
