import mongoose from "mongoose";
import { IVideo } from "../interfaces/IVideo";

const videoSchema = new mongoose.Schema({
	imageUrl : {
		type : String,
		required : true,
	},
	category: { //결산
		type: String,
		required: true,
	},
	title: {
		type:String,
		required: true,
	},
}, {
  collection: 'Video'
});

export default mongoose.model<IVideo & mongoose.Document>("Video", videoSchema);