declare namespace Hubot {
  class User {
    id: any
    name: string
  }
  
  class Message {
    user: User
    text: string
    id: string
  }

  class Response {
    match: RegExpMatchArray
    message: Message

    constructor(robot: Robot, message: Message, match: RegExpMatchArray)
    send(...strings: string[]): void
    reply(...strings: string[]): void
    random<T>(items: T[]): T
  }

  type ListenerCallback = (response: Response) => void

  class Robot {
    hear(regex: RegExp, callback: ListenerCallback): void
    hear(regex: RegExp, options: any, callback: ListenerCallback): void
    respond(regex: RegExp, callback: ListenerCallback): void
    respond(regex: RegExp, options: any, callback: ListenerCallback): void
    test(tt:string):void
  }
}

export = Hubot
export as namespace Hubot