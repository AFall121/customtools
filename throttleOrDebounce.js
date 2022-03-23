/**
 * 
 * @param {要包装的函数，一般是事件函数} fn 
 * @param {time毫秒之内} time 
 * @returns 一个匿名函数，只能在time时间之内执行一次
 */
export function throttle(fn, time) {
  let prev = null,cur = null
  return function (...args) {
    console.log(`prev is ${prev},cur is ${cur}`)
    console.log(!prev);
    if(!prev){
      fn(...args)
      cur = prev = Date.now()
    } else {
      prev = cur
      cur = Date.now()
      // (cur - prev)>= time ? fn(...args) : null
      if ((cur - prev) >= time) {
        fn(...args)
      }
    }
  }
}
/**
 * 
 * @param {要包装的函数} fn 
 * @param {需要间隔的时间，单位ms} time 
 * @returns 返回一个匿名函数，time后执行，若time之内触发，则重新计时time后执行
 */
export const debounce = (fn, time) => {
  let prev = null, cur = null, timer = null;
  
  return (...args) => {
    prev = cur
    cur = Date.now()
    if (!timer) {
      timer = setTimeout(fn,time)      
    } else {
      clearTimeout(timer)
      if ((cur - prev) >= time) {
        fn(...args)
      } else {
        timer = setTimeout(fn,time,...args)        
      }
    }
  }
}

export default {}
