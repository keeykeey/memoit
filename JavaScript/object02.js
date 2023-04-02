/* プロパティの属性 */

// データプロパティのプロパティディスクリプタ
  // value:
  // writable:
  // enumerable:
  // configurable:

// アクセッサプロパティのプロパティディスクリプタ
  // get: 
  // set:
  // enumerable:
  // configurable:

// Object.getOwnPropertyDescriptor
const ken = { name: "Ken" };
console.log(`Object.getOwnPropertyDescriptor(ken, "name") : ${Object.getOwnPropertyDescriptor(ken, "name")}`); // -> [object, Object]
console.log("Object.getOwnPropertyDescriptor(ken, 'name') : ",Object.getOwnPropertyDescriptor(ken, "name"));   // -> {value: Ken, writable: true, enumerable: true, configurable: true}
console.log(`Object.getOwnPropertyDescriptor({}, "name") : ${Object.getOwnPropertyDescriptor({}, "name")}`);
console.log(`Object.getOwnPropertyDescriptor(ken, "toString") : ${Object.getOwnPropertyDescriptor(ken, "toString")}`); // -> undefined

// Object.defineProperty
const obj1 = {};
Object.defineProperty(obj1, "name", {
    value: "Ken",
    writable: true,
    enumerable: false,
    configurable: true,
})
console.log("Object.getOwnPropertyDescriptor(obj01, 'name')",Object.getOwnPropertyDescriptor(obj1, "name"))

Object.defineProperty(obj1, "name", {
    value: "Ryou"
})
console.log("Object.getOwnPropertyDescriptor(obj01, 'name')",Object.getOwnPropertyDescriptor(obj1, "name")) // -> Ryou, true, false, true

Object.defineProperty(obj1, "name", {
    writable: false
})
console.log("Object.getOwnPropertyDescriptor(obj01, 'name')",Object.getOwnPropertyDescriptor(obj1, "name")) // -> Ryou, true, false, true

obj1.name = "Ken"
console.log(`obj1.name : ${obj1.name}`); // -> name property dosen't change cause writable is false

Object.defineProperty(obj1, "name", {
    value: "Ken"
})
console.log("Object.getOwnPropertyDescriptor(obj01, 'name')",Object.getOwnPropertyDescriptor(obj1, "name")) // -> name property changes to "Ken" though writable is false

const obj2 = {
    name: "Ken",
    age: 20,
    sayHello: function() {
        return `Hello my name is ${this.name} and I am ${this.age} years old.`
    }
};
Object.defineProperty(obj2, "sayHello", {
    enumerable: false
})
Object.keys(obj2).map( (p, key) => console.log(`${key + 1}'s property enumerable in obj2 : ${p}`));

Object.defineProperty(obj2, "age", {
    configurable: false
});
delete obj2.age;
console.log(`obj2.age after "delete obj2.age" when obj2.age's configurable is false : ${obj2.age} `);

