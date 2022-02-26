  function switchFixed(){
                        var value = document.getElementById('zuo').style.position === 'absolutefixed' ? 'absolutefixed' : 'fixed';
                        document.getElementById('zuo').style.position = value;
                    }
   function zhezhao(){
          // 控制显示遮罩层
          //被遮住的部分的class中含有segment
          //要显示的遮罩层中的class中含有dimmer
          $('.one').dimmer('show');
           
        }
         function zhezhao1(){
          // 控制显示遮罩层
          //被遮住的部分的class中含有segment
          //要显示的遮罩层中的class中含有dimmer
          $('.two').dimmer('show');
          

       
        }
  
				window.onload=function()
				//先用HTML页面，后调用js代码
				{
				$('.segment').dimmer({
	on:'hover',
	transition:'vertical flip'
	
});
$('.ui.rating')
  .rating('disable')

;

				}
