//删除数组元素
//arrayObject.slice(start,end)：从已有的数组中返回选定的元素
//start：必需，规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
//end：可选，规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素
//function.apply(obj,args),obj：这个对象将代替Function类里this对象；args：这个是数组，它将作为参数传给Function
Array.prototype.removes = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
//删除内容为item的元素
Array.prototype.remove = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item) {
            this.splice(i, 1);
        }
    }
}
//得到编号为id的元素
Array.prototype.getItem = function (id) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].identity == id) {
            return this[i];
        }
    }
}

//样式操作
function hasClass(target, name) {
    return target.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
}

function removeClass(target, name) {
    if (hasClass(target, name)) {
        target.className = target.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ');
    }
}

function addClass(target, name) {
    if (!hasClass(target, name)) {
        target.className += " " + name;
    }
}