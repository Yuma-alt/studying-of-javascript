//aopply,call,bindについて学ぶ
console.log('%c [Javascript]クロージャーについて学ぶ'
      , 'color: red; font-size: 1.5em;');


//即時関数・・・定義された時点で実行される
let increment = (function () {

    //内部変数として定義
    let counter = 0;　//lexicial scope・・・親の関数からみた定義された変数のこと

    return function() {
        counter += 1;
        console.log(counter);
    }

})();



increment();
increment();
increment();

//ダメなパターン
// function increment() {
//     counter++;
//     console.log(counter);
// }

function addStringFactory(tail) {

    return function(str) {
        return str + tail;
    };
}

let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');

let str = 'Tom';
str = addAs(str);
console.log(str);