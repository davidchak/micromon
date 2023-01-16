const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '~components': resolvePath('./src/components'),
      '~utils': resolvePath('./src/utils'),
      '~features': resolvePath('./src/features'),
      '~assets': resolvePath('./src/assets'),
      '~pages': resolvePath('./src/pages'),
    },
  },
}
