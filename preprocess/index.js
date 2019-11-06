const emojibaseCompact = require('emojibase-data/en/compact.json')
const emojibaseGroups = require('emojibase-data/meta/groups.json')
const openmoji = require('./openmoji-2019-11-05.json')
const fs = require('fs')

const has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

// An example of an emoji from emojibase compact.json
// {
//   "annotation":"grinning face",
//   "group":0,
//   "hexcode":"1F600",
//   "order":1,"shortcodes":["gleeful"],
//   "tags":["face","grin"],
//   "unicode":"😀"
// }

// An example of an emoji from openmoji json
// {
//   "emoji": "😀",
//   "hexcode": "1F600",
//   "group": "smileys-emotion",
//   "subgroups": "face-smiling",
//   "annotation": "grinning face",
//   "tags": "face, grin",
//   "openmoji_tags": "smile, happy",
//   "openmoji_author": "Emily Jäger",
//   "openmoji_date": "2018-04-18",
//   "skintone": "",
//   "skintone_combination": "",
//   "skintone_base_emoji": "",
//   "skintone_base_hexcode": "",
//   "unicode": 1,
//   "order": 1
// }

// Make openmoji data O(log n) searchable.
const hexToOpenMoji = openmoji.reduce((acc, emoji) => {
  acc[emoji.hexcode] = emoji
  return acc
}, {})

// Construct an array of group objects
const markedEmojis = emojibaseCompact.reduce((acc, emoji) => {
  const groupIndex = emoji.group
  const groupId = '' + groupIndex
  const groupName = emojibaseGroups.groups[groupId]

  const inOpenMoji = has(hexToOpenMoji, emoji.hexcode)

  const markedEmoji = Object.assign({}, emoji, {
    openmoji: inOpenMoji
  })

  if (typeof acc[groupIndex] !== 'object') {
    // No array for group yet
    acc[groupIndex] = {
      id: groupId,
      name: groupName,
      emojis: []
    }
  }

  acc[groupIndex].emojis.push(markedEmoji)

  return acc
}, [])

const markedEmojisJson = JSON.stringify(markedEmojis)
fs.writeFileSync('preprocess/preprocessed.json', markedEmojisJson)

console.log('Example:')
console.log(markedEmojisJson.substr(0, 200))
