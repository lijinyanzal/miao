
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



function tail(array) {
  return array.slice(1)
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

function sumBy(ary, predicate = identity) {
  predicate = iteratee(predicate)
  return ary.reduce((res, item) => {
    res += predicate(item)
    return res
  }, 0)
}

function sum(ary) {
  return ary.reduce((res, item) => {
    res += item
    return res
  }, 0)
}
 
function isMatch(obj, src) {
  if (isEqual(obj, src)) return true
  for (let prop in src) {
    if (!(prop in obj) || !isEqual(obj[prop], src[prop]))
      return false
  }
  return true
}

function matches(src) {
  return obj => isMatch(obj, src)
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
//   } else if (isObject(func)){
//     return matches(func)
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
  return isInteger(value) && (value >= 0) && (value <= (2**53 - 1) ) 
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

// Array.from(new Set([1, 1, 1, 2, 2, 2, 3, 3]))
// [].slice.call({0: 1, 1: 3, 2: 5})

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

function toLength(value){
  if (value === Infinity) {
    return 4294967295
  } else if (Number(value) < 0) {
    return 0
  } else if (value >= Number.MAX_VALUE){
    return 4294967295
  } else if (toInteger(value) >= 0) {
    return toInteger(value)
  }
}

function toNumber(value){
  if(value === Infinity){
    return Infinity
  } else if (value === -Infinity){
    return -Infinity
  } else if (isFinite(Number(value))) {
    return toFinite(Number(value))
  }
}

function toSafeInteger(value){
  if (value >= 9007199254740991){
    return 9007199254740991
  } else if (value <= -9007199254740991) {
    return -9007199254740991
  } else if (isNumber(Number(value))) {
    return toInteger(value)
  }
}

function add(augend, addend){
  return augend + addend
}

function divide(dividend, divisor){
  if (divisor == 0) {
    return NaN
  }
  return dividend / divisor
}

function max(array){
  if (!array || array.length == 0) {
    return undefined
  } else {
    return Math.max(...array)
  }
}

function maxBy(array, predicate = identity) {
  predicate = iteratee(predicate)
  if (!array || array.length == 0) {
    return undefined
  } else {
    let max = -Infinity
    let map = {}
    for (var  i = 0; i < array.length; i++) {
      let item = predicate(array[i])
      if (max < item) {
        max = item
        map[item] = array[i]
      }
    }
    return map[max]
  }
}

function mean(array){
  let sum = array.reduce((res, item) => {
    res += item
    return res
  }, 0)
  return sum / array.length
}

function meanBy(array, predicate = identity) {
  predicate = iteratee(predicate)
  let sum = array.reduce((res, item) => {
    res += predicate(item)
    return res
  }, 0)
  return sum / array.length
}

function min(array){
  if (!array || array.length == 0) {
    return undefined
  } else {
    return Math.min(...array)
  }
}

function iteratee(func = identity) {
  if (isFunction(func)) {
    return func
  } else if (isArray(func)) {
    return matchesProperty(...func)
  } else if (isObject(func)&&!isArray(func)) {
    return obj => isMatch(obj, func)
  } else if (isString(func)) {
    if (func[0] == '\/' && func[func.length-1] == '\/') 
      return str => (new RegExp(join(slice(split(func, ''), 1, func.length - 1), ''))).test(str)
    return property(func)
  }
}

function minBy(array, predicate = identity) {
  predicate = iteratee(predicate)
  if (!array || array.length == 0) {
    return undefined
  } else {
    let min = Infinity
    let map = {}
    for (var  i = 0; i < array.length; i++) {
      let item = predicate(array[i])
      if (min > item) {
        min = item
        map[item] = array[i]
      }
    }
    return map[min]
  }
}

function multiply(multiplier, multiplicand){
  return multiplier * multiplicand
}

function subtract(minuend, subtrahend){
  return minuend - subtrahend 
}

function clamp(number, lower = undefined, upper){
  if (number >= upper) {
    return upper
  } else {
    if (lower ) {
      if (number <= lower) {
        return lower
      }
    } else {
      return number
    }
  }  
}

function inRange(number, start = 0, end){
  if (arguments.length === 2) {
    number = arguments[0] 
    start = 0
    end = arguments[1] 
  } 
  if (end < start && number >= end && number < start) {
    return true
  }
  if (end > start && number >= start && number < end) {
    return true
  } 
  return false
}

function random(lower = 0, upper = 1, floating = false){
  if (arguments.length == 1 || arguments.length == 2 && typeof arguments[1] === "Boolean" ) {
    if (arguments[0] > 0) {
      lower = 0
      upper = arguments[0]
    } else if (arguments[0] < 0) {
      lower = arguments[0]
      upper = 0
    }
  }
  if (floating) {
    return Math.random() * (upper - lower) + min
  } else {
    lower = Math.ceil(lower)
    upper = Math.floor(upper)
    return Math.floor(Math.random() * (upper - lower)) + lower
    
  }
}

function findKey(object, predicate = identity) {
   func = iteratee(predicate)
   for (let key in object) {
     if (func(object[key]) !== null) {
       return key
     }
   }
   return undefined
}

function findLastKey(object, predicate = identity) {
  func = iteratee(predicate)
  let keys  = Object.keys(object).reverse()
  let item
  for (let i in keys){
    item = keys[i]
    if (item in object && !isNil(func(object[item]))) {
      return item
    }
  }
  return undefined
}


function differenceBy(array, ...args) {
  let predicate
  if (typeof arguments[arguments.length - 1] === "string" || 
  typeof (arguments[arguments.length - 1]) === "function") {
    predicate = iteratee(args.pop())
  } else {
    predicate = identity
  }
  let values = [].concat(...args)
  let newArgs = values.map(item => predicate(item))
  let result = []
  return result = array.filter(item => !newArgs.includes(predicate(item)))
}

 function isEqual(value, other) {
  if (value !== value && other !== other) {
    return true
  } else if(isNumber(value) && isNumber(other) || isString(value) && isString(other) ) {
    if (value === other) {
      return true
    }
    return false
  } else if (isArray(value) && isArray(other)) {
    if (value.length !== other.length) {
      return false
    } else {
      for(let i = 0; i < value.length; i++) {
        if(isObject(value[i]) ) {
          if (isObject(other[i]) && isMatch(value[i], other[i]) && isMatch(other[i], value[i])) {
            return true
          } else {
            return false
          }
        } else  if (value[i] !== other[i]){
          return false
        }
      }
      return true
    }
  } else if (Object.prototype.toString.call(value) === "[object Object]"  && (   Object.prototype.toString.call(other) === "[object Object]")) {
    for (let key in value) {
      if (other[key] !== value[key] || !isEqual(Object.keys(other), Object.keys(value))) {
        return false
      }
    }
    return true
  }
  return false
}

// function includes(collection, value, fromIndex = 0){
//   return collection.includes(value, fromIndex)
// }

// function eq(value, other){
//   if (value !== value && other !== other) {
//     return true
//   } else if (value === other){
//     return true
//   }
//   return false
// }

function dropRight(ary, n = 1) {
  if (n >= ary.length) {
    return []
  }
  return ary.slice(0, ary.length - n)
}

function dropRightWhile(array, predicate = identity) {
  predicate = iteratee(predicate)
  for (let i = array.length; i >= 0; i--) {
    if (!isNil(array[i]) && !predicate(array[i])) {
      return array.slice(0, i + 1 )
    }
  }
}

function dropWhile(array, predicate = identity) {
  predicate = iteratee(predicate)
  for (let i = 0 ; i < array.length; i++) {
    if (!isNil(array[i]) && !predicate(array[i])) {
      return array.slice(i)
    }
  } 
}

function findIndex(array, predicate = identity, fromIndex = 0) {
  predicate = iteratee(predicate)
  for (let i = fromIndex; i < array.length; i++) {
    if (!isNil(array[i]) && predicate(array[i])) {
      return i
    }
  }
}

function findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
  predicate = iteratee(predicate)
  for (let i = fromIndex; i >= 0; i--) {
    if (!isNil(array[i]) && predicate(array[i])) {
      return i
    }
  }
}

function intersection(ary) {
  let prev = arguments[0]
  let remain = arguments[1]
  let result 
  return  result = prev.filter(item => remain.includes(item))
}

function intersectionBy(arrays, predicate = identity){
  predicate = iteratee(predicate)
  let prev = arguments[0]
  let remain = arguments[1]
  let src = remain.map(item => predicate(item))
  let result = []
  for (let i = 0; i < prev.length; i++) {
    if (!isNil(prev[i]) && src.includes(predicate(prev[i]))) {
      result.push(prev[i])
    }
  }
  return result
}

function pullAllBy(array, values, predicate = identity) {
  predicate = iteratee(predicate)
  values = values.map(item => predicate(item))
  return array.filter(item => !values.includes(predicate(item)))
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

function sortedIndexBy(array, value, predicate = identity) {
  predicate = iteratee(predicate)
  array = array.map(it => predicate(it))
  let mid = array.length / 2 | 0
  value = predicate(value)
  if (array[mid] < value && (array[mid + 1] >= value || !array[mid + 1])) {
    return mid + 1
  } else if (array[mid] >= value && (array[mid - 1] < value || !array[mid - 1])) {
    return mid
  } 
  if (array[mid] < value) {
    return sortedIndexBy(array.slice(mid), value)
  } else if (array[mid] >= value) {
    return sortedIndexBy(array.slice(0, mid), value)
  }
}

function sortedLastIndex(array, value){
  let start = 0
  let end = array.length - 1
  if (value < array[start]) {
    return 0
  }
  for (let i = end; i >= 0; i--) {
    if (array[i] <= value && array[i + 1] === undefined || array[i + 1] > value){
      return i + 1
    } 
  }
}

function sortedLastIndexBy(array, value, predicate = identity) {
  predicate = iteratee(predicate)
  array = array.map(it => predicate(it))
  value = predicate(value)
  let start = 0
  let end = array.length - 1
  if (value < array[start]) {
    return 0
  }
  for (let i = end; i >= 0; i--) {
    if (array[i] <= value && array[i + 1] === undefined || array[i + 1] > value){
      return i + 1
    } 
  }
}

function sortedLastIndexOf(array, value){
  let mid = array.length >> 1
  if (value === array[mid]) {
    return mid + 1
  } else if (value > array[mid]) {
    return sortedLastIndexOf(array.slice(mid), value)
  } else {
    return sortedLastIndexOf(array.slice(0, mid), value)
  } 
}

function sortedUniq(array) {
  return array.reduce((result, item, index) => {
    if (array.indexOf(item, index + 1) == -1) {
      result.push(item)
    }
    return result
  }, [])
}

function sortedUniqBy(array, predicate) {
  predicate = iteratee(predicate)
  let ary = []
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(predicate(array[i]))) {
      result.push(predicate(array[i]))
      ary.push(array[i])
    }
  }
  return ary
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

function takeRightWhile(array, predicate = identity) {
  predicate = iteratee(predicate)
  let result = []
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[array.length - 1] == null || array[array.length - 1] == undefined) {
      return []
    }
    if (array[i] !== null &&  array[i] !== undefined && predicate(array[i])) {
      result.push(array[i])
    } else {
      break
    }
  }
  return result 
}

