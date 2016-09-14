/**
 * Created by Administrator on 2016/7/27.
 */
function inheritObject(o){
    function F(){}
    F.prototype=o;
    return new F();
}

function inheritPrototype(subClass,supperClass){
    var p=inheritObject(supperClass.prototype);
    p.constructor=subClass;
    subClass.prototype=p;
}

function SupperClass(name){
    this.name=name;
    this.colors=["red","green","blue"];
}

SupperClass.prototype.getName=function(){
    return this.name;
};

function SubClass(name,time){
    SupperClass.call(this,name);
    this.time=time;
}

inheritPrototype(SubClass,SupperClass);
SubClass.prototype.getTime=function(){
    return this.time;
};

var instance1=new SubClass("book1",2015);
var instance2=new SubClass("book2",2016);

instance1.colors.push("black");
alert(instance1.colors);
alert(instance2.colors);

alert(instance2.getName());
alert(instance2.getTime());