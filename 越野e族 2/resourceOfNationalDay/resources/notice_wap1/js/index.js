$(document).ready(function(){
	/******����ͼ*********/
	var obj=$(".slider");
	try{
	obj.each(function(){
		var scontObj=$(this).find(".marCon");
		swipeFun($(this),scontObj,"ul","li");
	});
	
	
	//�����ֱ�Ϊ��һ��div���ڶ�������div�����������div�������������div
	
	}catch(e){
	
	}
	
	/*var no_li = $(".no_topcon").find("li").eq(0);
	$(".no_diposi").css("height",$(document).height() - no_li.find(".no_data").height() - no_li.find(".no_richeng").height() - 12);
	$(window).resize(function(){
		$(".no_diposi").css("height",$(document).height() - no_li.find(".no_data").height() - no_li.find(".no_richeng").height() - 12);
	});*/
});