function takeWhile(array, predicate = identity) {
  predicate = iteratee(predicate)
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[0] == undefined || array[0] == null || !predicate(array[0])) {
      return []
    }
    if (array[i] !== null &&  array[i] !== undefined && predicate(array[i])) {
      result.push(array[i])
    } else {
      break
    }
  }
  return result 
}


function union(...args) {
  let ary = args.reduce((res, item) => {
    res.push(item)
    return res
  }, [])
  let result = Array.from(new Set(flattenDeep(ary)))
  return result
}

function uniq(array){
  return Array.from(new Set(array))
}

function uniqBy(array, predicate = identity) {
  predicate = iteratee(predicate)
  let map = []
  let result = []
  let ary = array.map((item, index, array) => predicate(item))
  for (let i = 0; i < ary.length; i++) {
    if (!map.includes(ary[i])) {
      map.push(ary[i])
      result.push(array[i])
    }
  }
  return result 
}

function zip(...args) {
  let ary = _.flatten(args)
  let result = []
  let iter = 0
  for (let count = 0; count < args[0].length; count++) {
    let item = []
   
    for (let i = iter; i < ary.length; i += args[0].length) {
      item.push(ary[i])
    }
    result.push(item)
    iter++
  }
  return result
}

function unzip(array){
  let result = []
  for (let i = 0; i < array[0].length; i++) {
    let item = []
    for (let j = 0; j < array.length; j++) {
      item.push(array[j][i])
    }
    result.push(item)
  }
  return result
}

