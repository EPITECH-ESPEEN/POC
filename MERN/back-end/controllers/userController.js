import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js"

// Register user : /api/register
export const getUsers = catchAsyncErrors(async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        users,
    });
});