var template = require('./template.ejs')
require('./style.css')

module.exports = function (opts) {
  var htmlString = template(opts)
  var div = document.createElement('div')
  div.innerHTML = htmlString
  var elem = div.firstChild

  return elem
}
