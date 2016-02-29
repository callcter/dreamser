$(function () {

    var lists,
        cityall = [],
        cityval = [],
        pagedata = [],
        jsondata = {
            'originatingCity': "",
            'destinationProvience': "",
            'destinationCity': "",
            'destinationCounty': "",
            // 'smallcategory': '',
            // 'volume': '',
            // 'weight': '',
            // 'doorDelivery': false,
            // 'homeDelivery': false,
            // 'install': false,
            // 'memberShow': '',
            // 'orderBy': 'subsidy'
        };

    // $.getJSON('/jeesite/wx/bijia/category', function (data) {

    //     for (var i = 0; i < data.length; i++) {
    //         var list = data[i].children;
    //         $('#pinleipar').append('<option value="' + data[i].value + '">' + data[i].text + '</option>');

    //     }
    //     ;


    // })

    //运行


    // $(document).on('change', '#pinleipar', function () {
    //     var that = this,
    //         val = $(this).val();
    //     if (val != '') {

    //         $.getJSON('/jeesite/wx/bijia/category', function (data) {
    //             if (data) {
    //                 $('#xialdchid').show();
    //                 for (var i = 0; i < data.length; i++) {

    //                     if (data[i].value == val) {
    //                         var list = data[i].children;
    //                         break;
    //                     }
    //                 }
    //                 childdata(list);
    //             }
    //             ;

    //         })
    //     } else {
    //         $('#xialdchid').hide();
    //     }

    // })

    $('.citys').on('click', function (e) {
        e.stopPropagation();
        $(this).siblings('.downboxs').show();
        $(this).closest('.sear-item').siblings('.sear-item').find('.downboxs').hide();
        if ($(this).hasClass('mddsy')) {
            $('.cunst li').eq(0).addClass('cur').siblings('li').removeClass('cur');
            citydata(cityData3, 'mdddowna');

        }
    })
    clickout('downboxs', function () {
        $('.downboxs').hide();
    })

    $('.cunst li').on('click', function () {

        var ind = $(this).index();
        if (ind == 0) {
            $(this).addClass('cur').siblings('li').removeClass('cur');
            $('.cunst li').attr('val', '');
            citydata(cityData3, 'mdddowna');
        } else if (ind == 1) {
            $('.cunst li').eq(2).attr('val', '');
            if ($(this).attr('val') != '') {
                $(this).addClass('cur').siblings('li').removeClass('cur');
                lists = listdata(cityData3, $(this).attr('val'));
                if (lists) {
                    citydata(lists, 'mdddownb');
                }
            } else {

            }
        } else if (ind == 2) {

            if ($(this).attr('val') != '') {
                $(this).addClass('cur').siblings('li').removeClass('cur');
                listss = listdata(lists, $(this).attr('val'));
                if (listss) {
                    citydata(listss, 'mdddownb');
                }
            } else {

            }
        }
    })

    $(document).on('click', '.mdddowna li', function (e) {
        e.stopPropagation();
        $('.cunst li').eq(1).addClass('cur').siblings('li').removeClass('cur');
        $('.cunst li').eq(1).attr('val', $(this).attr('val'));
        var val = $(this).attr('val'),
            html = $(this).html(),
            data = cityData3;
        lists = listdata(data, val);
        cityall[0] = html;
        cityval[0] = val;
        if (lists) {
            citydata(lists, 'mdddownb');
        } else {
            $(this).closest('.sear-item').children('span').attr('val', cityval.join('-'));
            $(this).closest('.sear-item').children('input').val(cityall.join('-'));
            $(this).closest('.downboxs').hide();
        }


    })
    $('.qzint').on('keyup', function () {
        var num = $(this).val();
        if (isNaN(num)) {
            $(this).val('');
        }
    })
    function hisnull(val) {
        if (val == undefined) {
            val = '';
        } else {
            val = val;
        }
        return val;
    }

    function isnull(val) {
        if (val == undefined) {
            val = '--';
        } else {
            val = '<i class="yen">&yen</i> ' + val;
        }
        return val;
    }

    function hasnull(val) {
        if (val == undefined) {
            val = '';
        } else {
            val = '<span>安装价：<i class="yen">&yen</i>' + val + '/组</span>';
        }
        return val;
    }

    $(document).on('click', '.mdddownb li', function (e) {
        e.stopPropagation();
        $('.cunst li').eq(2).addClass('cur').siblings('li').removeClass('cur');
        $('.cunst li').eq(2).attr('val', $(this).attr('val'));
        var val = $(this).attr('val'),
            html = $(this).html();
        lists = listdata(lists, val);
        cityall[1] = html;
        cityval[1] = val;
        if (lists) {
            citydata(lists, 'mdddownc');
        } else {
            $(this).closest('.sear-item').children('span').attr('val', cityval.join('-'));
            $(this).closest('.sear-item').children('input').val(cityall.join('-'));
            $(this).closest('.downboxs').hide();
        }

    })

    $(document).on('click', '.mdddownc li', function (e) {
        e.stopPropagation();

        var val = $(this).attr('val'),
            html = $(this).html();

        $('.cunst li').attr('val', '');
        $(this).closest('.downboxs').hide();
        cityall[2] = html;
        cityval[2] = val;

        $(this).closest('.sear-item').children('span').attr('val', cityval.join('-'));
        $(this).closest('.sear-item').children('input').val(cityall.join('-'));
    })


    $(document).on('click', '.sfddown li', function () {
        $(this).addClass('cur').siblings('li').removeClass('cur');
        var val = $(this).attr('val'),
            html = $(this).html();
        $(this).closest('.sear-item').children('input').val(html);
        $(this).closest('.sear-item').children('span').attr('val', val);
        $(this).closest('.downboxs').hide();
    })

    $('.tijiaobtns').on('click', function () {
        $('#shifaditishi span').hide();
        $('#mudiditishi span').hide();

        var sfd = $('#sfdspan').attr('val'),
            mdd = $('#mddspan').attr('val'),
            mdds = mdd.split('-');
            originating=$('#sfdinp').val();
            destination=$('#mddinp').val();


        var originatingCity = sfd;
        var destinationProvience = mdds[0];
        var destinationCity = mdds[1];
        var destinationCounty = mdds[2];
        if(!originatingCity){
            $('#shifaditishi span').show();
            return false;
        }
        if(!destinationProvience||!destinationCity){
            $('#mudiditishi span').show();
            return false;
        }
        window.location.href='http://fuwu.jiavva.com/jeesite/bijia/?originatingCity='+originatingCity+'&destinationProvience='+destinationProvience+'&destinationCity='+destinationCity+'&destinationCounty='+destinationCounty+'&originating='+originating+'&destination='+destination;



    })

    $('#paixus li').on('click', function () {
        var val = $(this).attr('px');

        jsondata.orderBy = val;
        $(this).addClass('cur').siblings('li').removeClass('cur');
        $('.databox').html('<div class="loading"><span><img src="/jeesite/weixin/static/libs/layerpc/skin/default/loading-0.gif"></span></div>');
        $.post('/jeesite/wx/bijia/query', jsondata, function (data) {
            $('.databox').html('');
            if (data.success == true) {
                var data = data.data;
                wldata(data.memberShow);
                showdataall(data);
            }
        }, 'json');
    })

    $('.tibtns').on('click', function () {
        var plid = '',
            arr = [];
        var tizhi = $('#hw').val(),
            tz = $('#zl').val(),
            need1 = $('#xyaz').attr('sta'),
            need2 = $('#smjh').attr('sta'),
            need3 = $('#shdj').attr('sta');
        plid = $('#pinleichid').val();

        $('.wlhas').each(function (i, el) {
            var vals = $(el).children('span').html();
            arr.push(vals);
        })

        if (!isNaN(tizhi) && !isNaN(tz)) {
            if (plid) {
                jsondata.smallcategory = plid;
            }
            ;
            jsondata.volume = tizhi;
            jsondata.weight = tz;
            jsondata.doorDelivery = need2;
            jsondata.homeDelivery = need3;
            jsondata.install = need1;
            jsondata.memberShow = arr.join(',');
            $('.databox').html('<div class="loading"><span><img src="/jeesite/weixin/static/libs/layerpc/skin/default/loading-0.gif"></span></div>');
            $.post('/jeesite/wx/bijia/query', jsondata, function (data) {
                $('.databox').html('');
                if (data.success == true) {
                    var data = data.data;
                    wldata(data.memberShow);
                    data.totalCompany=arr.length;
                    showdataall(data);
                }
            }, 'json');
        }


    })

    $('.zenzhi input').on('change', function () {
        if ($(this).prop('checked') == true) {
            $(this).parent('.zenzhi').attr('sta', true);
        } else {
            $(this).parent('.zenzhi').attr('sta', false);
        }

    })

    $(document).on('change', '.wlbtnr', function () {

        $(this).toggleClass("wlhas");

    })

    // 获取同val的list
    function listdata(data, val) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].value == val) {
                var list = data[i].children;
                break;
            }
        }
        ;
        return list;
    }

    function clickout(str, callback) {
        var elements = str.split(',');
        $(document).on('click', function (event) {
            var e = event || window.event;
            var elem = e.srcElement || e.target;
            while (elem) {
                for (var i = 0, len = elements.length; i < len; i++) {
                    if (elem.className == elements[i]) {
                        return;
                    }
                }
                elem = elem.parentNode;
            }

            setTimeout(function () {
                callback();
            }, 50)
        });
    }

    // 物流
    function wldata(data) {
        $('.wuliu').html('');
        for (var i = 0; i < data.length; i++) {

            $('.wuliu').append('<label val="' + data[i].memberNo + '" class="checkboxall wlbtnr cf"><input type="checkbox"><span>' + data[i].memberName + '</span></label>');
        }
        ;
    }

    function haszx(val) {
        if (val == undefined || val == '') {
            val = '';
        } else {
            val = '<span style="margin-bottom:6px;">支线价：<i class="yen">&yen</i>' + val + '/立方米</span>';
        }
        return val;
    }

    function haszxjt(val) {
        if (val == undefined) {
            val = '';
        } else {
            val = '<span style="margin-bottom:6px;">支线价：' + val + '</span>';
        }
        return val;
    }


    // 数据输出
    function showdataall(data) {
        $('.databox').html('');

        var list = data.list,
            wls = data.totalCompany,
            fas = data.totalService,
            sta = data.isTongCheng;


        $('.wlsl').html(wls);
        $('.fasl').html(fas);

        fydata(list, sta);
    }

    function zdata(list, sta) {

        if (!sta) {
            var bfb = 66;
            if (list.length > 0) {
                $('.databox').html('');
                for (var i = 0; i < list.length; i++) {
                    $('.databox').append('<div class="data-item cf"><table><tr><td class="name"><span>' + list[i].name + '</span></td><td class="addr"><span style="margin-bottom:6px;">从：' + list[i].originatingCity + '</span><span>到：' + list[i].destinationCity + '</span></td><td class="shixiao"><span style="margin-bottom:6px;">' + list[i].limitTime + '</span><span>' + hisnull(list[i].serviceName) + '</span></td><td class="buzhu"><span style="margin-bottom:6px;">轻泡货：￥' + list[i].lightPrice + '/立方米</span><span style="margin-bottom:6px;">重泡货：￥' + list[i].heavyPrice + '/立方米</span><span style="margin-bottom:6px;">重货：￥' + list[i].heavyCargoPrice + '/公斤</span><span style="margin-bottom:6px;">保底价：￥' + list[i].initPrice + '/票</span>' + haszx(list[i].branchPrice) + '' + haszxjt(list[i].branchUrl) + '' + hasnull(list[i].installPrice) + '<div class="tipsbox"><span class="tips" style="margin-top:' + bfb + '%">已补贴' + list[i].subsidy + ' <i class="sjx"></i></span></div></td><td class="jiaoyi"><span>已成交<i>' + list[i].dealCount + ' </i>笔</span></td><td class="feiyong"><span>' + isnull(list[i].totalPrice) + '</span></td><td class="caozuo"><a href="http://fuwu.jiavva.com/jeesite/f/hw/ordercenter/form" target="_blank"><span class="cuozuobtn">下单</span></a></td></tr></table></div>');
                }
                ;
            } else {
                $('.databox').append('<div class="data-item cf"><span class="nulldata">该区域数据为空</span></div>');
            }
        } else {
            var bfb = 30;
            if (list.length > 0) {
                $('.databox').html('');
                for (var i = 0; i < list.length; i++) {
                    $('.databox').append('<div class="data-item cf"><table><tr><td class="name"><span>' + list[i].name + '</span></td><td class="addr"><span style="margin-bottom:6px;">从：' + list[i].originatingCity + '</span><span>到：' + list[i].destinationCity + '</span></td><td class="shixiao"><span style="margin-bottom:6px;">' + list[i].limitTime + '</span><span>' + hisnull(list[i].serviceName) + '</span></td><td class="buzhu"><span style="margin-bottom:6px;">保底价：￥' + list[i].initPrice + '/票</span>' + haszx(list[i].branchPrice) + '' + haszxjt(list[i].branchUrl) + '' + hasnull(list[i].installPrice) + '<div class="tipsbox"><span class="tips" style="margin-top:' + bfb + '%">已补贴' + list[i].subsidy + ' <i class="sjx"></i></span></div></td><td class="jiaoyi"><span>已成交<i>' + list[i].dealCount + ' </i>笔</span></td><td class="feiyong"><span>' + isnull(list[i].totalPrice) + '</span></td><td class="caozuo"><a href="http://fuwu.jiavva.com/jeesite/f/hw/ordercenter/form" target="_blank"><span class="cuozuobtn">下单</span></a></td></tr></table></div>');
                }
                ;
            } else {
                $('.databox').append('<div class="data-item cf"><span class="nulldata">该区域数据为空</span></div>');
            }
        }

    }


    function childdata(data) {
        $('#pinleichid').html('');
        for (var i = 0; i < data.length; i++) {

            $('#pinleichid').append('<option value="' + data[i].value + '">' + data[i].text + '</option>');
        }
        ;

    }

    function citydata(data, name) {
        $('.mddcon').html('');
        $('.mddcon').append('<ul class="mdddown ' + name + '"></ul>');
        $('.' + name).html('');

        for (var i = 0; i < data.length; i++) {
            $('.' + name).append('<li val="' + data[i].value + '">' + data[i].text + '</li>')
        }
        ;
    }


    function fydata(data, sta) {
        var k = data,
            pgnum = 6;//每页显示的数量
        var x = [],
            allData = [];
        if (k.length > pgnum) {
            for (var i = 0; i < k.length; i++) {
                if (parseInt(i / pgnum) == (i / pgnum)) {
                    if (i != 0) {
                        allData.push(x);
                        x = new Array();
                        x.push(k[i]);
                        if (i == k.length - 1) {
                            allData.push(x);
                        }
                    } else {
                        x.push(k[i]);
                    }
                } else {
                    x.push(k[i]);
                    if (i == k.length - 1) {
                        allData.push(x);
                    }
                }
            }

            getpage(1, allData, sta);
        } else {
            allData[0] = data;
            zdata(allData[0], sta);
        }


    }

    function getpage(curr, data, sta) {

        zdata(data[curr - 1], sta);

        laypage({
            cont: 'pages',
            first: false,
            last: false,
            pages: data.length,
            curr: curr || 1,
            jump: function (obj, first) {
                if (!first) {
                    getpage(obj.curr, data, sta);

                }
            }
        });


    };

})