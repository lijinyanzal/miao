
var lijinyanzal = function(){

  function chunk(array, size = 1) {
    let times = Math.ceil(array.length / size)
    let item = []
    let result = []
    count = 0
    for (let i = 0; i < array.length; i++) {
      item.push(array[i])
      count++
      if (count % size == 0 || i == array.length - 1) {
        result.push(item)
        item = []
      }
    }
    return result
  }
  
  function compact(ary) {
    return ary.filter(it =>
      it)
  }
  
  
  
  return {
    chunk,
    compact,
  }
}()
