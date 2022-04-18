function inputValidation(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ status: "error", message: "email or password missing" });
  } else next();
}

export { inputValidation };
