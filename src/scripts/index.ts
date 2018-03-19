module.exports = (robot:Hubot.Robot) => {
  robot.hear(/helloworld/i, (res) => {
    res.send('world')
  })
}