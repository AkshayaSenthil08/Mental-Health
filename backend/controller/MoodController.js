const Mood=require("../models/moodModel")

exports.saveMood=async(req,res)=>{

const{userId,date,moodvalue}=req.body;
const mood=await Mood.findOneAndUpdate(
    {userId,date},
    {moodvalue},
    {new:true,upsert:true}
)

res.json({
    success:true,
    mood,
})
}

exports.getMoods = async (req, res) => {
  const { userId } = req.params; 
  const moods = await Mood.find({ userId }).sort({ date: 1 });

  res.json({
    success: true,
    moods
  });
};
