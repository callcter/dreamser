function naviClick(ele){    
    var navi = document.getElementById('navi');
    var naviLis = navi.getElementsByTagName('li');
    for(var i=0;i<naviLis.length;i++){
        naviLis[i].className = '';
    }
    ele.className = 'active';
    var linkDiv = document.getElementById('dropLink');
    linkDiv.style.display = 'none';
}

function dropDown(ele){
    var top = ele.offsetTop + ele.clientHeight;
    var left = ele.offsetLeft;
    var linkDiv = document.getElementById('dropLink');
    if(linkDiv.style.display == 'block'){
        linkDiv.style.display = 'none';
        return;
    }
    var links = linkDiv.getElementsByTagName('li');    
    for(var i=0;i<links.length;i++){
        links[i].addEventListener('click',function(){
            linkDiv.style.display = 'none';            
        },false)
    }
    linkDiv.style.top = top + 'px';
    linkDiv.style.left = left + 'px';
    linkDiv.style.display = 'block';
}

function phoneMenu(){
    var phoneMenu = document.getElementById('phoneMenu');
    var phoneLink = document.getElementById('phoneLink');
    if(phoneMenu.style.display == 'block'){
        phoneMenu.style.display = 'none';
        return;
    }
    var slider_lis = phoneMenu.getElementsByTagName('li');
    for(var i=0;i<slider_lis.length;i++){
        if(i==2){continue;}
        slider_lis[i].addEventListener('click',function(){
            for(var j=0;j<slider_lis.length;j++){
                slider_lis[j].className = '';
            }
            this.className = 'active';
            phoneMenu.style.display = 'none';
            phoneLink.style.display = 'none';
        },false)
    }
    phoneMenu.style.display = 'block';
}

function phoneLink(){
    var phoneLink = document.getElementById('phoneLink');
    var phoneMenu = document.getElementById('phoneMenu');
    if(phoneLink.style.display == 'block'){
        phoneLink.style.display = 'none';
        return;
    }
    var links = phoneLink.getElementsByTagName('li');
    for(var i=0;i<links.length;i++){
        links[i].addEventListener('click',function(){
            phoneLink.style.display = 'none';
            phoneMenu.style.display = 'none';
        },false)
    }
    phoneLink.style.display = 'block';
}