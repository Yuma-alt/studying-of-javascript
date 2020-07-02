//ループについて学ぶ2
console.log('%c [Javascript]ループについて学ぶ2'
      , 'color: red; font-size: 1.5em;');

//公開関数について学んでいく（returnで関数を返す）

const data = [1, 4, 2, 5, 3];
const fruits = {banana: 'バナナ', apple: 'りんご', orange: 'オレンジ'};

//第一引数が値
//第二引数が0,1,2,3,4と順番
//第三番引数が配列
data.forEach((value, index, array) => {
    console.log(value, index, array);
});

//mapだと配列
const newData = data.map((value, index, array) =>{
    return value * 2;
});

console.log('data' ,data);
console.log('newData' ,newData);