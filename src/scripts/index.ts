function entry(robot:Hubot.Robot) {
  robot.hear(/hello/i, (res) => {
    res.send('world')
  })
}

export = entry