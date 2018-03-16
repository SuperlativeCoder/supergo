export function entry(robot:Hubot.Robot) {
  robot.hear(/hello/i, (res:Hubot.Response) => {
      res.send('world')
  })
}