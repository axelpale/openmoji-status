var emojibaseCompact = require('emojibase-data/en/compact.json')
var emojibaseGroups = require('emojibase-data/meta/groups.json')
var openmoji = require('./openmoji-2019-11-05.json')

for each emoji in compact

  emoji.inOpenMoji = is in openmoji

  find group name

  if group exists
    if group empty
      init group

    add to group
  else
    log error

save groups to json
