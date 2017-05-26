////面向对象编程=>代码高复用
//父类的定义与子类继承
;(function () {
    //借用闭包创建类
    var Superclass=function () {//闭包封闭
        //静态私有变量

        //静态私有方法

        //创建类
        function _superclass(name,newName) {
            //私有变量
            var privateName;
            //私有方法
            function privateFunc() {}
            //特权方法
            this.setName=function (newName) {
                privateName=newName;
            }
            //共有属性
            this.name=name;
            //共有方法

            //构造器(实例化对象初始化)
            this.setName(newName);
        }
        _superclass.prototype={
            shareFunc:function () {
                console.log('this is share func');
            }
        }
        //返回类
        return _superclass;
    }

//寄生组合继承(原型继承与构造函数继承组合)
//原型式继承与类式继承相似，但是原型式继承通过过度函数对象实现继承，更洁净，避免new执行多余的代码。

    function inheritObject(o/*继承的原型对象*/) {
        //创建过度函数对象
        function F() {};
        F.prototype=o;
        return new F();
    }
    function inheritPrototype(subclass,superclass) {
        //复制一份父类原型副本保存在变量中
        var p=inheritObject(superclass.prototype);
        //修正子类指向
        p.constructor=subclass;
        //设置子类原型
        subclass.prototype=p;
    }

    var subClass=function (name,secName) {
        Superclass().call(this,name);
        //子类新增属性
        this.secName=secName;
    }
//寄生式继承继承弗雷原型方法
    inheritPrototype(subClass,Superclass());
//子类新增原型方法
    subClass.prototype.getFullName=function () {
        console.log(this.name+','+this.secName);
    }

    var testObj=new subClass('thisTom','Pp');
    testObj.getFullName();
    testObj.shareFunc();
})();

////创建型设计模式
//抽象工厂模式
;(function () {
    //定义抽象基类 =>检测并继承
    var VehicleFactory=function (subClass,superClass) {
        //检测是否创建需要继承的簇类
        if(VehicleFactory[superClass]==='function'){
            //继承父类属性与方法
            function F () {};
            F.prototype=new VehicleFactory(superClass);
            subClass.constructor=superClass;
            subClass.prototype=new F();
        }else{
            return new Error('未创建改抽象类');
        }
    }
    //汽车抽象簇类
    VehicleFactory.Car=function () {
        this.name='car';
    }
    VehicleFactory.Car.prototype={}
    //火车抽簇类
    VehicleFactory.Train=function () {
        this.name='train';
    }
    VehicleFactory.Train.prototype={}
    //调用
    var Bwm=function () {
        this.name='bwm'
    }
    Bwm.prototype={};
    VehicleFactory(Bwm,'Car');
})();


