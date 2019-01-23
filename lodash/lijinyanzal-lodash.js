
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
//     res += iteratee(item)
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
//   }, []).map(item => iteratee(item))
//   return ary.map(it => iteratee(it)).filter(item => !(newVal.inclueds(iteratee(item))))
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
        if (!isMatch(src[key], obj[key])) {
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
        if (!isMatch(src[key], obj[key])) {
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
  pairs.push(...flattenDeep(ary))
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
  return toString.call(value) === '[object Boolean]'
}

// filter
// find
// isEqual

// function iteratee(func = identity) {
//   if (typeof func === "function") {
//     return func
//   } else if (typeof func === "string") {
//     return property(func)
//   } else if (Array.isArray(func)) {
//     return matchesProperty(func)
//   } else if (){
//     return obj => isMatch(obj, func)
//   }
// } 
function isArguments(value){
  let toString = Object.prototype.toString
  return toString.call(value) === '[object Arguments]'  
}

function isArray(value){
  let toString = Object.prototype.toString
  return toString.call(value) === '[object Array]'   
}

function isArrayBuffer(value){
  let toString = Object.prototype.toString
  return toString.call(value) === '[object ArrayBuffer]'
}

function isArrayLike(value) {
  let toString = Object.prototype.toString
  if (toString.call(value) === '[object Function]') {
    return false
  }
  return value.length && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER
 
}

function isDate(value) {
  let toString = Object.prototype.toString
  return toString.call(value) === "[object Date]"
}

function isArrayLikeObject(value) {
  return Array.isArray(value) || typeof value === "object"
}

function isElement(value){
  let toString = Object.prototype.toString
  return toString.call(value) === "[object HTMLBodyElement]"
}

function isFinite(value) {
  if (typeof value !== "number" ) {
    return false
  } else {
    if (value === Infinity || value === -Infinity || Number.isNaN(value)) {
      return false
    } else {
      return true
    }
  }
}

function isFunction(value) {
  let toString = Object.prototype.toString
  return toString.call(value) === "[object Function]"
  
}

function isInteger(value){
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value
}

function isLength(value){
  return isInteger(value) && value >= 0 &&　value <= 2**53 - 1  
}

function isMap(value) {
  let toString = Object.prototype.toString
  return toString.call(value) === "[object Map]"
}

function isNaN(value){
  if (value !== value) {
    return true
  } else if (typeof value === "object") {
    return value.toString() === "NaN"
  }
  return false
}

function isNil(value) {
  return value === undefined || value === null
}

function isNull(value){
  return value === null 
}

function isNumber(value){
  return typeof value === "number"
}

function isObject(value) {
  let toString = Object.prototype.toString
  return (typeof value === "object" || typeof value === "function") && (toString.call(value) === "[object Object]" || toString.call(value) === "[object Array]" || toString.call(value) === "[object Function]" || toString.call(value) === "[object RegExp]")
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null
}

function isPlainObject(value) {
  return value.__proto__ === Object.prototype || value.__proto__ == null 
}

function isSafeInteger(value){
  return  isInteger(value) && value >= -(2**53 - 1) && value <= 2**53 - 1
}

function isNative(value) {
  return value.toString().includes("[native code]")
}

function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]"
}
function isSet(value) {
  return Object.prototype.toString.call(value) === "[object Set]"
}
function isString(value){
  return Object.prototype.toString.call(value) === "[object String]"
}
function isSymbol(value){
  return Object.prototype.toString.call(value) === "[object Symbol]"
}

function isUndefined(value){
  return Object.prototype.toString.call(value) === "[object Undefined]" 
}

function isTypedArray(value){
  let toString = Object.prototype.toString
  var typedArrayTypes = ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]
  for (let i = 0; i < typedArrayTypes.length; i++) {
    if (toString.call(value).includes(typedArrayTypes[i])) {
      return true
    }
  }
  return false
}
function isWeakMap(value){
  return Object.prototype.toString.call(value) === "[object WeakMap]"  
}

function isWeakSet(value){
  return Object.prototype.toString.call(value) === "[object WeakSet]"  
}

function lt(value, other){
  return value < other 
}

function lte(value, other){
  return value <= other
}

function toArray(value){
  if (isObject(value)) {
    return Object.values(value)
  } else if (isString(value)) {
    return value.split("")
  } else if (isNumber(value) || isNil(value)) {
    return []
  }
}

function toFinite(value) {
  if (isFinite(Number(value))) {
    return Number(value)
  } else if (value === Infinity) {
    return 1.7976931348623157e+308
  } else if (value === -Infinity) {
    return -1.7976931348623157e+308
  } else if (value === Number.MIN_VALUE) {
    return 5e-324
  } else if (value === Number.MIN_VALUE) {
    return 1.7976931348623157e+308
  } else if (value === Number.MAX_SAFE_INTEGER) {
    return 9007199254740991
  } else if (value === Number.MIN_SAFE_INTEGER) {
    return -9007199254740991
  } else if (value === Number.EPSILON) {
    return 2.220446049250313e-16
  }
}

function toInteger(value) {
  if (isNaN(value)) {
    return 0
  } else if (isFinite(Number(value))){
    return Number(value) > 0 ? Math.floor(Number(value)) : -Math.floor(Math.abs(Number(value)))
  } else if (value === Number.MIN_VALUE) {
    return 0
  } else if (value === Infinity){
    return 1.7976931348623157e+308
  }  
}

// function toLength(value){
  
  
  
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
  isArray,
  isArrayLike,
  isArrayBuffer,
  isArguments,
  isArrayLikeObject,
  isElement,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isDate,
  isNaN,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isSafeInteger,
  isNative,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isTypedArray,
  isWeakMap,
  isWeakSet,
  lt,
  lte,
  toArray,
  toFinite,
  toInteger,
  
  
  
  
  
  
  
  
  
  
  

  }
}()
