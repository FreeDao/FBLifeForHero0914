$(document).ready(function(){

	
	//���ض���
//	$("#w_hidnav").scroll(
//		function(){//����������ʾ
//			if($("#w_hidnav").scrollTop()>200){
//				$("#gotop").show();
//			}else{
//				$("#gotop").hide();
//			}
//		}
//	);
//	$("#gotop").click(function(){//���Ʒ��ض���
//	$("#w_hidnav").animate({scrollTop:0},0);
//		return false;
//	}); 
	
	//��ʱ����
	//$("#weibo_pl").load(function(){
		//$(window).scrollTop($("#weibo_pl").offset().top);
	//});
	

	
	/**
	 * ���ض�������
	 */
	var _objscroll = {
		win:$(window),	
		doc:$(document),	
		gotopdiv:$('#gotop')	
	};
 	
	_objscroll.win.scroll(function(){
		if(_objscroll.win.scrollTop() > _objscroll.win.height()){
			_objscroll.gotopdiv.show();
		}else{
			_objscroll.gotopdiv.hide();
		}
		
	});
	
	//���ض������
	_objscroll.gotopdiv.click(function(){//���Ʒ��ض���
		_objscroll.win.scrollTop(0);
		return false;
		
	}); 
	
	

	
});