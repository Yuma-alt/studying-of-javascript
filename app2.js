//aopply,call,bindについて学ぶ
console.log('%c [Javascript]apply,call,bindについて学ぶ'
      , 'color: red; font-size: 1.5em;');

function greet()  {
    console.log(arguments);
    let slicedArray = [].slice.call(arguments,0,1);
    console.log(slicedArray);
    let hi = `Hi, ${this.name}`;
    console.log(hi);
}

let obj = {name: "Tom"};

//呼び出し、実行することができる
greet.call(obj, 1,2,3);

//applyを使用する場合は、第二引数以下が配列になる
//配列で管理しているものは、apply、管理していないものはcallを使う

//1秒後にidの値がconsole上に出力されるように制御している
//上のthisと下のthisを固定するためにbindオブジェクトを使用している
let myObj = {
    id: 42,
    print () {
        console.log(this);

        setTimeout(function () {
            console.log(this.id);
        }.bind(this), 1000);
    }
}

// let myObj = {
//     id: 42,
//     print () {
//         console.log(this);
//         let _that = this;
//         setTimeout(function () {
//             console.log(_that);

//         }, 1000);
//     }
// }


//setTimeoutはwindowオブジェクト
let myObj = {
    id: 42,
    print () {
        console.log(this);
        let _that = this;
        window.setTimeout(function () {
            console.log(this);

        }, 1000);
    }
}

myObj.print();

let window = {
    setImeout: function (cb, millisecond) {

        //stop millisecond
        cb();

    }
}