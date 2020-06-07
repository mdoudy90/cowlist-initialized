const model = require('./model.js');

module.exports.get = (req, res) => {
  const data = model.getAll((data) => {
    let results = data.map((row) => {
      return { name: row.name, description: row.description };
    });
    res.send(results);
  });
};

module.exports.post = (req, res) => {
  const { name, description } = req.body;
  model.insert(name, description);
  res.send('Post Recieved!');
};
