//ループについて学ぶ
console.log('%c [Javascript]ループについて学ぶ'
      , 'color: red; font-size: 1.5em;');

const data = [1, 4, 2, 5, 3];
const fruits = {banana: 'バナナ', apple: 'りんご', orange: 'オレンジ'};

Object.prototype.additionalFn = function(){};

// let keyFruits = Object.keys(fruits);

// for(let i = 0; i < keyFruits.length; i++) {
//     console.log(i, keyFruits[i]);
// }

for(i in fruits){
    //additionakFcを回避するために
    //オブジェクトに属しているものを確認するプロパティ　for~inを使用するときはこのプロパティを使用する
    if(fruits.hasOwnProperty(i)) {
        console.log(i, fruits[i]);
    }
}

//こっちはadditionalFcの判定いらない

//valueだとiがバリューになる。（iの中にバナナやりんごが直接格納されることになる）
let keyFruits = Object.values(fruits);
//ofはvalueをiに格納する（i自体がデータへとなる）
for(i of keyFruits) {
    console.log(i);
}

//オブジェクトのままだと配列に格納できない