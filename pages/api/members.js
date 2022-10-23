import database from "../../src/helpers/database";
import Member from "../../src/models/member";

export default async function handler(req, res) {
	const { method } = req;

	await database();

	switch (method) {
		case "GET":
			try {
				const filter = req.query;
				const members = await Member.find(filter);
				res.status(200).json({ success: true, data: members });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const member = await Member.create(req.body);
				res.status(201).json({ success: true, data: member });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const update = req.body.update;
				const memberId = req.body.id;

				await Member.findOneAndUpdate({ _id: memberId }, update);

				const updatedMember = await Member.find({ _id: memberId });
				res.status(201).json({ success: true, data: updatedMember });
				return;
			} catch (error) {
				res.status(400).json({ success: false });
			}
		case "DELETE":
			try {
				const memberId = req.body.id;
				await Member.findOneAndDelete({ _id: memberId });
				res.status(201).json({ success: true });
				return;
			} catch (error) {
				res.status(400).json({ success: false });
			}
		default:
			res.status(400).json({ success: false });
			break;
	}
}
