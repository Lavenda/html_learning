/**
 * Created by Lavenda on 2015/6/1.
 */

(function(){
    var n = "ime";
    function People(name){
        this._name = name;
    }

    People.prototype.say = function(){
        alert("hello"+this._name+n);
    };
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function(){
        superSay.call(this);
        alert("std hello"+this._name);
    };
    window.Student = Student;
}());

var s = new Student("Luke");
s.say();

