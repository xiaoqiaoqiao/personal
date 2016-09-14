// JavaScript Document

//任意的运动框架
function sportFrame(obj,prop,endpoint)
{
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		
		var val=0;
		var speed=0;
		
		if(prop=='opacity')
		{
			val=Math.round(parseFloat(setgetStyle(obj,prop))*100);
			speed=(endpoint-val)/50;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
		}
		else
		{
			val=parseInt(setgetStyle(obj,prop));
			speed=(endpoint-val)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
		}
		
		
		
		if(val==endpoint)
		{
			clearInterval(obj.timer);	
		}
		else
		{
			if(prop=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(val+speed)+')';
				obj.style.opacity=(val+speed)/100;
		
			}
			else
			{
				setgetStyle(obj,prop,val+speed+'px');
			}	
		}
		
		},30);	
}
//样式设置与获取框架
function setgetStyle(obj,prop,value)
{
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[prop];	// IE 
		}
		else
		{
			return getComputedStyle(obj,false)[prop]; 
			//FF chrome 	
		}
	}
	else
	{
		if(arguments.length==3)
		{
			
			obj.style[prop]=value;    //设置样式
		}
		
	}
		
}