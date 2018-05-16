export default class Utils {
  // 判断参数是否存在
  public static oneOfProp(value: string, array: string[]) {
    for (const pos in array) {
      if (array[pos] === value) {
        return true
      }
    }
    return false
  }
}