// Object.defineProperties
const obj3 = Object.defineProperties({}, {
    _name: {
        value: "Ken",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    name: {
        get: function() {
            return this._name;
        },
        set: function(val) {
            const str = val.charAt(0).toUpperCase() + val.substring(1);
            this._name = val;
        },
        enumerable: true,
        configurable: true,
    },
    _age: {
        value: 22,
        writable: true,
        enumerable: true,
        configurable: true,
    },
    age: {
        get: function() {
            return this._age;
        },
        set: function(val) {
            this._age = val;
        },
        enumerable: false,
        configurable: false,
    }
});
console.log("Object.getOwnPropertyDescriptor(obj3,'name') :",Object.getOwnPropertyDescriptor(obj3, "name"));
console.log("Object.getOwnPropertyDescriptor(obj3,'age') :",Object.getOwnPropertyDescriptor(obj3, "age"));

// Object.create
const obj5 = {
    groupName : "baseball",
    sayGroupName: function() {
        console.log("I belong to baseball group")
    }
}

const obj6 = Object.create(obj5, {
    name: {
        value:"ken",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    age: {
        value: 22,
        writable: true,
        enumerable: false,
        configurable: true,
    }
});

console.log(`obj6.groupName : ${obj6.groupName}`);
obj5.sayGroupName();

// in演算子
// オブジェクト内に指定したプロパティが存在するかを調べる。その際、オブジェクトの独自のプロペティと継承されたプロパティの両方が対象となる。
console.log(`groupName in obj6 : ${"groupName" in obj6}`); // -> true
console.log(`name in obj6 : ${"name" in obj6}`); // -> true

// hasOwnPropertyメソッド
// 指定した名前のプロパティが存在した場合にtrueを返す。継承したプロパティの名前が指定された場合はfalseを返す。
console.log(`obj6.hasOwnProperty("groupName") : ${obj6.hasOwnProperty("groupname")}`);
console.log(`obj6.hasOwnProperty("name") : ${obj6.hasOwnProperty("name")}`);

// propertyIsEnumerableメソッド
// 指定した名前のプロパティが独自のプロパティでかつ列挙可能である時に、trueを返す。
console.log(`obj6.propertyIsEnumerable("groupName") : ${obj6.propertyIsEnumerable("groupName")}`); // -> false
console.log(`obj6.propertyIsEnumerable("name") : ${obj6.propertyIsEnumerable("name")}`); // -> true
console.log(`obj6.propertyIsEnumerable("age") : ${obj6.propertyIsEnumerable("age")}`);  // -> false
console.log(`Object.prototype.propertyIsEnumerable("toString") : ${Object.prototype.propertyIsEnumerable("toString")}`); // -> false

// for / in 文
for (let p in obj6) {
    console.log(`p in obj6 : ${p}`);
} // -> propertyが順番に表示される。

// Object.keys()
// 引数に指定したオブジェクトの独自のプロパティのうち、列挙可能なものを配列で返す。
console.log(`Object.keys(obj6) : ${Object.keys(obj6)}`);

// Object.getOwnPropertyNames()
// 引数に指定したオブジェクトの独自プロパティの全てを、列挙可能か不可能かに関わらず、配列で返す。
console.log(`Object.getOwnPropertyName(obj6) : ${Object.getOwnPropertyNames(obj6)}`);

/* オブジェクトのロック */
// Object.preventExtensionsメソッド
// 引数に指定したオブジェクトを拡張不可能にする。
const obj7 = {
    name: "ken",
}
Object.preventExtensions(obj7)
obj7.age = 22;
console.log(`obj7.age after Object.preventExtensions(obj7) : ${obj7.hasOwnProperty("age")}`); // -> false

// Object.sealメソッド
// 引数に指定したオブジェクトのプロパティの追加、削除、変更ができなくなる。
const obj8 = {
    name: "ken",
    age: "22"
}
Object.seal(obj8);
delete obj8.name;
console.log(`Object.getOwnPropertyNames(obj8) after "Object.seal(obj8)" and "delete obj8.name" : ${Object.getOwnPropertyNames(obj8)}`);

console.log(`Object.isSealed(obj8) : ${Object.isSealed(obj8)}`); // -> ture

/* Mixin */
// 継承を利用せずに、動的にオブジェクトのプロパティを他のオブジェクトに追加する

// example
function simpleMixin(target,source) {
    for (let property in source) {
        if (source.hasOwnProperty(property)) {
            target[property] = source[property];
        }
    }
}

// その点を踏まえ、以下が完全なmixin関数
function mixin(target, source) {
    const keys = Object.keys(source)
    keys.map( key=> {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target,key, descriptor);
    })
    return target;
}

const source2 = {
    _name: "ken",
    get name() {
        return this._name;
    }
};

let target2 = {};
target2 = mixin(target2, source2);
target2.name = "new name";
console.log(`target2.name : ${target2.name}`);

/* JSON */
// {name: "Ken", age: 22, marriage: false, data:[2,5,null]}
//  上をJSONデータにするには、下のように書く
// `{"name":"Ken","age":22,"marriage":false,"data":[2,5,null]}`
// Number  -> 12.345
// String  -> "abc"    (''は不可)
// Boolean -> true / false
// null    -> null
// Array   -> [1,"abc",true]
// Object  -> {"x":1,"y":"abc"}

// JSON.stringfy()
// 与えられた第一引数をJSONに変換する
console.log(JSON.stringify({}));  // -> `{}`
console.log(JSON.stringify(3.14)); // -> `3.14`
console.log(JSON.stringify("abc")); // -> `"abc"`
console.log(JSON.stringify(true)); // -> `true`
console.log(JSON.stringify([2,4,null])); // -> `[2,4,null]`
console.log(JSON.stringify({x:1, y:2})); // -> `{"x":1,"y":2}`

// replacerに配列を指定すると、作成するJSONにフィルターをかけることが出来る。
const json = JSON.stringify({
                x: 1,
                y: 2,
                z: 3
            },["x","z"]);
console.log(json); // x,zのみが表示される。

// JSON.parse()
// 第一引数に与えられたJSONをパースする
const jsonObject = `{
    "x":1,
    "y":2,
    "center":[0,0]
}`
const parsed = JSON.parse(jsonObject);
console.log("jsonObject",jsonObject)
console.log("parsed",parsed);

/* プロパティの設定にあたり、Symbolを利用する. */
// SymbolをObjectのプロパティに設定できる.
// Symbolで設定したプロパティはfor/inループやkeys、hasOwnProoertyNamesメソッドで走査されないので、外部から隠蔽することが出来る。
// またSymbolを利用することで、ライブラリの既存のメソッドと競合しないで独自メソッドを設定することが出来る。
Array.prototype[Symbol.for("shuffle")] = function() {
    const self = this;
    let length = self.length, tmp, idx;
    while(length) {
        idx = Math.floor(Math.random() * length--);
        tmp = self[idx];
        self[idx] = self[length];
        self[length] = tmp;
    }
    return this;
}
const array1 = [0,1,2,3,4,5];
console.log('array1[Symbol.for("shuffle")]() : ',array1[Symbol.for("shuffle")]());

/* { [式] : value } でのオブジェクトの記法 */
const obj9 = {}
for (i=0; i<2; i++) {
    obj9[[`prop${i}`]] = i;
}
console.log("obj9",obj9);

// propを用いて、簡略的にプロパティを定義する
// 変数propが宣言されている時、{ prop }は{ prop: prop} を意味する。
const prop = 2;
const obj10 ={ prop }
console.log("obj10",prop); // -> {prop: 2}

// メソッド定義の簡略記法 ( method() )
// 通常のメソッド定義
const obj11 = {
    name : "Ken",
    sayHello : function() {
        console.log("Hello")
    }
}

const obj12 = {
    name: "Ken",
    sayHello() {
        console.log("Hello")
    }
}

obj11.sayHello(); // -> Hello
obj12.sayHello(); // -> Hello

// ジェネレータ定義の簡略記法 { * generator() {} }
// プロパティの値がジェネレータ関数である場合の簡略記法
const obj13 = {
    * range(n) {
        for (let i=0; i<n; i++){
            yield i;
        }
    }
};
const it = obj13.range(10);
console.log(`it.next().value : ${it.next().value}`);
console.log(`it.next().value : ${it.next().value}`);
console.log(`it.next().value : ${it.next().value}`);