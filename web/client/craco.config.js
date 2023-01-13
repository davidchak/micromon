const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@stores': resolvePath('./src/stores'),
      '@utils': resolvePath('./src/utils'),
      '@actions': resolvePath('./src/actions'),
      '@assets': resolvePath('./src/assets'),
      '@root': resolvePath('.'),
    },
  },
}
