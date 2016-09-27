var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
var imgw=w-20;
var imgl=w-10;//每次css-->left的距离
var lengthImg=5;//一共5张图片
var news=4;//上下滚动的新闻的数量，共4条新闻；
var i=0,q=0;//设置固定的初始变量
$('document').ready(function()
  {
    $('#swiper-wrap-img1').width(imgw);
    $('#swiper-wrap-img2').width(imgw);
    $('#swiper-wrap-img3').width(imgw);
    $('#swiper-wrap-img4').width(imgw);
    $('#swiper-pagination span').eq(0).addClass('paginationSwitchActive');
    //轮询图片的拷贝和粘贴 begins
    var imgFirst=$('#swiper-wrapper a').first().clone();
    // console.log(imgFirst);
    $('#swiper-wrapper').append(imgFirst);
    $('.times').each(function()
    {
      var timestr=$(this).text();
      console.log(timestr);
      var newTime=timeBettwen(timestr);
      $(this).text(newTime.toString());
    });
    
});
/*
这个函数主要在改变窗口大小的时候，通过获取窗口的大小，改变图片的大小
 */
$(window).resize(function()
   {
     w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      imgw = w - 20;
      imgl=w-10;
      $('#swiper-wrap-img1').width(imgw);
      $('#swiper-wrap-img2').width(imgw);
      $('#swiper-wrap-img3').width(imgw);
      $('#swiper-wrap-img4').width(imgw);

  });
/*
这个是轮询图片的函数
 */
function NextPIc() {

     //First Make the s
     i++;
     if (i == lengthImg) {
         $('#swiper-wrapper').css({ left: '0px' });
         i = 1;
     }

     $('#swiper-wrapper').animate({ left: String(-imgl*i) + 'px' }, 500);
     $('#swiper-pagination span').eq(i).addClass('paginationSwitchActive').siblings().removeClass('paginationSwitchActive');
     if (i == lengthImg - 1) {
         $('#swiper-pagination span').eq(0).addClass('paginationSwitchActive').siblings().removeClass('paginationSwitchActive');
     }
    // console.log(imgl*i);

 }
/*
这个是使上下滚动新闻的函数
 */
function hotTopic()
{
  q++;
  if(q==4)
  {
    $('#hotUl').css({ marginTop: '0px' });
    q=0;
  }
  $('#hotUl').animate({ marginTop: String(-20*q) + 'px' }, 500);
}
 var movePic = setInterval(NextPIc, 5000);
 var moveNews = setInterval(hotTopic, 3000);

/*
复制 n个模版来加载新闻；n的个数取决于从数据库查找的数据的条目的个数
 */
function cloneTemp(temCount)
{
  var p=0;
  var ele=$('.linkMainContent').eq(0);
  // console.log(ele);
  for(p=0;p<temCount;p++)
  {
     $('#linkcontenCon').append(ele.clone());
  }
  // console.log(p);
}
/*
计算两个日期之间的时间差，以分钟显示差值
 */
function timeBettwen(timestr)
{
  var time1=new Date(timestr);
  var time2=new Date();
  var timespan=time2-time1;
  var timeMin=timespan/60000;
  if(timeMin>1440)
  {
    return "一天以前";
  }
  else if(timeMin<60)
  {
    return Math.floor(timeMin).toString()+"分钟以前";
  }
  else
  {
    return Math.floor(timeMin/60).toString()+"小时以前";
  }
}


$('#link-recommend').click(function()
{
  $('#linkBaijia').removeClass("selected");
  $('#linkLocal').removeClass("selected");
  $('#link-recommend').addClass("selected");
  $.post("/table",{tableName:'recomend'},function(data)
    {
       loadData(data.data);
    });
});


$('#linkBaijia').click(function()
{

  $('#link-recommend').removeClass("selected");
  $('#linkLocal').removeClass("selected");
  $('#linkBaijia').addClass("selected");
  // loadRecomend('baijia');
   $.post("/table",{tableName:'baijia'},function(data)
    {
       loadData(data.data);
    });
});

$('#linkLocal').click(function()
{
  $('#link-recommend').removeClass("selected");
  $('#linkBaijia').removeClass("selected");
  $('#linkLocal').addClass("selected");
  $.post("/table",{tableName:'local'},function(data)
    {
       loadData(data.data);
    });
});


function loadData(data)
{
  var temCount=data.length;
  var divCount=$('.linkMainContent').length;
  console.log('当前的容器有:'+divCount+'个');
  console.log('当前的数据有:'+temCount+'行');
  if(temCount>divCount)
  {
    cloneTemp(temCount-divCount);
  }
  else if(temCount<divCount)
  {
    for(divCount;divCount>temCount;divCount--)
    {
      $('.linkMainContent').eq(divCount-1).remove();
    }
  }
  var itemIndex=0;
  var timeCal;
  for(itemIndex=0;itemIndex<temCount;itemIndex++)
  {
    $('.mainImgSrc').eq(itemIndex).attr({src:data[itemIndex].pictureLink});
    $('.description').eq(itemIndex).text(data[itemIndex].titile);
    timeCal=data[itemIndex].releaseTime.toString();
    $('.times').eq(itemIndex).text(timeBettwen(timeCal));
    if(data[itemIndex].property.toString()=="")
    {
       $('.newsType').eq(itemIndex).addClass("newsTypeHide");
    }
    else
    {
       $('.newsType').eq(itemIndex).text(data[itemIndex].property);
    }
   
  }
}