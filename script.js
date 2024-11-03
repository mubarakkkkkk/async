function task1(callback) {
    setTimeout(() => {
        console.log("1. first one")
        callback();
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("2. secound option")
        callback();
    }, 500);
}
function task3(callback) {
    setTimeout(() => {
        console.log("3. third one")
        callback();
    },2000);
}
task1(() => {
    task2(() => {
        task3(() => {
            
        })
    })
})
