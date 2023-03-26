/* オブジェクトの定義方法 */
// pattern 1
let obj1 = {
    name: "ken",
    age: 22
}
console.log("obj1 :",obj1);

// pattern 2
function Obj2(name, age) {
    this.name = name,
    this.age = age
}
let obj2 = new Obj2("name",22);
console.log("obj2 :",obj2);

// pattern3
let obj3 = Object.create(Object.prototype, {
    name: {
        value: "name",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 22,
        writable: true,
        enumerable: true,
        configurable: true,
    },
})
console.log("obj3 :",obj3);

/* オブジェクトの定義方法 メソッドの定義*/
// メソッドはコンストラクタ関数の中ではなく、プロトタイプオブジェクトに定義するようにする。
function Obj4(name, age) {
    this.name = name,
    this.age = age
}
Obj4.prototype.greet = function() {
    return `Hello my name is ${this.name}. I am ${this.age} years old.`
}
let obj4 = new Obj4("ken",22);
console.log("obj4.greet :",obj4.greet());

/* オブジェクトの定義方法　メソッドの定義　アンチパターン" */
// コンストラクタでメソッドを生成している。この場合インスタンスを複数生成した時メソッドも複数生成されてしまうので、効率が悪い。
// (メンバはインスタンスごとに異なる値を持っていることが想定される一方、メソッドは同じものを共有することができる)
// 従って、上の例のようにメソッドはプロトタイプオブジェクトに定義するのが望ましい。
function Obj4_anti(name, age) {
    this.name = name,
    this.age = age,
    this.greet = function() {
        return `Hello my name is ${this.name}. I am ${this.age} years old.`
    }
}
let obj4_anti = new Obj4_anti("ken",22);
console.log("obj4_anti.greet :",obj4_anti.greet());


/* プロトタイプ継承 */
let obj5 = {
    first_name: "ken",
    second_name: "tanaka",
}
let obj6 = {
    first_name: "ryou",
}
obj6.__proto__ = obj5;
console.log(`ken's second name is ${obj5.second_name}.\nryou's second name is ${obj6.second_name}.`)

/* new演算子 */
// new演算子を用いたインスタンスの生成方法
function Obj7(name, age) {
    this.name = name;
    this.age = age;
}
Obj7.prototype.greet = function() {
    return `Hello my name is ${this.name}. I am ${this.age} years old.`
}
let obj7 = new Obj7("ken",22);
console.log("obj7 : ",obj7);

// new演算子でインスタンスを呼び出した時に内部で行われていること
let obj7_1 = {};
let args7_1 = ["ken",22]
obj7_1.__proto__ = Obj7.prototype;
Obj7.apply(obj7_1,args7_1); //この後、newの中ではreturn obj7_1する
console.log("obj7_1 : ",obj7_1);

/* プロトタイプオブジェクトのプロパティ */
// constructorプロパティ 
// コンストラクタのprototypeプロパティがプロトタイプオブジェクトを参照し、プロトタイプオブジェクトのconstructorプロパティがコンストラクタを参照する。
function Obj8() {};
console.log(`Obj8().prototype : ${Obj8.prototype}`);
console.log(`Obj8().prototype.constructor : ${Obj8.prototype.constructor}`);
console.log(`Obj8().prototype.constructor.prototype : ${Obj8.prototype.constructor.prototype}`);

// 内部プロパティ[[Prototype]](__proto__)
// 関数オブジェクトのプロトタイプオブジェクトの内部プロパティ[[Prototype]]の値は、標準でObject.prototypeへの参照となっている。
console.log(`Obj8().prototype.__proto__ : ${Obj8.prototype.__proto__}`);

// プロトタイプオブジェクトを正しく置き換える方法ための注意点
// 置き換えるオブジェクトにconstructorプロパティを定義し、インスタンスとコンストラクタとの関係が途切れないようにする。
function Obj9(name, age) {
    this.name = name;
    this.age = age;
}
Obj9.prototype = {
    constructor: Obj9,
    greet: function(){
        return `Hello my name is ${this.name}. I am ${this.age} years old.`
    }
}
const obj9 = new Obj9("ken",22);
console.log(`obj9.constructor : ${Obj9.constructor} `);
console.log(`obj9.prototype.constructor : ${Obj9.prototype.constructor} `);
console.log(`obj9 instanceof Obj9 : ${obj9 instanceof Obj9}`);

