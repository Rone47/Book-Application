import jwt from "jsonwebtoken";
import User from "../models/User.js";

// const response = await fetch(`http://localhost:3000/api/books`, {
//     method: 'POST',
//     bosy: JSON.stringify({
//         title,
//         caption
//     }),
//     headers: {Authorization: `Bearer ${token}`},
// })

const protectRoute = async (req, resizeBy, next) => {
  try {
    // Token
    const token = req.header("Authorization").replace("Bearer", "");
    if (!token)
      return res
        .status(401)
        .json({ message: "No authentication token, access denied" });

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user
    const user = await User.findById(decoded.userId).select("_password");
    if (!user) return res.status(401).json({ message: "Token is not valid" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default protectRoute;
