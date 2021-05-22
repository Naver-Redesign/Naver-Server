import mongoose from "mongoose";
import { IAdvertisement } from "../interfaces/IAdvertisement";

const adSchema = new mongoose.Schema({
	imageUrl: String
},{
  collection: 'Advertisement'
});

export default mongoose.model<IAdvertisement & mongoose.Document>(
  "Advertisement",
  adSchema
);