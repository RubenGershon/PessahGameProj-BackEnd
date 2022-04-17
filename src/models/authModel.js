import { gamingAppDb } from "../index.js";

async function signup(newUser) {
  try {
    const user = await gamingAppDb.from("users").insert(newUser);
    return { status: "ok", newUserId: user };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

async function login(email, password) {
  try {
    const user = await gamingAppDb
      .from("users")
      .where({ email: email, password: password });
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function getUserByEmail(email) {
  try {
      const user = await gamingAppDb
          .from("users")
          .where({ email: email });
    return user;
  } catch (err) {
    console.log(err);
  }
}

export default { login, signup, getUserByEmail };
