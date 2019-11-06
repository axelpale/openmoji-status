var emojilist = require('./emojilist')
var emojis = require('../preprocess/preprocessed.json')

var container = document.getElementById('container')
container.appendChild(emojilist({
  emojis: emojis
}))
