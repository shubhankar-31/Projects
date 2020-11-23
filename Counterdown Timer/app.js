const time_hour=document.querySelector("h1");
var time_minute=prompt("ENTER TIME IN MINUTES ");
var time_second=time_minute*60;

displayTime(time_second);

const countdown=setInterval(()=>{
    time_second--;
   displayTime(time_second);

    if(time_second<1)
       {    endtime();
             clearInterval(countdown);
       }

},1000)

function displayTime(input_second)
{   
    const hour=Math.floor(input_second/3600);
    input_second-=(3600*hour);
    const minute=Math.floor(input_second/60);
    input_second-=(60*minute);
    const second=Math.floor(input_second%60);
      
    time_hour.innerHTML = `${hour < 10 ? "0" : " "}${hour} : ${minute < 10 ? "0" : " "}${minute} :  ${second < 10 ? "0" : ""}${second}`;

}

function endtime()
{
    time_hour.innerHTML="Times up Bitch!!"
    document.getElementById("second-container").innerHTML=" ";
}