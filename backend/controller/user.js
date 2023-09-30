import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";
import bcrypt from "bcrypt";

export const registerUser = async(req, res) => {

    try {

        const { name, email, password } = req.body;

        let user = await User.findOne({email});

        if(user){
            return next(new ErrorHandler("User Already Exist!"));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        sendToken(user, res, "Registered Successfully", 201);

    } catch(error)
    {
        console.log(error);
    }

}

export const loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({email}).select("+password");

        if(!user)
        {
            return next(new ErrorHandler("Invalid Email!", 400));
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch)
        {
            return next(new ErrorHandler("Invalid Password", 400));
        }

        sendToken(user, res, `Welcome Back, ${user.name}`, 200);

    } catch(error){
        // res.send("Something Went Wrong")
        console.log(error);
    }

}