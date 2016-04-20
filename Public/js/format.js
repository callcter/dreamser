function numCommaFormat(num){
    if(num){
        num = Math.ceil(num*100)/100;
        var str = num.toString();
        var tail = str.split('.')[1];
        var main = str.split('.')[0];
        main = main.split('').reverse().join('');
        var newstr = '';
        for(var i=0;i<main.length;i+=3){
            newstr += main.substring(i,i+3);
            if(i!=Math.ceil(main.length/3)-1){
                newstr += ',';
            }
        }
        newstr = newstr.split('').reverse().join('');
        if(tail==undefined){
            newstr += '.00';
        }else{
            switch(tail.length){
                case 1:
                    newstr += '.'+tail+'0';
                    break;
                case 2:
                    newstr += '.'+tail;
            }
        }
        return newstr;
    }else{
        return num;
    }
}