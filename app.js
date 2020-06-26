console.log('%c [Javascript]thisについて学ぶ'
      , 'color: red; font-size: 1.5em;');

//thisが関数が定義されたオブジェクトを指す
let myObj = {
  id: 2,
  printId: function() {
    console.log(this.id);
  }
}

//オブジェクトを参照する時に使用される
//myObj.printId();

//sayFooの呼び出す場所(呼び出し方)でthisの挙動も変わる
const sayFoo = function() {
  console.log(this['foo']);
}

foo = 'foo';

mySercondObj = {
  foo: "I'm in the obj",
  sayFoo
}

//sayFoo()
mySercondObj.sayFoo();

function MyObj(id) {
  this.id = id;
}

//このthisはインスタンス化されたthisを参照する
MyObj.prototype.printId = function(id) {
  console.log(this.id);
}

const newInstance = new MyObj(5);


//入れ子になった場合のthisの挙動
const outer = {
  //outerというオブジェクトを指している
  func1: function() {
    console.log(this);

    //ウィンドウオブジェクトを指す
    const func2 = function(){
        console.log(this);

        //ここもウィンドウオブジェクトを指す
        const func3 = function(){
          console.log(this);
        }();
    }();
  }
}

outer.func1();
//{func1: ƒ} consoleに記載されているとouterオブジェクトを指している

//javascript特有だと思うのだが、関数自体がオブジェクトとなって、インスタンス化をすることができる。
//入れ子になった場合、グローバル関数になり、ウインドウオブジェクトを指すようになる