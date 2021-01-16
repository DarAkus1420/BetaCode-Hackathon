import bcrypt from 'bcrypt';
const mongoose = require('mongoose');
const { Model, Schema } = mongoose;

let userSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
	},
	lastName: {
		type: String,
		lowercase: true,
		trim: true,
		default: '',
	},
	email: {
		type: String,
		lowercase: true,
		trim: true,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

class User extends Model {
	static async createNewUser(userData) {
		const newUser = new User({
			...userData,
			password: bcrypt.hashSync(userData.password, 10),
		});
		return await newUser.save();
	}

	static async findByEmail(email) {
		return this.findOne({ email });
	}
}

export default mongoose.model(User, userSchema, 'users');
