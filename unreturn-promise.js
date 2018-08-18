console.log('here we go');
new Promise(resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log(value);
        console.log('everyone');
        //不直接返回一个promise实例，而是放在一个立即执行函数之中
        (function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Mr.Laurence');
                    resolve('Merry Xmas');
                }, 2000);
            });
        }());
        //函数会被跳过，继续执行promise栈进程，同时异步执行匿名函数
        return false;//如不return false 则默认返回 undefined
    })
    .then( value => {
        console.log(value + ' world');
    });
    //here we go 
    // hello
    // everyone
    // false world
    // Mr.Laurence
