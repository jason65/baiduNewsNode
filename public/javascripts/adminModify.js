var tableName=sessionStorage.getItem('table');
var IdIndex=sessionStorage.getItem('dataID');
$(function()
{
	//date的 插件 begins
	jeDate({
		dateCell:"#datemarks",
		marks:['2015-01-03','2016-01-01','2016-01-10','2016-01-15','2016-02-15','2016-03-10','2016-04-18'],
		isTime:true, //isClear:false,
		minDate:"2014-09-19 00:00:00"
	})
	// date的 插件 ends
	
	$('#location').text(getTable()+"第"+IdIndex+'条');
	//设置这个是为了检查ID是否重复
	$('#location').attr('data-table',tableName);
	$('#location').attr('data-id',IdIndex);
	//设置这个是为了form表单提交的时候获取提交的值；
	$('#table').val(tableName);
	$.ajax({
		url:"/admin/modifyData",
		data:{table:tableName,id:IdIndex},
		type:'POST',
		success:function(data)
		{
			console.log(data);
			console.log(data[0].id);
			$('#id').val(data[0].id);
			$('#titile').val(data[0].titile);
			$('#property').val(data[0].property);
			$('#datemarks').val(data[0].releaseTime);
			$('#picture').val(data[0].pictureLink);
			$('#showPic').attr('src',data[0].pictureLink);
			$('#content').text(data[0].content);

		},
		error:function(data)
		{

		}
	});
})

/*
	获取操作数据表的名 
 */
function getTable()
{
	tableName=sessionStorage.getItem('table');
	switch (tableName)
	{
		case 'recomend':
			return '推荐';
		case 'baijia':
			return '百家';
		case 'local':
			return '本地';
		default:
			return "";
	}
}
/*
判断输入的图片的链接是否正切
 */
$('#picture').blur(function()
{
	var link=$('#picture').val();
	console.log(link);
	$('#showPic').attr("src",link);
});

function validate()
{
	return repeatID;
}