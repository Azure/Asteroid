
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-code-blocks.cjs.production.min.js')
} else {
  module.exports = require('./react-code-blocks.cjs.development.js')
}
