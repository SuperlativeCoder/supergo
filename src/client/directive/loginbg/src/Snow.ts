export default class Snow {
  private x: number
  private y: number
  private r: number
  private color: string
  private context: CanvasRenderingContext2D

  constructor(x: number, y: number, r: number, color: string, context: CanvasRenderingContext2D) {
    this.x = x
    this.y = y
    this.r = r
    this.color = color
    this.context = context
  }

  public paint() {
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.context.fillStyle = this.color
    this.context.fill()
    this.context.closePath()
  }

  public set setColor(color: string) {
    this.color = color
  }

  public get getColor() {
    return this.color
  }

  public set setX(x: number) {
    this.x = x
  }

  public get getPosX() {
    return this.x
  }

  public set setY(y: number) {
    this.y = y
  }

  public get getPosY() {
    return this.y
  }
}
