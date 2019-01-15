
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
  
  function difference(ary, ...args) {
    let newArg = args.reduce((res,item) => {
      if (!Array.isArray(item)) {
        res.push(item)
      } else {
        item.forEach(item => res.push(item))
      }
      return res
    }, [])
    return ary.reduce((result, item) => {
      if (!newArg.includes(item)) {
        result.push(item)
      }
      return result
    }, [])
  }
  
  function differenceBy(ary, value, iteratee = identity) {
    let newArg = value.reduce((res,item) => {
      if (!Array.isArray(item)) {
        res.push(item)
      } else {
        item.forEach(item => res.push(item))
      }
      return res.map(item => iteratee(item))
    }, [])

     return ary.reduce((res, item) => {
       if(!newArg.includes(iteratee(item))) {
         res.push(item)
       }
       return res
     }, [])
    } 
 
  function drop(ary, n = 1) {
    return ary.slice(n)
  }
  
  function dropRight(ary, n = 1) {
    if (n >= ary.length) {
      return []
    }
    return ary.slice(0, ary.length - n)
  }
  
  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary 
  }
  
  function flatten(array) {
    
  }
  
  
  
  return {
    chunk,
    compact,
    difference,
    differenceBy,
    drop,
    dropRight,
    fill,
    

  }
}()
