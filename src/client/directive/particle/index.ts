export default class LogoParticle {
  private id: string
  private imgSrc: string
  private mycanvas: HTMLCanvasElement
  private image: HTMLImageElement
  private ctx: CanvasRenderingContext2D
  private imageData: ImageData | null
  private pixels: any[]
  private speed: number
  private step: number

  constructor(id: string, imgSrc: string) {
    this.id = id
    this.imgSrc = imgSrc
    this.mycanvas = document.getElementById(this.id) as HTMLCanvasElement
    this.ctx = this.mycanvas.getContext('2d') as CanvasRenderingContext2D
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
    this.image = new Image()
    this.image.src = imgSrc
    this.imageData = null
    this.pixels = new Array<any>()
    this.speed = 1
    this.step = 0
  }

  public show() {
    const self = this
    this.image.onload = () => {
      self.ctx.drawImage(this.image, 0, 0, 200, 200);
      self.imageData = self.ctx.getImageData(0, 0, 200, 200);    // 获取图表像素信息
      self.getPixels();    // 获取所有像素
    }
  }

  public animal() {
    this.ctx.clearRect(0, 0, 200, 200)
    this.pixels.map(item => {
      this.ctx.fillStyle = 'rgba(255,255,255' + Math.random() * 255 + ')'
      this.ctx.fillRect(item.x, item.y, Math.random() * 2, Math.random() * 2)
    })
  }

  private getPixels() {
    let pos: number = 0;
    const data = (this.imageData as ImageData).data;    // RGBA的一维数组数据
    this.ctx.clearRect(0, 0, 200, 200);
    // 源图像的高度和宽度为200px
    for (let i = 1; i <= 200; i++) {
      for (let j = 1; j <= 200; j++) {
        pos = ((i - 1) * 200 + (j - 1)) * 4 // 取得像素位置
        if (data[pos] > 0) {
          const posX: number = j + Math.random() * 5 * (Math.random() > 0.5 ? -1 : 1)
          const posY: number = i + Math.random() * 5 * (Math.random() > 0.5 ? -1 : 1)
          const pixel = {
            originX: posX,
            originY: posY,
            x: posX, // 重新设置每个像素的位置信息
            y: posY, // 重新设置每个像素的位置信息
            distance: Math.sqrt(Math.pow(posX - 200, 2) + Math.pow(posY - 200, 2)),
            fillStyle:
              'rgba(' + data[pos] + ',' + (data[pos + 1]) + ',' + (data[pos + 2]) + ',255)',
          }
          if (Math.random() > 0.85) {
            this.pixels.push(pixel);
            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
          }
        }
      }
    }
  }
}
