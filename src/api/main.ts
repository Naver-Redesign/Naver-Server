import express from "express";
import mongoose from "mongoose";
import Advertisement from "../models/advertisement";
import Video from "../models/video";
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const adRes = await Advertisement.findOne();
    const todayVideoRes = await Video.find().limit(3);
    const result = { adRes, todayVideoRes };
  return res.status(200).json({ status: 200, message: "메인화면 조회 성공", data: result });
  } catch(error) {
    return res.status(500).json({ sattus: 500, message: "메인화면 조회 실패" });
  }
}); 

module.exports = router;