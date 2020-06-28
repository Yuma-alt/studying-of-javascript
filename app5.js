//スプレッド構文について学ぶ
console.log('%c [Javascript]スプレッド構文について学ぶ'
      , 'color: red; font-size: 1.5em;');

function sum(x, y, z) {
    return x + y + z;
}

sum(1, 2, 3);

const numbers = [1, 2, 3];
//スプレッド構文　3点リーダで省略することができる
sum(...numbers);


console.log('%c [Javascript]分割代入について学ぶ'
      , 'color: red; font-size: 1.5em;');

//分割代入
//一括で定義し直す
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

//aの値に10が格納される。
[a] = [10, 20, 30, 40, 50];

//aに10、bに30が格納されることになる。
[a,,b] = [10, 20, 30, 40, 50];

//配列の中で、初期値を設定することができる。 cの値は1と出力される。
[a, ,b, c = 1] = [10, 20, 30];

//オブジェクトも分割代入することができる。
const {b, a, ...rest} = { a: 10, b: 20, c: 30, d: 40};

//オブジェクトでも変数名、初期値を変更することができる。
const {b: bb=1, a: aa, ...rest} = { a: 10, c: 30, d: 40};

//引数に分割代入の構文を使用することができる。
function drawES2015Chart ({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
}

drawES2015Chart();

drawES2015Chart({
    coords: {x: 18, y: 30},
    radius: 30
});

