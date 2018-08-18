# Promise-demo
作为Promise语法学习中的一些demo试验田

- Promise根据状态(pending/Fulfilled/Rejected)进行下一步链式操作的判定条件

- Promise在没有设置返回值时默认返回undefined

- Promise中如果嵌套了then()则按顺序完成
```
new Promise( resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then( value => {
        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110);
            }, 1000);
        })
            .then( value => {
                console.log('Step 1-2');
                return value;
            })
            .then( value => {
                console.log('Step 1-3');
                return value;
            });
    })
    .then(value => {
        console.log(value);
        console.log('Step 2');
    });
// Step 1-1 Step 1-2 Step 1-3 Step 2    
```

- Promise会自动捕获内部异常，并交给rejected响应函数处理-catch捕获/reject响应捕获
```
console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        throw new Error('bye');
    }, 2000);
})
    .then( value => {
        console.log( value + ' world');
    })
    .catch( error => {
        console.log( 'Error：', error.message);
    });
```

- Promise的catch返回值依然认为是处于Fulfilled状态，继续执行then()，除非catch throw一个新的错误，此时处于Rejected状态