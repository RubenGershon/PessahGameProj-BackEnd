import scoreModel from "../models/scoreModel.js";

async function add(req, res) {
  //check if user exist
  const user = await authModel.getUserByEmail(req.body.email);
  if (user && user.length !== 0) {
    const response = scoreModel.add(req.body);
    if (response.status === "ok") res.status(201).json(response);
    else res.status(401).json(response);
  } else res.status(401).json({ status: "error", message: "user not found" });
}

export default { add };
