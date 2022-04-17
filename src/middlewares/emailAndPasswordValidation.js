function emailAndPasswordValidation(req, res, next)
{
    const user = await authModel.login(email, password);
    if (user.length === 0) {
      res.status(401).json("invalid email or password");
      return;
    }

}

export default emailAndPasswordValidation