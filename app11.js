//クラス継承
//prototypeベースのものをclassベースで書いていく

class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    introduce() {
        console.log('My name is' + ' ' + this.first + ' ' + this.last);
    };
}

class Japanese extends Person {
    constructor(first, last) {
        super(first, last);
        this.lang = 'ja';
        //アンダースコアをつけることによって、プライベート変数だということを明示的に示している
        this._age = 0;
    }
    introduce() {
        console.log('こんにちは' + ' ' + this.first + ' ' + this.last + ' ' + this.lang);
    };
    //ここはインスタンス化されていないので、undefinedと表示される
    static sayhello(value) {
        console.log('こんにちは' + value);
    }
    set setAge(value) {
        this._age = value;
    }
    get setAge() {
        return this._age;
    }
}

let me = new Person('First', 'Last');
me.introduce();

//インスタンス化
let me1 = new Japanese('Last', 'First');
me1.introduce();
//インスタンス化されていない
Japanese.sayhello('First');
console.log(me1.setAge);
me1.setAge = 10;
console.log(me1.setAge);