function without(array, ...values){
  return difference(array,[...values])
}

function xor(...arrays){
  var ary = flatten(arrays)
  var map = {}
  var result = []
  for (let i = 0; i < ary.length; i++){
    if (ary[i] in map){
      map[ary[i]]++
    } else {
      map[ary[i]] = 1
    }
  }
  var keys = Object.keys(map)
  for (let i = 0; i < keys.length; i++){
    if (map[keys[i]] == 1){
      result.push(+keys[i])
    }
  }
  return result
}


function filter(collection, predicate = identity){
  predicate = iteratee(predicate)
  if (isObject(collection)){
    collection = Array.from(collection)
  }  
  return collection.reduce((res, item) => {
    if (predicate(item)) {
      res.push(item)
    }
    return res
  }, [])
}



 function zipObject(props = [], values = []){
   var obj = {}
   for (var i = 0; i < props.length; i++){
     obj[props[i]] = values[i]
   }
   return obj
 }

function countBy(collection, predicate = identity) {
  var map = {}
  predicate = iteratee(predicate)
  collection = collection.map(it => predicate(it))
  for (var i = 0; i < collection.length; i++){
    if (collection[i] in map){
      map[collection[i]]++
    } else {
      map[collection[i]] = 1
    }
  }
  return map
  
}

