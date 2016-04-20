function TreeList(){
    var cover = document.getElementById("cover");
    var video = document.getElementById("video");
    var index1,index2,flag1=0,flag2=0;
    var tree = document.getElementById("treeList");
    var titleLevel1 = tree.getElementsByClassName("title-level1");
    var level1 = tree.getElementsByClassName("level1");
    for(var i=0;i<titleLevel1.length;i++){
        titleLevel1[i].addEventListener("click",function(){
            for(var m in titleLevel1){
                if(titleLevel1[m]==this){
                    index1 = parseInt(m);
                }
            }
            var titleLevel2 = level1[index1].getElementsByClassName("title-level2");
            var level2 = level1[index1].getElementsByClassName("level2");
//            if(level2[0].style.display=="none"){
//                flag1 = 0;
//            }else{
//                flag1 = 1;
//            }
            var allLevel3 = document.getElementsByClassName("level3");
            for(var j=0;j<allLevel3.length;j++){
                allLevel3[j].style.display = "none";
            }
            var allLevel2 = document.getElementsByClassName("level2");
            for(var j=0;j<allLevel2.length;j++){
                allLevel2[j].style.display = "none";
            }
            for(var j=0;j<titleLevel2.length;j++){
                titleLevel2[j].addEventListener("click",function(){
                    for(var n in titleLevel2){
                        if(titleLevel2[n]==this){
                            index2 = parseInt(n);
                        }
                    }
                    var level3 = level2[index2].getElementsByClassName("level3");
//                    if(level3[0].style.display=="none"){
//                        flag2 = 0;
//                    }else{
//                        flag2 = 1;
//                    }
                    var allLevel3 = document.getElementsByClassName("level3");
                    for(var k=0;k<allLevel3.length;k++){
                        allLevel3[k].style.display = "none";
                    }
                    for(var k=0;k<level3.length;k++){
                        //显示封面
                        level3[k].addEventListener("click",function(){
                            var content = this.innerHTML;
                            var designations = content.split("-");
                            var designation = designations[0];
                            var src = designation+"/"+content+"/"+content+".jpg";
                            var img = document.createElement("img");
                            img.setAttribute("src",src);
                            cover.innerHTML = "";
                            cover.appendChild(img);
                            var source1 = document.createElement("source");
                            var source1Src = designation+"/"+content+"/"+content+".mp4"
                            source1.setAttribute("src",source1Src);
                            video.appendChild(source1);

                            var source2 = document.createElement("source");
                            var source2Src = designation+"/"+content+"/"+content+".avi"
                            source2.setAttribute("src",source2Src);
                            video.appendChild(source2);

                            var source3 = document.createElement("source");
                            var source3Src = designation+"/"+content+"/"+content+".mkv"
                            source3.setAttribute("src",source3Src);
                            video.appendChild(source3);

                        });

                        if(flag2==0){
                            level3[k].style.display = "block";
                        }else{
                            level3[k].style.display = "none";
                        }
                    }
                });
                if(flag1==0){
                    level2[j].style.display = "block";
                }else{
                    level2[j].style.display = "none";
                }
            }
        });
    }
}