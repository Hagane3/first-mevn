const login = (req, res) => {
  console.log("login: ", req.body);
  res.json({ status: "ok" });
};

const register = (req, res) => {
  console.log("register: ", req.body);
  res.json({ status: "ok" });
};

module.exports = {
  register,
  login,
};
