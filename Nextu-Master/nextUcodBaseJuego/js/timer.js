 function checkTime(i) {
      i--;
      if (i < 10) {
        i = "0" + i;
      }   
      return i;
    }
  

    function startTime() {

    var today = $("#timer").text();
    var arr = today.split(':');    
    var m = arr[0];
    var s = arr[1];

   
    if (s == 0) {
        s= 60;
        m = checkTime(m);
    };
      // var s = today.getSeconds();
      // add a zero in front of numbers<10
     
    

      s = checkTime(s);
      //document.getElementById('timer').innerHTML = m + ":" + s;
       //alert(arr[0]+":"+arr[1]);
      $("#timer").text(m + ":" + s);

       if($("#timer").text() !="00:00"){       
            


           t = setTimeout(function() {
            startTime()
          },1000);
      }
      else{
         GameOver();
      }
      
     
    }
    