/* プロトタイプの確認 */
// instance演算子
// <Object> instanceof <Constructor>
function Obj10() {};
const obj10 = new Obj10();
console.log(`obj10 instanceof Obj10 : ${obj10 instanceof Obj10}`);
console.log(`obj10 instanceof Object : ${obj10 instanceof Object}`);
console.log(`obj10 instanceof Date : ${obj10 instanceof Date}`);

// isPrototypeOfメソッド
// <Prototype object>.isPrototypeOf(<Object>)
console.log(`Obj10.prototype.isPrototypeOf(obj10) : ${Obj10.prototype.isPrototypeOf(obj10)}`);
console.log(`Object.prototype.isPrototypeOf(obj10) : ${Object.prototype.isPrototypeOf(obj10)}`);
console.log(`Date.prototype.isPrototypeOf(obj10) : ${Date.prototype.isPrototypeOf(obj10)}`);

// Objectコンストラクタのメソッド
// assign(target, ...)
// create(proto, [, propertiesObject])
// defineProperty(obj, prop, descriptor)
// defineProperties(obj, props)
// freeze(obj)
// getOwnPrototyDescriptor(obj, prop)
// getOwnPropertyNames(obj)
// getOwnPropertySymbols(obj)
// getPrototypeOf(obj)
// is(value, value2)
// isExtensible(obj)
// isFrozen(obj)
// isSealed(obj)
// keys(obj)
// preventExtensions(obj)
// seal(obj)
// setPrototypeOf(obj, prototype)

// Object.prototypeのメソッド
// hasOwnProperty(key)
// isPrototypeOf(obj)
// propertyIsEnumerable(key)
// toString()
// toLocalString()
// valueOf()

/* Object.create()によるオブジェクトの継承 */
// 基本的な生成方法
const obj11 = {
    name: "ken",
    greet: function() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const obj12 = Object.create(obj11);
obj12.name = "ryou";
obj12.greet();

// プロトタイプのないオブジェクトの生成方法。純粋なハッシュテーブルを作成することができる。
const blank = Object.create(null);
console.log("Object.create(null) : ",blank);

// オブジェクトリテラルで生成したのと同じ空のオブジェクトを作成する場合は、引数にObject.prototypeを指定する
console.log("Object.create(Object.prototype) : ",Object.create(Object.prototype));

// アクセッサプロパティ
const obj13 = {
    _name: "Ken",
    get name() {
        return this._name;
    },
    set name(value) {
        const str = value.charAt(0).toUpperCase() + value.substring(1);
        this._name = str;
    },
}
console.log(`obj13.name : ${obj13.name}`);
obj13.name = "ryou"
console.log(`obj13.name = ryou, then obj13.name : ${obj13.name}`);
obj13._name = "hana"; // setter関数を使わずに、直接プロパティの値を変えている。
console.log(`obj13._name = hana, then obj13.name : ${obj13.name}`);

// データのカプセル化
// 即時関数を使うことで、データプロパティを外部から変更できなくすることができる。
const obj14 = (function() {
    const _name = "Ken";
    return {
        get name() {
            return _name;
        },
        set name(value) {
            const str = value.charAt(0).toUpperCase() + value.substring(1);
            _name = str;
        }
    };
})();
console.log(`obj14.name : ${obj14.name}`);
obj14._name = "ryo";
console.log(`obj14.name after obj14._name: ${obj14.name}`);

const obj15 = {
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    },
    set polarCoordinates(pc) {
      this.x = pc.r * Math.cos(pc.theta);
      this.y = pc.r * Math.sin(pc.theta);
    }
};

console.log(`obj15.r : ${obj15.r}`);
console.log(`obj15.theta : ${obj15.theta}`);
obj15.polarCoordinates = {r: 2, theta: Math.PI/4};
console.log(`obj15.x : ${obj15.x}`);
console.log(`obj15.y : ${obj15.y}`);