//借用闭包创建类
var Subclass=function () {//闭包封闭
    //静态私有变量
    var staticName='subclass';
    //静态私有方法
    function checkName(name) {
        console.log(name);
    }
    //创建类
    function _subclass(newName) {
        //私有变量
        var name;
        //私有方法
        function privateFunc() {
            
        }
        //特权方法
        this.setName=function (newName) {
            name=newName;
        }
        //共有属性
        //共有方法

        //构造器(实例化对象初始化)
        this.setName(newName);
    }
    _subclass.prototype={
        shareFunc:function () {
            
        }
    }
    //返回类
    return _subclass();
}


