//aopply,call,bindについて学ぶ
console.log('%c [Javascript]アロー関数について学ぶ'
      , 'color: red; font-size: 1.5em;');

function timesTwo(i) {
    return i * 2;
}

const res =  timesTwo(2);
console.log(res);


//アロー関数へ変形
//()を省略することもできる
const timesThree　= i => {
    return i * 3;
}

//returnが１つであれば、returnも省略することができる。
// const timesThree　= i => i * 3;

const app = timesThree(4);
console.log(app);

//書き方（シンタックス）について
// let arrowFn;
// arrowFn = () => 42;
// arrowFn = x => 42;
// arrowFn = (x) => 42;
// arrowFn = (x,y) => 42;
// arrowFn = (x,y) => {
//     console.log(x,y);
//     return x + y;
// } 

//thisのバインドについて
let normalFn;
//オブジェクトを定義して、中にプロパティを記述
normalFn = {
    id: 43,
    counter: function(){
        console.log(this.id);

        //アロー関数を使用することでthisを定義することができる
        window.setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
}

normalFn.counter();

// window.me = 'global';
// const outer = function(){
//     let me = 'outer'; //lexical scope

//     return {
//         me: 'inner',
//         say: () => {
//             console.log(this.me);
//         }
//     }
// }

// outer.say();