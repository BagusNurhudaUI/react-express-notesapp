const asyncHandler =require("express-async-handler");
const Model =require("./userModels") ;

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    console.log(`${name}, ${email}`);
    const userExists = await Model.findOne({ email });
  
    if (userExists) {
      res.status(404);
      throw new Error("User already exists");
    }

    
  
    const user = await Model.create({
      name,
      email,
      password,
      pic,
    });
  
    // if (user) {
    //   res.status(201).json({
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     isAdmin: user.isAdmin,
    //     pic: user.pic,
    //     token: generateToken(user._id),
    //   });
    // } else {
    //   res.status(400);
    //   throw new Error("User not found");
    // }
  });

module.exports = registerUser