function groupBy(collection , predicate = identity){
  var map = {}
  var count = countBy(collection , predicate)
  predicate = iteratee(predicate)
  newCollection = collection.map(it => predicate(it))
  
  var values = []
  for (var i = 0; i < collection.length; i++){
    var val = []
    if (count[newCollection[i]] == 1 ) {
      val.push(collection[i])
      map[newCollection[i]] = val
      val = []
    } else {
      values.push(collection[i])
      if (values.length == count[newCollection[i]]) {
        map[newCollection[i]] = values
        values = []
      }
      
    }
  }
  return map
}





function every(collection, predicate = identity){
  predicate = iteratee(predicate)
  collection = collection.map(it => predicate(it))
  for (var i = 0; i < collection.length; i++){
    if (!collection[i]) {
      return false
    }
  }
  return true
}

function find(collection, predicate = identity, fromIndex = 0){
  predicate = iteratee(predicate)
  var newCollection = collection.map(it => predicate(it))
  for (var i = fromIndex; i < collection.length; i++){
    if (newCollection[i]) {
      return collection[i]
    }
  }
  return undefined
}

function findLast(collection, predicate = identity, fromIndex = collection.length - 1){
  predicate = iteratee(predicate)
  var newCollection = collection.map(it => predicate(it))
  for (var i = fromIndex; i >= 0; i--){
    if (newCollection[i]) {
      return collection[i]
    }
  }
  return undefined
}

function flatMap(collection, predicate = identity){
  predicate = iteratee(predicate)
  return flatten(collection.map(it => predicate(it)))
}

function flatMapDeep(collection, predicate = identity){
  predicate = iteratee(predicate)
  return flattenDeep(collection.map(it => predicate(it)))
}

function flatMapDepth(collection, predicate = identity, depth = 1){
  predicate = iteratee(predicate)
  return flattenDepth(collection.map(it => predicate(it)), depth)
}

function forEach(collection, predicate = identity){
  if (isObject(collection)){
    return forIn(collection, predicate)
  } else {
    predicate = iteratee(predicate)
    var result = []
    for (var i = 0; i < collection.length; i++){
      if (predicate(collection[i]) == false){
        return 
      }
      result.push(predicate(collection[i]))
    }
    return result
  } 
}

function forEachRight(collection, predicate = identity){
  if (isObject(collection)){
    return forInRight(collection, predicate)
  } else {
    predicate = iteratee(predicate)
    var result = []
    for (var i = collection.length - 1; i >= 0; i--){
      if (predicate(collection[i]) == false){
        return 
      }
      result.push(predicate(collection[i]))
    }
    return result
  }  
}

