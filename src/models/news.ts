import mongoose from "mongoose";
import { INews } from "../interfaces/INews";

const newsSchema = new mongoose.Schema({
	imageURL: { type: String, required: true },
	title : { type: String, required: true },
	content : { type: String, required: true}
}, {
  collection: 'News'
});

export default mongoose.model<INews & mongoose.Document>(
  "News",
  newsSchema
);