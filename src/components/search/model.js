import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
	query: {type: String, required: true, upperCase: true},
    response: { type: Object, required: true }
}, {timestamps: true});

export default mongoose.model("Search", SearchSchema);