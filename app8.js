//非同期処理について学ぶ1、2
console.log('%c [Javascript]非同期処理について学ぶ1、2'
      , 'color: red; font-size: 1.5em;');

// function() {}
// () => {}

//アロー関数と無名関数

function timesTwo(i) {
    return i * 4;
}

const res = timesTwo(2);
console.log(res);

//一気に変数まで定義できるね！
const timesThree = (i) => {
    return i * 4;
}

const timesFour = i => i * 5;

//引数がない場合は()を必ず記載する必要がある
//まずは変数を入力する癖をつける
let arrowFn;
arrowFn = () => 42;
arrowFn = i => 42;
arrowFn = (x) => 42;

const abc = (x) => { 
    return x * 100
};
const xyz = abc(3);
console.log(xyz);

let normalFn;
normalFn = {
    id: 43,
    counter: function() {
        console.log(this);
        window.setTimeout(() => {
            console.log(this);
        },1000);
    }

}
//() => {}にすると、thisがアロー関数に定義されない。
//そのためスコープチェーンという仕組みでどんどん上に上って参照していく。
//今回だと一つ上のスコープ（lexical scope）を参照。
normalFn.counter();

window.me = 'global';
const outer = function() {
    let me = 'outer';
    return {
        me: 'inner',
        say: () => {
            console.log(this.me);
        } 
    }
}

outer.say();

//このオブジェクトはそもそもouterオブジェクト
// return {
//     me: 'inner',
//     say: () => {
//         console.log(this.me);
//     }say();


//サーバー取得
const res = getDataFromServer();

//取得したデータを加工
res.doSomething();

//全く関係のない他の処理
doSomethingElse();

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
//※直列的な処理
//Promiseでthen()メソッドを使用して、非同期処理を使用したい場合は、returnの所でpromise
//を返すようにする
wait(0).then(num => {
    num++;
    return wait(num);
}).then(num => {
    num++;
    return num;
}).then(num => {
    num++;
    return num;
}).then(num => {
    num++;
    return num;
});

//並列的な処理
//all以外にも、raceというメソッドもあるよ！
Promise.all([wait(1000),wait(1500),wait(2000)]).then(nums => {
    console.log(nums);
})

// wait((num) => {
//     // console.log('callback function is called');
//     num++;
//     wait((num) => {
//         num++;
//         wait((num) => {
//             num++;
//         },num);
//     }, num);
// }, 0);

//callback地獄をなくすためにpromiseという関数が存在する




