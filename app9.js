//非同期処理について学ぶ3
console.log('%c [Javascript]非同期処理について学ぶ3'
      , 'color: red; font-size: 1.5em;');

//await-async・・・promiseより直感的にコードを書くことができる。
//ただ、ES7からしか対応していないので、Babel.jsを使用してダウングレードしないと使用することはできない。

//awaitを使う時は、必ずasyncをつける
// async function sample() {
//     const num = await asyncFn();
//     num++;
//     return num;
// }

// asyncFn(0).then(num => {
//     num++;
//     return num;
// })

//非同期処理が終わった後に呼び出される
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            if(num === 2) {
                reject(num);
            }else{
                resolve(num);
            }
        }, 100);　
    });
}

//awaitとasyncはセットだと思った方が良い
//非同期処理のpromiseだとawaitを使用できる
async function init() {
    //new Promise()によって、呼び出した関数に伝えることができる
    let num = 0;
    try {
        num = await wait(num);
        num++;
        num = await wait(num);
        num++;
        // num = await wait(num);
        // num++;


    }catch(e) {
        throw new Error('Error is occurd.', e);
    }
    return num;
}

// console.log(init());
init().then(num => {
    console.log(num, 'Ends');
})

//コンストラクタにはアロー関数は使用できないようだ。
let Monster = function(name, attack, hp) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.getAttack = () => {
        return name + 'は' + attack + 'のダメージを受けた！';
    }
}

let babaa = new Monster('ババァ', 500, 1000);
console.log(babaa);
console.log(babaa.getAttack());

