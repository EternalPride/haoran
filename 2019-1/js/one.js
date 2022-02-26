var aimg=document.getElementById("xgd").getElementsByTagName("img")[0];
var obtn1=document.getElementById("yi");
var obtn2=document.getElementById("er");
var ali=document.getElementById("xtp").getElementsByTagName("img");
var n=0;

var t1=null;
var ac=document.getElementById("xgd");
//定义一个数组，存储图片的路径
var arr=new Array(6);
for(var i=0;i<arr.length;i++)
{
   arr[i]="../img/0"+(i+1)+".jpg";
}
//定义播放函数
function auto()
{
	n++;
	if(n==arr.length)
	{
		n=0;
	}
	aimg.src=arr[n];
	//相应li是active
	for(var i=0; i<ali.length;i++)
	{
		ali[i].className="";
	}
	ali[n].className="xt";

}
//自动播放
t1=setInterval(auto,1500);
//鼠标放到图片上时，停止播放，鼠标离开继续播放
aimg.onmouseover=function(){clearInterval(t1);
};
aimg.onmouseout=function(){t1=setInterval(auto,1500)};
//鼠标放到相应的li上，停止播放，显示相应的图片，li显示相应的样式
for(var i=0;i<ali.length;i++)
{
	ali[i].index=i;
	ali[i].onmouseover=function()
	{
		clearInterval(t1);
		aimg.src=arr[this.index];
		for(var j=0;j<ali.length;j++)
		{
			ali[j].className="";
			ac.className="";
		}
		ali[this.index].className="xt";
	
		n=this.index;
	}
	//鼠标离开
	ali[i].onmouseout=function()
	{
		t1=setInterval(auto,1500);
	}
}
//下一张
obtn2.onclick=function()
{
	clearInterval(t1);
	auto();
}
function auto1()
{
	n--;
	if(n<0)
	{
		n=arr.length-1;
	}
	aimg.src=arr[n];
	//相应li是active
	for(var i=0; i<ali.length;i++)
	{
		ali[i].className="";
		
	}
	ali[n].className="xt";
      
}
obtn1.onclick=function()
{
	clearInterval(t1);
	auto1();
}



/*脚*/
