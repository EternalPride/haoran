function printDeal(){
            var printBox = document.getElementById('you');
            //拿到打印的区域的html内容
            var newContent =printBox.innerHTML;
            //将旧的页面储存起来，当打印完成后返给给页面。
            var oldContent = document.body.innerHTML;
            //赋值给body
            document.body.innerHTML = newContent;
            //执行window.print打印功能
            window.print();
            // 重新加载页面，以刷新数据。以防打印完之后，页面不能操作的问题
            window.location.reload();
            document.body.innerHTML = oldContent;
            return false;
        }
function preview(oper)         
{  
	
if (oper < 10)  
{  
bdhtml=window.document.body.innerHTML;//获取当前页的html代码  
sprnstr="<!--startprint"+oper+"-->";//设置打印开始区域  
eprnstr="<!--endprint"+oper+"-->";//设置打印结束区域  
prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html  
  
prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html  
window.document.body.innerHTML=prnhtml;

window.print();  
window.document.body.innerHTML=bdhtml;  
} else {  
window.print();  
}  
}  

