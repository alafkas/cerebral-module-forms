var configureField = require('./../helpers/configureField.js')

function addField (arg) {
  var input = arg.input
  var state = arg.state
  var path = input.fieldPath.slice()
  var key = path.pop()
  var form = state.get(path)

  var newForm = Object.keys(form).reduce(function (newForm, existingKey) {
    newForm[existingKey] = form[existingKey]
    return newForm
  }, {})

  newForm[key] = configureField(newForm, input.fieldDetails)

  state.set(path, newForm)
}

module.exports = addField
