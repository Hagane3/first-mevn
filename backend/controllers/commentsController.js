const comments_all = (req, res) => {
  res.json([
    {
      title: "My first post",
      description: "Lorem ipsum ind set manare lumin patrir",
    },
    {
      title: "My second post",
      description: "Lorem ipsum ind set manare lumin patrir",
    },
    {
      title: "My third post",
      description: "Lorem ipsum ind set manare lumin patrir",
    },
  ]);
};

module.exports = {
  comments_all,
};
