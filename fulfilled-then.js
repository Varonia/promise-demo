console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello, world');
    }, 1000);
});
//此时promise已经完成了
setTimeout(() => {
    promise.then( value => {
        console.log(value);
    });
}, 3000);
//3秒后仍然会输出'hello,world'