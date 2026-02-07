const userModel = require("../models/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const counselModel=require("../models/CounsellorModel")

exports.register = async (req, res) => {
  try {
    const { name, email, password,role} = req.body;

    if (!name || !email || !password || !role) {
      return res.json({
        success: false,
        message: "All fields required"
      });
    }

 const normalizedEmail = email.trim().toLowerCase();

if (role.trim().toLowerCase() === "counsellor") {
  const approved = await counselModel.findOne({
    email: normalizedEmail
  });

  if (!approved) {
    return res.json({
      success: false,
      message: "You are not an approved counsellor"
    });
  }
}



    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password required",
      });
    }

    const user = await userModel
      .findOne({ email })
      .select("+password");

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role, 
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      role: user.role, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllUsers=async(req,res)=>{

const users=await userModel.find({role:"user"}).select("-password")
res.json({
  sucess:true,
  count:users.length,
  users
})

if(!users){
  return res.json({
      success:false,
      message:"not found users"
  })
}
}

exports.updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const updateduser = await userModel.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true }
    );

    if (!updateduser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      message: "User updated successfully",
      updateduser
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


exports.deleteUser=async(req,res)=>{
  const user=await userModel.findByIdAndDelete(req.params.id)

  if(!user){
    return res.json({
      success:false,
      message:"user not found"
    })
  }

  res.json({
    success:true,
    message:"removed successfully"
  })
}