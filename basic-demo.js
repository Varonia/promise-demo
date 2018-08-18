new Promise(
    // 此时处于Pending状态
    // 执行器 executor
    function (resolve, reject) {
        // 一段耗时很长的异步操作

        resolve(); // 数据处理完成，变为Fulfilled状态

        reject(); // 数据处理出错，变为Rejected状态
    }
)
    .then(function A() {
        // 成功，下一步
    }, function B() {
        // 失败，做相应处理
    });