module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    brower: true
  },
  extends: 'standard',
  plugins: [
    'html', 'vue', "typescript"
  ]
}