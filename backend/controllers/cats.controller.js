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
  const { index, newName } = req.params

  cats[index] = newName
  res.send(newName)
}

exports.delete = (req, res) => {
  const { index } = req.params

  const deletedCat = cats.splice(index, 1)
  res.send(deletedCat[0])
}
