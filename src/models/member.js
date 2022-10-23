const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		points: Number,
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Member || mongoose.model("Member", MemberSchema);