function forIn(object, predicate = identity){
  func = iteratee(predicate)
  let keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    func(object[keys[i]], keys[i], object )
  }
  return object
}

function forInRight(object, predicate = identity){
  func = iteratee(predicate)
  let keys = Object.keys(object)
  for (let i = keys.length - 1; i >= 0; i--) {
    func(object[keys[i]], keys[i], object )
  }
  return object
}

function includes(collection, value, fromIndex = 0) {
  if (isArray(collection) || isString(collection)){
    return collection.includes(value, fromIndex)
  }
  if (isObject(collection)){
    var values = Object.values(collection)
    return values.includes(value, fromIndex)
  }
}

function keyBy(collection, predicate = identity){
  predicate = iteratee(predicate)
  var keyOfCollection
  var obj = {}
  for (var key in collection){
    keyOfCollection = predicate(collection[key])
    obj[keyOfCollection] = collection[key]
  }
  return obj
}

function map(collection, predicate = identity){
  predicate = iteratee(predicate)
  var result = []  
  if (isArray(collection)){
    return collection.map(it => predicate(it))
  } else {
    for (var key in  collection){
      if (collection.hasOwnProperty(key)){
        result.push(predicate(collection[key]))
      }
    }
    return result
  }
}

function partition(collection, predicate = identity){
  var first = []
  var last = []
  var result = [first, last]
  predicate = iteratee(predicate) 
  for (var key in collection){
    if (collection.hasOwnProperty(key)){
      if (predicate(collection[key])){
        first.push(collection[key])
      } else {
        last.push(collection[key])
      }
    }
    
  }
  return result
}

function eq(value, other){
  if (isNaN(value) && isNaN(other)){
    return true
  }
  return value === other
}

function gt(value, other){
  return value > other
}

function gte(value, other){
  return value >= other
}

function reduce(collection, predicate = identity, accu){
  predicate = iteratee(predicate) 
  for (var key in collection){
    if (accu === undefined){
      accu = collection[key]
      continue
    }
    accu = predicate(accu, collection[key], key, collection )
  }
  return accu
 
}

function reduceRight(collection, predicate = identity, accu){
  predicate = iteratee(predicate) 
  if (isArray(collection)){
    collection = collection.reverse()
  }
  if (isObject(collection)){
    var obj = {}
    var keys = Object.keys(collection)
    var values = Object.values(collection)
    for (var i = keys.length - 1; i >= 0; i-- ){
      obj[keys[i]] = values[i]
    }
    collection = obj
  }
  for (var key in collection){
    if (accu === undefined){
      accu = collection[key]
      continue
    }
    accu = predicate(accu, collection[key], key, collection )
  }
  return accu 
}

function reject(collection, predicate = identity){
  predicate = iteratee(predicate) 
  var result = []
  for (var key in collection){
    if (!predicate(collection[key])){
      result.push(collection[key])
    }
  }
  return result
}

function sample(collection){
  var min = 0
  var max = collection.length - 1
  var random =  Math.floor(Math.random() * (max - min + 1)) + min
  return collection[random]
}

function sampleSize(collection, n = 1){
  var min = 0
  var max = collection.length - 1
  var random
  var ary = []
  if (n > max + 1){
    n = max + 1
  }
  var count = 0
  while(count < n ){
    random =  Math.floor(Math.random() * (max - min + 1)) + min
    if (!ary.includes(collection[random])){
      ary.push(collection[random])
      count++
    }
  }
  return ary 
}

function size(collection){
  if (isObject(collection)){
    return Object.values(collection).length
  }
  return collection.length
}

function some(collection, predicate = identity){
  predicate = iteratee(predicate) 
  for (var key in collection){
    if (predicate(collection[key])){
      return true
    }
  }
  return false
}

function castArray(value){
  if (arguments.length == 0){
    return []
  }
  if (isArray(value)){
    return value
  } 
  return  [value]
}

function conformsTo(object, source){
  var key = Object.keys(source)[0]
  var predicate = source[key]
  return predicate(object[key])
}

function forOwn(object, predicate = identity){
  predicate = iteratee(predicate) 
  for (var key in object){
    if (object.hasOwnProperty(key)){
      predicate(object[key], key)
    }
  }
  return object
}

