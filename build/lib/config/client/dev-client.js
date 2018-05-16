/* eslint-disable */
var ansiColors = {
  red: '00FF00' // note the lack of "#"
}
var overlayStyles = {
  color: '#FF0000' // note the inclusion of "#" (these options would be the equivalent of div.style[option] = value)
}

require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true&ansiColors=' + encodeURIComponent(JSON.stringify(ansiColors)) + '&overlayStyles=' + encodeURIComponent(JSON.stringify(overlayStyles)))

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})