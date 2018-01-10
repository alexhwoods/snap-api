const Config = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    // no semicolons
    'no-unexpected-multiline': 'error',
    semi: 'off',
  },
}

module.exports = Config