function forOwnRight(object,predicate = identity){
  predicate = iteratee(predicate) 
  var keys = Object.keys(object)
  var values = Object.values(object)
  var obj = {}
  for (var i = keys.length - 1; i >= 0; i--){
    obj[keys[i]] = values[i]
  }
  for (var key in obj){
    if (obj.hasOwnProperty(key)){
      predicate(obj[key], key)
    }
  }
  return obj 
}

function functions(object){
  var keys = []
  for (var prop in object){
    if (object.propertyIsEnumerable(prop)){
      keys.push(prop)
    }
  }
  return keys 
}

function functionsIn(object){
  var keys = []
  for(var prop in object){
    keys.push(prop)
  }
  return keys
}

function invert(object){
  var keys = Object.keys(object)
  var values = Object.values(object)
  var obj = {}
  for (var i = 0; i < keys.length ; i++){
    obj[values[i]] = keys[i]
  }
  return obj
}

function keys(obj){
  return Object.keys(forOwn(obj))
}

function keysIn(obj){
  var keys = []
  for (var key in obj){
    keys.push(key)
  }
  return keys
}

function mapKeys(object, predicate = identity){
  predicate = iteratee(predicate) 
  var obj = {}
  for (var key in object){
    if (object.hasOwnProperty(key)){
      var value = object[key]
      key = predicate(value, key)
      obj[key] = value
    }
  }
  return obj
}

function mapValues(object, predicate = identity){
  predicate = iteratee(predicate)
  var obj = {}
  var value
  for (var key in object){
    if (object.hasOwnProperty(key)){
      value = object[key]
      var val = predicate(value, key, object)
      obj[key] = val
    }
  }
  return obj
}

function omit(object, paths){
  var obj = {}
  for(var key in object){
    if (!paths.includes(key)){
      obj[key] = object[key]
    }
  }
  return obj
}

function omitBy(object, predicate = identity){
  predicate = iteratee(predicate)
  var obj = {}
  for (var key in object){
    if (!predicate(object[key], key)){
      obj[key] = object[key]
    }
  }
  return obj
}

function pick(object, paths){
  var obj = {}
  for(var key in object){
    if (paths.includes(key)){
      obj[key] = object[key]
    }
  }
  return obj 
}

function pickBy(object, predicate = identity){
  predicate = iteratee(predicate)
  var obj = {}
  for (var key in object){
    if (predicate(object[key], key)){
      obj[key] = object[key]
    }
  }
  return obj
}

function toPairsIn(object){
  var result = []
  var item = []
  for (var key in object){
    item.push(key, object[key])
    result.push(item)
    item = []
  }
  return result 
}

function transform(object, predicate = identity, accu){
  predicate = iteratee(predicate)
  for (var key in object){
    if (object.hasOwnProperty(key) ){
      if (predicate(accu, object[key], key, object) === false){
        return accu
      }
    }
  }
  return accu
}

function values(object){
  object = forOwn(object)
  return Object.values(object)
}

function valuesIn(object){
  var values = []
  for (var key in object){
    values.push(object[key])
  }
  return values
}

function camelCase(string = ''){
  var str = string.replace(/[\-*\_*]/g, " ")
  .toLowerCase()
  .replace(/\b(\w)/g, function(str){
    return str.toUpperCase()
  }).replace(/\s/g, "")
  str = str[0].toLowerCase() + str.slice(1)
  return str
}

