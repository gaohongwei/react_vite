/* 一种常用的前端性能优化技术。它的核心思想是：
在高频触发某个操作时，只在最后一次触发后一段时间内执行一次函数。
在输入框输入时，如果每敲一个字就发起一次搜索请求，会导致后端压力大，体验也不好。这时候就可以用防抖，把输入停止后，比如 500ms，再统一发起一次请求。

实现防抖通常需要用到 setTimeout，每次触发时清除上一次的定时器，重新设置一个新的。
只有在停止触发一段时间后，函数才真正执行。

防抖常见有两种模式：
Trailing 防抖：忽略前面的触发，等冷却时间后执行调用。
Leading 防抖：第一次触发立即执行，然后在冷却时间内忽略新的触发）

如果业务需要更复杂，比如异步防抖、取消防抖，我也可以根据场景来扩展。

返回一个 Promise，可以用于异步场景（比如 API 请求）
*/
function debounce_standard(fn, delayMilliSeconds) {
  let timeoutHandler = undefined;
  function delayedFn(...args) {
    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }
    timeoutHandler = setTimeout(() => {
      fn(...args);
      console.log("delayedFn");
    }, delayMilliSeconds);
  }
  return delayedFn;
}

// 第一次调用立刻执行，然后在冷却期内不再触发。
function debounce(fn, delayMilliSeconds) {
  let timeout;
  function delayedFn(...args) {
    console.log("delayedFn, args", args);
    console.log("delayedFn, Array.isArray", Array.isArray(args));
    if (!timeout) {
      fn(...args);
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        timeout = undefined;
      }, delayMilliSeconds);
    }
  }
  return delayedFn;
}

function printMe(data1, data2) {
  console.log(`printed args: ${data1},${data2}`);
}

let delayedFn1;
delayedFn1 = debounce(printMe, 5000);
delayedFn1(10, 100);
delayedFn1(20, 200);
delayedFn1(30, 300);
