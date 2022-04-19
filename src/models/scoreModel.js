import { gamingAppDb } from "../index.js";

async function add(newScore) {
  try {
    const score = await gamingAppDb.from("user_scores").insert(newScore);
    return { status: "ok", scoreId: score };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

async function getLastScore(userEmail) {
  try {
    const scores = await gamingAppDb
      .from("user_scores")
      .where({ email: userEmail });
    const score = findLast(scores);
    return { status: "ok", lastScore: score };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

async function getHighScore(userEmail) {
  try {
    const scores = await gamingAppDb
      .from("user_scores")
      .where({ email: userEmail });
    const score = findHighest(scores);
    return { status: "ok", lastScore: score };
  } catch (err) {
    return { status: "error", message: err.sqlMessage };
  }
}

function findHighest(scores) {
  let highestScore = "";
  let maxScorePoints = 0;
  scores.forEach((score) => {
    const a = parseInt(score.score);
    if (a > maxScorePoints) {
      maxScorePoints = a;
      highestScore = score;
    }
  });
  return highestScore;
}

function findLast(scores) {
  let latestScore = "";
  let latestTime = 0;
  scores.forEach((score) => {
    const timeInMilliseconds = Date.parse(score.created_at);
    if (timeInMilliseconds > latestTime) {
      latestTime = timeInMilliseconds;
      latestScore = score;
    }
  });
  return latestScore;
}

export default { add, getLastScore, getHighScore };
