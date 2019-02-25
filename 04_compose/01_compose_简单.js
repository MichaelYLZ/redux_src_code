
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((v,f) => f(v), x)
    }
}

// 加

function add2(num) {
    return num + 2;
}

// 乘以2

function double(num) {
    return num * 2;
}

// 目标--一次运行，实现 先加 后乘 两步操作

const addThenDouble = compose(
    double,
    add2
);

addThenDouble( 0 )