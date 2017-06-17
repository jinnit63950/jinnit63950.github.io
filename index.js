

function calculation()
{

    var int1 = $("#integral_1").val();    //宣告變數
    var int2 = $("#integral_2").val();    
    var gcd, lcm;   //宣告GCD與LCM變數
    

    if (isNaN(int1))      //如果integral_1輸入的不是數字
    {
        alert("請輸入整數");   //跳出來提醒視窗 
        integral_1.value="";          //清空字串
    }   

    else if (int1 - Math.floor(int1) > 0)     //Math.floor()表示將括號中數字無條件捨去(即取整數部分)  Ref:http://fecbob.pixnet.net/blog/post/43056499-javascript-%E5%B9%BE%E5%80%8B%E5%B8%B8%E7%94%A8%E7%9A%84%E5%8F%96%E6%95%B4%E6%95%B8%E6%96%B9%E6%B3%95
    {
        alert("請輸入整數");   //跳出來提醒視窗 
        integral_1.value="";          //清空字串
    }

    else if (isNaN(int2))      //如果integral_2輸入的不是數字
    {
        alert("請輸入整數");   //跳出來提醒視窗 
        integral_2.value="";          //清空字串
    }   

    else if (int2 - Math.floor(int2) > 0)
    {
        alert("請輸入整數");   //跳出來提醒視窗 
        integral_2.value="";          //清空字串
    }

    else
    {        
        var large, small, remainder, n, i;  //宣告於計算函數中會使用到變數

        if(int1 >= int2)    //先用if else指定int1與int2二者中較大者為large, 較小者為small
        {
            large = int1;
            small = int2;
        }

        else
        {
            large = int2;
            small = int1;
        }

        n = large;          //指定一變數n為int1與int2中較大者
     
        for(i=1; i<=n; i++)      //使用for loop以Euclid's method計算最大公因數      
        {                        //此loop共執行n次, 因為若int1與int2中較小者為1, 則loop執行次數n即為int1與int2中較大者
		    
            remainder = ( large % small );   //將大數除以小數求得餘數
		
            if (remainder == 0)    //如果在進行Euclid's method的過程中, 餘數已為零,即表示這一次除法中的除數(small)為最大公因數
			break;                 //則跳出for loop
		
		    large = small;         //將大數指定於前次除法的小數
            small = remainder;       //將小數指定於前次除法的餘數, 以進行Euclid's method中下一次除法
	    }

        gcd = small;
        GCD_result.value = gcd   //顯示計算結果在GCD_result方格裡

        lcm = int1*int2/gcd;   //計算lcm
        LCM_result.value = lcm   //顯示計算結果在LCM_result方格裡
    }
    
    
}