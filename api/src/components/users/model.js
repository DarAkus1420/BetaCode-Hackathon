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
	idFavSong: {
		type: Array,
		default: [],
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

	static async getUserWithoutPassword(id) {
		let user = User.findById(id);
		delete user.password;
		return user;
	}
}

export default mongoose.model(User, userSchema, 'users');
