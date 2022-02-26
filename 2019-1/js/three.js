//Math.floor(Math.random()*10+1);
		//	var a = new Array();
		//	a[0] = 'aaa.jpg';
		//	a[1] = 'bbb.jpg';
	var b = Math.floor(Math.random()*6);
	document.getElementById('img').src = "img/b"+b+".gif";
	
	
	//随机刷新图片
	var oxs=document.getElementById("xs");
        var oyc=document.getElementById("yc");
         oxs.onmouseout=function()
	     {
	       oyc.style.opacity=0
          }
			oxs.onmouseover=function()
			{
			  oyc.style.opacity=1
			}
	     
	     //二维码消失
      var odw=document.getElementById("dhldw");
       var oli=document.getElementById("db").getElementsByTagName("li")[0];
          var ored=document.getElementById("wz-red");
     // setInterval(sTop,15)
      function bs()
      {
      	 var sTop=document.body.scrollTop|| document.documentElement.scrollTop;
      	if(sTop>350)
      	{  
      		odw.style.background="rgba(0,0,0,.5)";
      		
            odw.style.boxShadow="0 -1px 3px rgba(0,0,0,0.3)";
            	odw.style.zIndex="20"
      		
      		
      	}
      	else
      	{
      		odw.style.background="transparent"
      	
      		  odw.style.boxShadow="none";
      		
      		  
      		 
      	}
      }
     window.onscroll=function()
     {
     	
     	bs();
     }
      
      //导航栏变色
     	var btn1=document. getElementById("btn1");
		var btn2=document. getElementById("btn2");
		var ou=document.getElementById("u");
		var oli=ou.getElementsByTagName("li");
		
		var speed=600;
		var sped=-600;
		ou.innerHTML+=ou.innerHTML;
		ou.style.width=oli.length*oli[0].offsetWidth+"px";
		
		
		btn1.onclick=function()
		{
			speed=speed;
		if(ou.offsetLeft<-ou.offsetWidth/2)
			{
				ou.style.left="0px";
			}
			if(ou.offsetLeft>0)
			{
				ou.style.left=-ou.offsetWidth/2+"px"
			}
			ou.style.left=ou.offsetLeft+speed+"px";
		}
		btn2.onclick=function()
		{
			speed=sped;
		if(ou.offsetLeft>ou.offsetWidth/2)
			{
				ou.style.left="0px";
			}
			if(ou.offsetLeft>0)
			{
				ou.style.left=-ou.offsetWidth/2+"px"
			}
			ou.style.left=ou.offsetLeft+speed+"px";
		}
		
		