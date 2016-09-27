require.config(
{
	baseUrl:'js/lib',
	paths:{
		jq:'jquery-1.8.3.min',
		jqm:'jquery.mobile-1.4.5.min',
		app:'../baidu'
	},
	shim:{
		jq:{exports:'jQuery'},
		jqm:{deps:['jq']},
	}
});
requirejs(['jq'],function($)
{
	
});
