import { gamingAppDb } from "../index.js";

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

export default { login };
