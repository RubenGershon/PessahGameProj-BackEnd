import { gamingAppDb } from "../index.js";
import bcrypt from "bcrypt";

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
    const user = await gamingAppDb.from("users").where({ email: email });

    if (user && user.length !== 0) {
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (validPassword) {
        return { status: "ok", user: user };
      } else {
        return { status: "error", message: "Wrong password" };
      }
    } else return { status: "error", message: "Wrong email - user not found" };
  } catch (err) {
    return err;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await gamingAppDb.from("users").where({ email: email });
    return user;
  } catch (err) {
    console.log(err);
  }
}

export default { login, signup, getUserByEmail };
