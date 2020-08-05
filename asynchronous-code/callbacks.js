
addItForMe(5,8, function(res) {
console.log(res)
})

function addItForMe(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}