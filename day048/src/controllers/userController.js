const users = [];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const addUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};

module.exports = { getUsers, addUser };