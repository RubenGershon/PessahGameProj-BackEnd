import authModel from "../models/authModel.js";

async function signup(req, res) {
  const response = await authModel.signup(req.body);
  if (response.status === "ok") res.send(response);
  else res.status(401).json(response);
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json("email or password missing");
      return;
    }

    const user = await authModel.login(email, password);
    if (user.length === 0) {
      res.status(401).json("invalid email or password");
      return;
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
}

async function logout(req, res) {
  console.log("logOut");
}

export default { signup, login, logout };
