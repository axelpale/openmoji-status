var emojilist = require('./emojilist')
var emojis = require('emojibase-data/en/compact.json')

var container = document.getElementById('container')
container.appendChild(emojilist({
  emojis: emojis
}))