function capitalize( string = ''){
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

function endsWith(string = '', target, position = string.length){
  return string[position - 1] == target
}

function escape(string = ""){
  return string.replace(/\&/g, '&amp;')
               .replace(/\>/g, '&gt;')
               .replace(/\</g, '&lt;')
               .replace(/\"/g, '&quot;')
               .replace(/\'/g, '&apos;')
  
}

function escapeRegExp(string = ""){
  return string.replace(/([\[\]\$\^\.\*\+\?\(\)\{\}\|\ ])/g, str => '\\' + str)
}

function kebabCase(string = ""){
  return string.replace(/(\s)|(?<=[A-Z])(\_)(?=[A-Z])|(?<=[a-z])(?=[A-Z])/g, "-").replace(/^\_*|\_*$/g, "").toLowerCase()
            
}

function lowerCase(string = ""){
  return string.replace(/^(\_*)|(\_*)$/g, "")
               .replace(/^(\-*)|(\-*)$/g, "")
               .replace(/(?<=\w)(\_|\-)(?=\w)|(?<=[a-z])(?=[A-Z])/g, " ")
               .toLowerCase()
}

function lowerFirst(string = ""){
  return string.replace(/^(\w)/, str=> str.toLowerCase())
}

function pad(string = '', length = 0, chars = ' '){
  let result = ""
  let len = string.length
  let diff = length - len
  if (diff <= 0){
    return string
  }
  let front = Math.floor(diff / 2)
  let last = diff - front
  for (let i = 0; i < front; i += chars.length){
    result += chars
  }
  result += string
  for (let i = 0; i < last; i += chars.length){
    result += chars
  }
  if (last % chars.length != 0){
    result = result.slice(0, result.length - 1)
  }
  return result
}

function padEnd(string = '', length = 0, chars = ' '){
  let result = string
  let len = string.length
  let diff = length - len
  if (diff <= 0){
    return result
  }
  
  for (let i = 0; i < diff; i += chars.length){
    result += chars
  }
  if (diff % chars.length != 0){
    result = result.slice(0, result.length - 1)
  }
  return result
}

function padStart (string = '', length = 0, chars = ' '){
  let result = ''
  let len = string.length
  let diff = length - len
  if (diff <= 0){
    return string
  }
  
  for (let i = 0; i < diff; i += chars.length){
    result += chars
  }
  if (diff % chars.length != 0){
    result = result.slice(0, result.length - 1)
  }
  result += string
  return result
}

function parseInt(string, radix = 10){
  return Number(string) | 0
  
}

function repeat(string = "", n = 1){
  var result = ''
  for (let i = 0; i < n; i++){
    result += string
  }
  return result
  
}

function replace(string = "", pattern, replacement){
  return string.replace(pattern, replacement)
  
}

function snakeCase(string = ""){
  return string.replace(/\s|(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(\-)(?=[A-Z])/g, "\_")
               .replace(/^\-*|\-*$/g, "")
               .toLowerCase()
  
}

function split(string = '', separator, limit){
  let ary = []
  let item = ''
  for (let i = 0; i < string.length; i++){
    if (string[i] != separator){
     item += string[i] 
    } else {
      ary.push(item)
      item = ''
    }
  }
  ary.push(item)
  return ary.slice(0, limit)
  
}


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
  sumBy,
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
  toLength,
  toNumber,
  toSafeInteger,
  add,
  divide,
  max,
  maxBy,
  mean,
  meanBy,
  min,
  minBy,
  multiply,
  subtract,
  clamp,
  inRange,
  findKey,
  findLastKey,
  forIn,
  differenceBy,
  isEqual,
  random,
  dropRightWhile,
  dropWhile,
  findIndex,
  findLastIndex,
  intersectionBy,
  pullAllBy,
  sortedIndexBy,
  sortedLastIndex,
  sortedLastIndexBy,
  sortedLastIndexOf,
  sortedUniqBy,
  takeRightWhile,
  takeWhile,
  union,
  uniq,
  uniqBy,
  zip,
  unzip,
  without,
  xor,
  filter,
  zipObject,
  countBy,
  every,
  find,
  findLast,
  flatMap,
  flatMapDeep,
  flatMapDepth,
  forEach,
  forEachRight,
  forInRight,
  groupBy,
  includes,
  map,
  keyBy,
  partition,
  eq,
  gt, 
  gte,
  reduce,
  reduceRight,
  reject,
  sample,
  sampleSize,
  size,
  some,
  castArray,
  conformsTo,
  forOwn,
  forOwnRight,
  functions,
  functionsIn,
  invert,
  keys,
  keysIn,
  mapKeys,
  mapValues,
  omit,
  omitBy,
  pick,
  pickBy,
  toPairsIn,
  transform,
  values,
  valuesIn,
  camelCase,
  capitalize,
  endsWith,
  escape,
  escapeRegExp,
  kebabCase,
  lowerCase,
  lowerFirst,
  pad,
  padEnd,
  padStart,
  parseInt,
  repeat,
  replae,
  snakeCase,
  split,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


  }
}()
