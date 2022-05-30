


  function DigitalClock ()  {
     
         let now = new Date();
         day = week[now.getDay()];
         mon = month[now.getMonth()];
         year = now.getFullYear();
         hor = now.getHours();
         min = now.getMinutes();
         sec = now.getSeconds();
         pe = "am";
       
       if(hor == 0){

           hor = 12;
       }

       if(hor > 12){

          hor = hor -12;
          pe = "pm"
       }
     
        let month = ["january","february","march","april","may","june","august","september","october","november","december"]
       let  week = ["monday","thuesday","wednesday","thursday","friday","saturday"];
         console.log(week);
         document.getElementById('date').innerHTML = day+":"+mon+":"+year;
         document.getElementById('time').innerHTML =hor+":"+min+":"+sec+" "+pe;

    }

    setInterval(DigitalClock ,1000);

    



 