var tableName=sessionStorage.getItem('table');
var repeatID=false;
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
	
	$('#location').text(getTable());
	//设置这个是为了检查ID是否重复
	$('#location').attr('data-table',tableName);
	//设置这个是为了form表单提交的时候获取提交的值；
	$('#table').val(tableName);
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
判断输入的ID值是否会重复
 */
$('#id').blur(function()
{	
	var tableTxt=$('#location').data('table');
	var idTxt=$('#id').val();
	// console.log(idTxt);
	console.log(tableTxt);
	console.log($('#id').val());
	if(idTxt=="")
	{
		$('.has-feedback').removeClass('has-success');
		$('.form-control-feedback').removeClass('glyphicon-ok');

		$('.has-feedback').addClass('has-error');
		$('.form-control-feedback').addClass('glyphicon-remove');
		$('#tip').addClass('showtip');
	}
	else
	{
		$.post('/admin/addCheckId',{id:idTxt,tableName:tableTxt},function(datas)
		{	
			var data=datas.data.length;
			console.log(data);
			if(data==1)
			{
				$('.has-feedback').removeClass('has-success');
				$('.form-control-feedback').removeClass('glyphicon-ok');

				$('.has-feedback').addClass('has-error');
				$('.form-control-feedback').addClass('glyphicon-remove');
				repeatID=false;
				$('#tip').addClass('showtip');
				console.log('这个ID重复');
			}
			else{

				$('.has-feedback').removeClass('has-error');
				$('.form-control-feedback').removeClass('glyphicon-remove');

				$('.has-feedback').addClass('has-success');
				$('.form-control-feedback').addClass('glyphicon-ok');
				repeatID=true;
				$('#tip').removeClass('showtip');
				console.log('这个ID不重复');
			}
		});
		
	}
	
});
/*
判断输入的图片的链接是否正切
 */
$('#picture').blur(function()
{
	var link=$('#picture').val();
	console.log(link);
	$('#showPic').attr("src",link);
});
