var emojilist = require('./emojilist')
var emojis = require('../preprocess/preprocessed.json')

var emojiContainer = document.getElementById('emojis')
emojiContainer.appendChild(emojilist({
  emojis: emojis
}))
