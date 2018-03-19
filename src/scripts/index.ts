module.exports = (robot:Hubot.Robot) =>{
  robot.hear(/hellow/i, (res) => {
    res.send('world')
  })
}