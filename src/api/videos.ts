import express from "express";
import Video from "../models/video";
import News from "../models/news"
const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const news = await News.find().limit(6);
    const video = await Video.find().limit(20); 
    const data = { news, video };
    return res.status(200).json({
      status: 200,
      message: "스포츠 상세화면 조회 성공",
      data
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "스포츠 상세화면 조회 실패"
    })
  }
})
module.exports = router;