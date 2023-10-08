let cats = ["Fluffy"]

exports.create = (req, res) => {
  const { name } = req.params

  cats.push(name)
  res.send(name)
}

exports.read = (req, res) => {
  res.send(cats)
}

exports.update = (req, res) => {
  const { name } = req.params

  const index = cats.indexOf(name)
  cats[index] = `${name}*`
  res.send(`${name}*`)
}

exports.delete = (req, res) => {
  const { index } = req.params

  const deletedCat = cats.splice(index, 1)
  res.send(deletedCat[0])
}
