#
# hubot
#
module.exports = (robot) ->
  # TOPIC
  # HEAR
  # ROUTER/LISTENER
  robot.router.get '/hubot/ping', (req, res) -> res.send 'pong'



