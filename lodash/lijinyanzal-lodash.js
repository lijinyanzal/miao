
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
  if (array[mid] < value && (array[mid + 1] >= value || !array[mid + 1])) {
    return mid + 1
  } else if (array[mid] >= value && (array[mid - 1] < value || !array[mid - 1])) {
    return mid
  } 
  if (array[mid] < value) {
    return sortedIndex(array.slice(mid), value)
  } else if (array[mid] >= value) {
    return sortedIndex(array.slice(0, mid), value)
  }

}

function sortedIndexOf(array, value) {
  let mid = array.length / 2 | 0
  if (value <= array[mid]  && (value > array[mid - 1] || !array[mid - 1])) {
    return mid
  } else if (value > array[mid]) {
    return sortedIndexOf(array.slice(mid), value)
  } else if (value <= array[mid]) {
    return sortedIndexOf(array.slice(0, mid), value)
  }
  return -1
}

function sortedUniq(array) {
   return array.reduce((result, item, index) => {
     if (array.indexOf(item, index + 1) == -1) {
       result.push(item)
     }
     return result
   }, [])
}

function tail(array) {
  return array.slice(1)
}

function take(array, n = 1) {
  return array.slice(0, n)
}

function takeRight(array, n = 1) {
  if (n > array.length) {
    return array
  }
  return array.slice(array.length - n)
}

function uniq(array) {
  array
}

function flatten(array) {
  return array.reduce((res, item) => {
    if (Array.isArray(item)) {
      res.push(...item)
    } else {
      res.push(item)
    }
    return res
  }, []) 
} 

function flattenDeep(array) {
  return array.reduce((res, item) => {
    if (Array.isArray(item)) {
      item = item.reduce((result, item) =>  {
        if (Array.isArray(item) && item) {
          flattenDeep(item).forEach(item =>result.push(item))
        } else {
          result.push(item)
        }
        return result
      }, [])
      res.push(...item)
    } else {
      res.push(item)
    }
    return res
  }, [])
}

function flattenDepth(array, depth = 1) {
  if (depth <= 0) {
    return array
  } else {
    return array.reduce((res, item) => {
      if(Array.isArray(item)) {
        res.push(...flattenDepth(item, depth - 1))
      } else {
        res.push(item)
      }
      return res
    }, [])
  }
   
}

function property(propName) {
  return function (obj) {
    return obj[propName]
  }
}


function identity(value) {
  return value
}

// function sumBy(ary, iteratee = identity) {
//   return ary.reduce((res, item) => {
//     res += lijinyanzal.iteratee(item)
//     return res
//   }, 0)
// }

function sum(ary) {
  return ary.reduce((res, item) => {
    res += item
    return res
  }, 0)
}
  

// function differenceBy(ary, values, iteratee) {
//   let newVal = values.reduce((res, item) => {
//     res.push(item)
//     return res
//   }, []).map(item => lijinyanzal.iteratee(item))
//   return ary.map(it => lijinyanzal.iteratee(it)).filter(item => !(newVal.inclueds(lijinyanzal.iteratee(item))))
// } 
 
function isMatch(obj, src) {
  for (let key in src) {
    if (src[key] !== obj[key]) {
      if (!isMatch(src[key], obj[key])) {
        return false
      } else {
        return true 
      }
    }
    return true 
  }
}

function matches(src) {
  return function (obj) {
    for (let key in src) {
      if (src[key] !== obj[key]) {
        if (!lijinyanzal.isMatch(src[key], obj[key])) {
          return false
        } else if (src[key] !== obj[key]) {
          return false
        }
      }
    }
    return true
  }
}

function matchesProperty(obj, src) {
  return function (obj) {
    for (let key in src) {
      if (src[key] !== obj[key]) {
        if (!lijinyanzal.isMatch(src[key], obj[key])) {
          return false
        } else if (src[key] !== obj[key]) {
          return false
        }
      }
    }
    return true
  }
  
}

function fromPairs(ary) {
  let pairs = []
  pairs.push(...lijinyanzal.flattenDeep(ary))
  return pairs.reduce((obj, item, index, ary) => {
    if (index % 2 == 0) {
      obj[item] = ary[index + 1]
    }
    return obj
  }, {})
}

function toPairs(obj) {
  let ary = []
  
  let hasOwn = Object.prototype.hasOwnProperty
  for (let key in obj) {
    if (hasOwn.call(obj, key)) {
      ary.push([key, obj[key]])
    }
  }
  return ary
}


function isBoolean(value) {
  let toString = Object.prototype.toString
  return toString.call(value) === '[object Boolean]' ? true :false
}

// filter
// find
// isEqual

// function iteratee(func = lijinyanzal.identity) {
//   if (typeof func === "function") {
//     return func
//   } else if (typeof func === "string") {
//     return lijinyanzal.property(func)
//   } else if (Array.isArray(func)) {
//     return lijinyanzal.matchesProperty(func)
//   } else if (){
//     return obj => lijinyanzal.isMatch(obj, func)
//   }
// } 






return {
  chunk,
  compact,
  difference,
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
  sortedUniq,
  tail,
  take,
  takeRight,
  flatten,
  flattenDeep,
  flattenDepth,
  property,
  identity,
  sum,
  fromPairs,
  toPairs,
  isMatch,
  matches,
  matchesProperty,
  isBoolean,

}
}()
