
var lijinyanzal = function(){

  function chunk(array, size = 1) {
    let count = 0
    let ary = []
    array.forEach(item => {
      if (count % size == 0) {
        ary[Math.floor(count / size)] = []
      }
      ary[Math.floor(count / size)].push(item)
      count++
    })
    return ary
  }


  return {
    chunk: chunk,
  }
}()
