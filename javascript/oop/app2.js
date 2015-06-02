/**
 * Created by Lavenda on 2015/6/1.
 */


function Person(name){
    var _this = {};
    _this._name = name;
    _this.sayHello = function(){
        alert("hello");
    }
    return _this;
}


function Teacher(){
    var _this = Person();
    var superHello = _this.sayHello;
    _this.sayHello = function(){
        superHello();
        alert("t hello");
    };
    return _this;
}


var t = Teacher();
t.sayHello();