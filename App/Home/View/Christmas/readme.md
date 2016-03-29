圣诞活动->
    christmas.html:
    
        圣诞树 click->
        
            game.html: 5s倒计时，然后开始游戏，游戏结束，弹出->
            
                结果弹层:
                
                    关闭按钮 click->
                        rockWish.html
                    去许愿 click->
                        writeWish.html
                            许愿完成->
                                shareWish.html
                    再玩一次 click->
                        页面刷新，重新开始游戏
                        
                
        "去摇一摇吧" click->
        
            rockWish.html
            
我的->
    mine.html:
        头像点击->account.html
        
许愿广场->
    wishes.html:
        许愿池、许愿榜点击切换
        七中愿望点击切换
        数据都是异步加载
        
        详情页->
            wishDetail.html
        举报->
            report.html
        
        底部关注公众号->
            public.html
            
圣诞游戏说明：
    1.进入页面倒计时5秒开始游戏（文档中没有，我自己加的，页面载入需要一定的时间，如果直接开始会计时不准）
    2.倒计时60秒，出现100个灯,24个位置，随机生成
    3.每个灯闪现存在的时间为1秒（尝试过0.6秒，发现根本点不到，所以改成1秒）
    4.游戏结束，弹出结果层，显示游戏结果