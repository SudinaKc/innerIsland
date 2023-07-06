import jwt from "jsonwebtoken";
const authentication = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).send("Access denied...No token provided...");
  try {
    const decoded = jwt.verify(token, "innerIsland");
    req.user = decoded;

    const options = {
      expires: new Date(Date.now() + 5 * 60 * 1000),
     httpOnly: true,
    };
    res.cookie("token", token, options);
    console.log(decoded);
    next();
  } catch (er) {
    // console.log("err", er);
    //Incase of expired jwt or invalid token kill the token and clear the cookie
    // res.clearCookie("token");
    return res.status(400).send(er.message);
  }
};

export default authentication;
