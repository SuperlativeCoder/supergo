import { callbackify } from 'util';
import Snow from './src/Snow'

class Loginbg {
  private id: string
  private canvasWidth: number
  private canvasHeight: number
  private mycanvas: HTMLCanvasElement

  private snows: Snow[]
  private snowNum: number
  private snowSpeed: number

  constructor(id: string, width: number, height: number) {
    this.id = id
    this.canvasWidth = width
    this.canvasHeight = height
    this.mycanvas = document.getElementById(this.id) as HTMLCanvasElement
    if (this.mycanvas !== null) {
      this.mycanvas.width = this.canvasWidth
      this.mycanvas.height = this.canvasHeight
    }
    this.snows = new Array<Snow>()
    this.snowNum = 50
    this.snowSpeed = 1
  }

  public show(width: number, height: number) {
    const self = this
    if (this.mycanvas !== null) {
      this.mycanvas.width = this.canvasWidth = width
      this.mycanvas.height = this.canvasHeight = height
    }
    const canvasContext = this.mycanvas.getContext('2d') as CanvasRenderingContext2D
    this.clearScene(canvasContext)  // 清楚场景
    this.createScene(canvasContext) // 创建场景
    this.createSnows(canvasContext) // 创建下雪
  }

  private createScene(canvasContext: CanvasRenderingContext2D) {
    const gradient: CanvasGradient = canvasContext.createLinearGradient(0, 0, 0, this.canvasHeight / 10 * 7)
    gradient.addColorStop(0, 'rgb(90,121,188)')
    gradient.addColorStop(0.4, 'rgb(123,148,200)')
    gradient.addColorStop(1, 'rgb(156,175,214')
    canvasContext.fillStyle = gradient
    canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight / 10 * 7)
  }

  private createTrees(canvasContext: CanvasRenderingContext2D) { }

  private createWave(canvasContext: CanvasRenderingContext2D) { }

  private createSnows(canvasContext: CanvasRenderingContext2D) {
    if (this.snows.length <= 0) {
      for (let i = 0; i < this.snowNum; i++) {
        const snow: Snow = new Snow(this.random(
          0, this.canvasWidth), this.random(0, this.canvasHeight), this.random(0, 3),
          'rgba(255, 255, 255, 1)', canvasContext)
        this.snows.push(snow)
        if (this.snows.length >= this.snowNum) {
          break
        }
      }
    }
    this.snows.map((item, index) => {
      item.setY = item.getPosY + this.snowSpeed
      item.paint()
      if (item.getPosY + 2 > this.canvasHeight / 10 * 7) {
        this.snows.splice(index, 1)
      } else if (this.snows.length < this.snowNum) {
        const snow: Snow = new Snow(this.random(
          0, this.canvasWidth), this.random(0, this.canvasHeight), this.random(0, 2),
          'rgba(255, 255, 255, 1)', canvasContext)
        this.snows.push(snow)
      }
    })
  }

  private clearScene(canvasContext: CanvasRenderingContext2D) {
    canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  }

  private random(begin: number, end: number): number {
    const big: number = begin > end ? begin : end
    const small: number = begin < end ? begin : end
    return (big - small) * Math.random() + small
  }
  public set scenewidth(width: number) {
    this.canvasWidth = width
  }

  public set sceneheight(height: number) {
    this.canvasHeight = height
  }
}

export default Loginbg
