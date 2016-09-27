var indexLi=0;
$(function () {
	
	sessionStorage.setItem("table",'recomend');	
	$('#location').attr('data-table','recomend');
	// getTableData('recomend');

});
/*
当点击最上面的链接的时候；
 */
$('#collapse .navbar-nav li').on('click',function()
{
	// console.log(this);
	// var indexLi=$(this).index();
	indexLi=$('li').index(this);
	var i=0;
	for(i=0;i<4;i++)
	{
		$('#collapse .navbar-nav li').eq(i).removeClass('active');
	}
	$(this).addClass('active');

	// console.log(indexLi);
	if(indexLi<3)
	{
		var array=['recomend','baijia','local'];
		$('#location').text($(this).text());
		// var location=document.getElementById('location');
		// location.data.table=array[indexLi];
		// $('#location').data('table',array[indexLi]);
		// console.log(array[indexLi])
		$('#location').attr('data-table',array[indexLi]);
		// var location=document.getElementById('location');
		// console.log(location.dataset.table);
		// console.log(array[indexLi])
		sessionStorage.setItem("table",array[indexLi]);
		// console.log(sessionStorage.getItem('table'));
		// getTableData(array[indexLi]);
		$.post('/admin/table',{tablesName:array[indexLi]},function(data)
		{
			// console.log(data);
			getData(data.data);
		});
		
		
	}
	else
	{
		location.href='/admin/login';
	}
	
	
});

/*
点击修改的按钮的时候；
 */
$('.modifyBtn').click(function()
{
	var ModTableName=$('#location').attr('data-table');
	var btnIndex=$('.modifyBtn').index($(this));
	var idIndex=$(".contentID").eq(btnIndex).text();
	console.log('修改的数据的ID是：'+idIndex);
	sessionStorage.setItem('dataID',idIndex);
	console.log(sessionStorage.getItem('dataID'));
	// $.post('/admin/modify',{table:ModTableName,id:idIndex});
	window.open('/admin/modify');
	// $.ajax({
	// 	type:"POST",
	// 	url:"/admin/modify",
	// 	data:{table:ModTableName,id:idIndex},
	// 	complete:function(){location.href ="/admin/modify"}//跳转页面
	// 	});
});


/*
点击删除的按钮的时候；
 */
$('.deleteBtn').click(function()
{
	var delTableName=$('#location').attr('data-table');
	var btnIndex=$('.deleteBtn').index($(this));
	var idIndex=$(".contentID").eq(btnIndex).text();
	// sessionStorage.setItem('dataID',btnIndex+1);
	console.log("删除的数据表的名字是："+delTableName);
	console.log("删除表的ID是："+idIndex);
	if(confirm("确定要删除该数据吗？"))
	{
		$.ajax({
			url:'/admin/delData',
			data:{table:delTableName,id:idIndex},
			type:'POST',
			success:function(data)
			{
				console.log(data);
				$('.contentTr').eq(btnIndex).remove();
			},
			error:function(data)
			{
				console.log(data);
			}
		});
		// console.log('删除数据成功！')
	}
});



/*
复制 n个模版来加载新闻；n的个数取决于从数据库查找的数据的条目的个数；
！！！！！！！！！！这个是在初次加载数据的时候使用
 */
function cloneTemp(trLength)
{
  var p=0;
  var ele=$('.contentTr');
  // console.log(ele);
  for(p=0;p<trLength-1;p++)
  {
     $('#contentTable').append(ele.clone(true));
     ele.clone(true).trigger('click');
  }
  // console.log(p);
}

/*
复制 n个模版来加载新闻；这个是在点击上面的链接切换的时候用的；
 */
function cloneTempSwtich(trLength)
{
  var p=0;
  var ele=$('.contentTr').eq(0);
  // console.log(ele);
  for(p=0;p<trLength;p++)
  {
     $('#contentTable').append(ele.clone(true));
      ele.clone(true).trigger('click');
  }
  // console.log(p);
}

// function getTableData(tableName)
// {
// 	$.ajax({
// 			type:'POST',
// 			url:"../php/adminIndex.php",
// 			data:{table:tableName},
// 			dataType:'json',
// 			success:function (data) {
// 				//获取到的数据;有trLength行；
// 				var trLength=data.length;
// 				console.log("获取的数据行有："+trLength);
// 				//实际中的表格,有contentLength行；
// 				var contentLength=$('.contentTr').length;
// 				console.log("数据表中有："+contentLength);
// 				var itemIndex=0;
// 				if(trLength>contentLength)
// 				{
// 					cloneTempSwtich(trLength-contentLength);
// 				}
// 				else if(trLength<contentLength)
// 				{
// 					var trcount=contentLength-1;
// 					for(trcount;trcount>=trLength;trcount--)
// 					{
// 						$('.contentTr').eq(trcount).remove();
// 					}
// 				}	        
// 		        for(itemIndex=0;itemIndex<trLength;itemIndex++)
// 		        {
// 		          $('.contentID').eq(itemIndex).text(data[itemIndex].id);
// 		          $('.contentTitile').eq(itemIndex).text(data[itemIndex].titile);
// 		          $('.contentTime').eq(itemIndex).text(data[itemIndex].releaseTime);
// 		          // console.log(data[itemIndex].pictureLink);
// 		          $('.contentLink .imgSrc').eq(itemIndex).attr({src:data[itemIndex].pictureLink});
// 		          // $('.contentLink').eq(itemIndex).text(data[itemIndex].pictureLink);
// 		          if(data[itemIndex].property.toString()=="")
// 		          {
// 		             $('.conteentType').eq(itemIndex).text("暂无");
// 		          }
// 		          else
// 		          {
// 		             $('.conteentType').eq(itemIndex).text(data[itemIndex].property);
// 		          }
		         
// 		        }

// 			},
// 			error:function (data) {
// 				console.log(data);
// 			}
// 		});
// }
function getData(data)
{
	var trLength=data.length;
	console.log("获取的数据行有："+trLength);
	//实际中的表格,有contentLength行；
	var contentLength=$('.contentTr').length;
	console.log("数据表中有："+contentLength);
	var itemIndex=0;
	if(trLength>contentLength)
	{
		cloneTempSwtich(trLength-contentLength);
	}
	else if(trLength<contentLength)
	{
		var trcount=contentLength-1;
		for(trcount;trcount>=trLength;trcount--)
		{
			$('.contentTr').eq(trcount).remove();
		}
	}	        
    for(itemIndex=0;itemIndex<trLength;itemIndex++)
    {
      $('.contentID').eq(itemIndex).text(data[itemIndex].id);
      $('.contentTitile').eq(itemIndex).text(data[itemIndex].titile);
      $('.contentTime').eq(itemIndex).text(data[itemIndex].releaseTime);
      // console.log(data[itemIndex].pictureLink);
      $('.contentLink .imgSrc').eq(itemIndex).attr({src:data[itemIndex].pictureLink});
      // $('.contentLink').eq(itemIndex).text(data[itemIndex].pictureLink);
      if(data[itemIndex].property.toString()=="")
      {
         $('.conteentType').eq(itemIndex).text("暂无");
      }
      else
      {
         $('.conteentType').eq(itemIndex).text(data[itemIndex].property);
      }
     
    }
}