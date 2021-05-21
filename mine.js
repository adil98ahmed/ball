var h=window.innerHeight;
var w=window.innerWidth;
var c=document.getElementById("c");
var ctx=c.getContext("2d");


var x=c.width/2;
var y=(c.height)-30;
var ballRadious=10;

var paddleHeight=10;
var paddleWidth=75;
var paddleX=(c.width-paddleWidth)/2;
var paddleDx=7;
var leftPress;
var rightPress;
var space;

var dx=2;
var dy=-2;
var inter=20;
document.addEventListener("keydown",function(Event){
   if(Event.keyCode==39)
        {
            rightPress=true;
        }
   else if(Event.keyCode==37)
        {
            leftPress=true;
        }
    else if(Event.keyCode==32)
        {
            space=true;
        }
    
});

document.addEventListener("keyup",function(Event){
   if(Event.keyCode==39)
        {
            rightPress=false;
        }
   else if(Event.keyCode==37)
        {
            leftPress=false;
        }
    else if(Event.keyCode==32)
        {
            space=false;
        }
    
    
});






function drowBall()
{
    ctx.beginPath();
    ctx.arc(x,y,ballRadious,0,2*Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}

function drowPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX,c.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();
}

function drow()
{
    
    ctx.clearRect(0,0,c.width,c.height);
    
    if((x+dx>c.width-ballRadious)||(x+dx<ballRadious))
        {
            dx=-dx;
        }
    if((y+dy<ballRadious)||
    (
        y+dy>c.height-paddleHeight-ballRadious&&
        x+dx>paddleX&&
        x+dx<paddleX+paddleWidth
    )
      )
        {
            dy=-dy;
        }
    else if(y+dy>c.height)
        {
            location.reload();
        }
    drowPaddle();
    if(leftPress)
        {
            paddleX-=paddleDx;
        }
    else if(rightPress)
        {
            paddleX+=paddleDx;
        }
    
    
    else if(space)
        {
            if(dx>0)
                {
                    dx+=.1;
                }
            if(dx<0)
                {
                    dx-=.1;
                }
            if(dy>0)
                {
                    dy+=.1;
                }
            if(dy<0)
                {
                    dy-=.1;
                }
        }
    if(rightPress==true&&paddleX>c.width-paddleWidth    )
        {
            paddleX=c.width-paddleWidth;
        }
    
    if(leftPress==true&&paddleX<0    )
        {
            paddleX=0;
        }

    x+=dx;
    y+=dy;
    drowBall();
    
    
}

setInterval(drow,inter)