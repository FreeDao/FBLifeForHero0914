/*
 *	version swipes 1.0;
 *	date    2014.3.18;
 *	author  wanghao;
 *	#example:
 *	$("#test").swipes({
 *			wipeLeft: function() {$("#val").append("��");}, //��໬���¼�
 *			wipeRight: function() { $("#val").append("�ң�");}, //�Ҳ໬���¼�
 *			wipeUp: function() { $("#val").append("�ϣ�");}, //���ϻ����¼�
 *			wipeDown: function() { $("#val").append("�£�");}, //���»����¼�
 *			preventDefaultEvents: true //��ֹĬ���¼�
 *		});
 *
 */
(function($){
	$.fn.swipes=function(options){
		var defaults = {
            swipeLeft:function(){},
            swipeRight:function(){},
			swipeTop:function(){},
            swipeDown:function(){},
			scrollDis:0,
			inits:function(){},
			preventDeault:true
        }
		if(options) var options = $.extend(defaults, options);
		/*************��ȡ��ǰ���ڻ����Ķ���**************/
		var $this=$(this);
		var $jsThis=$this.get(0);
		this.each(function(){
			/*************�����ڻ����Ķ���󶨺���**************/
			try{
			$jsThis.addEventListener("touchstart",startEve,false);
			$jsThis.addEventListener("touchend",endEve,false);
			}catch(e){}
			/**********���忪ʼ�ͽ�����x��y����**********/
			var startX,startY,endX,endY,Vtime,scrollHei,firstDisX,firstDisY,initTime,endTime,setTimes,isfirst=true,isvert=true;
			
			//���ؽǶ�
			/*function GetSlideAngle(dx, dy) {
			return Math.atan2(dy, dx) * 180 / Math.PI;
			}*/
			//���������յ㷵�ط��� 1�����ϣ�2�����£�3������4������,0��δ����
			function GetSlideDirection(startX, startY, endX, endY) {
			var dy = startY - endY;
			var dx = endX - startX;
			//var angle = GetSlideAngle(dx, dy);
			
			if(startX<endX) {
				result = 4;
			} else if(startX>endX){
					result = 3;
				}
			return result;
			}
			function startEve(e){
				var evt=e.touches[0];
				startX=evt.pageX;
				startY=evt.pageY;
				
				Vtime=setTimeout(function(){
					$jsThis.addEventListener("touchmove",movEve,false);
				},0);
			}
			
			var movEve=function(e){
				var evt=e.changedTouches[0];
				if(isfirst){
					firstDisX=evt.pageX;
					firstDisY=evt.pageY;
					isfirst=false;
				}
				if(firstDisX!="undefined"&&firstDisX!=null&&firstDisY!="undefined"&&firstDisY!=null){
						if(Math.abs(firstDisX-startX)>=Math.abs(firstDisY-startY)){
							endX=evt.pageX;
							endY=evt.pageY;
							var absMarW=Math.abs(endX-startX);
							var absMarH=Math.abs(endY-startY);
							var direct=GetSlideDirection(startX,startY,endX,endY);
							if(absMarW!=0){
								e.preventDefault();
								isvert=false;
								switch(direct){
									case 3:options.swipeLeft(absMarW,false);break;
									case 4:options.swipeRight(absMarW,false);break;
								};
							}else{
								isvert=true;
							}
						}else{
							isvert=true;
							$jsThis.removeEventListener("touchmove",movEve,false);
							return;
						}
				}else{
				}
			}
			
			function endEve(ev){
				if(!isvert){
				var evt=ev.changedTouches[0];
					endX=evt.pageX;
					endY=evt.pageY;
					clearTimeout(Vtime);
					$jsThis.removeEventListener("touchmove",movEve);
					var absMarW=Math.abs(endX-startX);
					var absMarH=Math.abs(endY-startY);
					var direct=GetSlideDirection(startX,startY,endX,endY);
					if(absMarW!=0){
						switch(direct){
							case 3:options.swipeLeft(absMarW,true);break;
							case 4:options.swipeRight(absMarW,true);break;
						};
					}
				}
				
				
					firstDisX=null;
					firstDisY=null;
					isfirst=true;
					clearTimeout(setTimes);
					setTimes=null;
					startX=0;
					startY=0;
					isvert=true;
				
			}
		});
	}
	
})(jQuery);
