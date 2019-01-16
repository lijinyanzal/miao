
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

function head(ary) {
  return ary ? ary[0] : undefined
}

function indexOf(array, value, fromIndex = 0 ) {
  for (let i = fromIndex; i < array.length; i++){
    if (array[i] == value) {
      return i
    }
  }
  return -1 
}

function initial(array) {
  return array.slice(0, array.length - 1)
}
 
function intersection(ary) {
  let prev = arguments[0]
  let remain = arguments[1]
  let result 
  return  result = prev.filter(item => remain.includes(item))
}

function join(ary, sep = ",") {
   return ary.reduce((result, item, index) => {
    index != ary.length - 1 ? result += String(item) + sep : result += String(item) 
    return result
   },"")
}

function last(ary) {
  return ary[ary.length - 1]
}

function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
   for (let i = fromIndex; i >= 0; i--) {
     if (ary[i] == value) {
       return i
     }
   }
   return -1
}

function nth(array, n = 0) {
  if (n >= 0) {
    for (let i = 0; i < array.length; i++) {
      return array[n]
    }  
  } else {
    n = -n
    for (let i = array.length - 1; i >= 0; i--) {
      return array[n]
    }
  }
}

function pull(array, ...values) {
  return array.filter(item => !values.includes(item))
}

function pullAll(array, values) {
  return array.filter(item => !values.includes(item))
}

function reverse (array) {
  return array.reduce((result, item) => {
    result.unshift(item)
    return result
  }, [])
}

function slice(array, start = 0, end = array.length) {
  let result = []
  for (let i = start; i < end; i++) {
    result.push(array[i])
  }
  return result
}

function sortedIndex(array, value) {
  let mid = array.length / 2 | 0
  for (let i = 0; i < array.length; i++) {
    if (array[mid] < value && array[mid + 1] >= value) {
      return mid + 1
    } else if (array[mid] >= value && array[mid - 1] < value ) {
      return mid
    } 
    if (array[mid] < value) {
      sortedIndex(array.slice(mid), value)
    } else if (array[mid] > value) {
      sortedIndex(array.slice(0, mid), value)
    }
  }
}

function sortedIndexOf(array, value) {
  let mid = array.length / 2 | 0
  for (let i = 0; i < array.length; i++) {
    if (value <= array[mid]  && (value > array[mid - 1] || !array[mid - 1])) {
      return mid
    } else if (value > array[mid]) {
      return sortedIndexOf(array.slice(mid), value)
    } else if (value <= array[mid]) {
      return sortedIndexOf(array.slice(0, mid), value)
    }
  }
  return -1
}
  
return {
  chunk,
  compact,
  difference,
  differenceBy,
  drop,
  dropRight,
  fill,
  head,
  indexOf,
  initial,
  intersection,
  join,
  last,
  lastIndexOf,
  nth,
  pull,
  pullAll,
  reverse,
  sortedIndex,
  sortedIndexOf,
  
  

}
}()
