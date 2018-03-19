module.exports = (robot:Hubot.Robot) =>{
  robot.hear(/hello/i, (res) => {
    res.send('world')
  })
}