import { gamingAppDb } from "../index.js";

async function add(newScore) {
  try {
    const score = await gamingAppDb.from("user_score").insert(newScore);
    return { status: "ok", score: score };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

export default { add };
