var c=document.getElementById("c");
var x=c.width/2;
var ctx=c.getContext("2d");
var ballRadious=10;
var y=ballRadious;
var space;
var my_number=1;
var dx=2;
var dy=1;
var flag=false;
var temp=0;
var ctx2=c.getContext("2d");
var baskY;
var lef_righ;
var flag3=false;
var flag4=false;
var inter=5;
var image=new Image();
image.src='download.png'
image.width=100;
    image.height=100;

    
var img = new Image();
img.src = 'images.png';
img.width=img.width/2;
    image.height=img.height/2;
c.width=img.width*2;
    c.height=img.height;
function drowBall()
{

    
    
img.onload = function() {
    
    
    ctx.drawImage(img,0,0);
};

}



function drowBasket()
{
    ctx.beginPath();
    
    
    if(lef_righ>0 && lef_righ<c.width/2)
        {
         
            ctx.strokeStyle="white";
            ctx.moveTo(lef_righ-ballRadious,baskY);
            ctx.lineTo(lef_righ+5,baskY-15);
            
            ctx.moveTo(lef_righ-ballRadious,baskY);
            ctx.lineTo(lef_righ+5,baskY);
            
            ctx.moveTo(lef_righ+5,baskY-20);
            ctx.lineTo(lef_righ+5,baskY+15);
            ctx.stroke();
            
            ctx2.moveTo(lef_righ+32,baskY-5);
            ctx2.ellipse(lef_righ+20,baskY-5,ballRadious+3,ballRadious-5,0,2*Math.PI,15);
            ctx2.strokeStyle="red";
            ctx2.stroke();
            
        }
    else
        {
            
            ctx.strokeStyle="white";
            ctx.moveTo(lef_righ+ballRadious,baskY);
            ctx.lineTo(lef_righ-5,baskY-15);
            
            ctx.moveTo(lef_righ+ballRadious,baskY);
            ctx.lineTo(lef_righ-5,baskY);
            
            ctx.moveTo(lef_righ-5,baskY-20);
            ctx.lineTo(lef_righ-5,baskY+15);
            ctx.stroke();
            
            ctx2.moveTo(lef_righ-8,baskY-5);
            ctx2.ellipse(lef_righ-20,baskY-5,ballRadious+3,ballRadious-5,0,2*Math.PI,15);
            ctx2.strokeStyle="red";
            ctx2.stroke();
        }
    
    
    
    
}



addEventListener("keydown",function(Event){
   
    if(Event.keyCode==32)
        {
            space=true;
            my_number+=1;
            flag=true;
            temp=0;
        }
    
});

addEventListener("keyup",function(Event){
   
    if(Event.keyCode==32)
        {
            space=false;
            flag=false;
            temp=1;
        }
});




function moveBall()
{
    if(ss)
                {
                    lef_righ=ballRadious+3;
                    
                    if(flag3==false)
                        {
                            baskY=Math.round(Math.random()*c.height+15);
                            flag3=true;
                        }
                    
                }
            if(ss==false)
                {
                    lef_righ=c.width-(ballRadious+3);
                    
                     if(flag3==true)
                        {
                            baskY=Math.round(Math.random()*c.height+15);
                            flag3=false;
                        }
                }
}



function myScore()
{
    
    ctx.font = "15px Arial";
    if(score>=0&&score<5)
        {
            ctx.fillStyle="green";
        }
    
    else if(score>=5&&score<9)
        {
            ctx.fillStyle="yellow";
        }
    
    else if(score>=9)
        {
            ctx.fillStyle="red";
        }
    ctx.fillText("SCORE :  "+score,10,20);
}


var score=0;

var temp2=1;
var ss=false;

function drow()
{
    ctx.clearRect(0,0,c.width,c.height);
    
    
    if(flag)
        {
            if(temp==0&&((x>=c.width/2||x>=2)&&x<c.width)&&ss==false)
                {
                    
                    if(x<=c.width&&ss==false)
                        {
                           x+=(dx);
                            y-=(dy*2); 
                        }
                     if(x==c.width-2){
                        ss=true;
                    }
                            
                            
                    
                }
             if(temp==0&&(x<=c.width)&&ss==true)
                {
                    
                    if(x<=c.width&&ss==true)
                        {
                           x-=(dx);
                            y-=(dy*2); 
                        }
                     if(x==2){
                        ss=false;
                    }
                }
            
            
            
            moveBall();
        
            
            
            
        }
    
    
    
    else
    {
        if((y>baskY&&y<baskY+2)||(y<baskY&&y>baskY-2))
        {
            
            if(ss==false)
                {
                    if((x>=265&&x<=280)&&flag4==false)
                        {
                            
                            ss=true;
                            moveBall();
                            score+=1;
                        }
                    else if(x<265&&x>259)
                         {
                             flag4=true;
                         }
                    else if(x>=280)
                        {
                            dy=0;
                        }
                    if(flag4==true)
                        {
                            x+=dx;
                            dy=0;
                        }
                    if(x>=265&&flag4==true)
                        {
                            flag4=false;
                            dy=1;
                        }
                }
            else
                {
                    if(x>=19&&x<=34&&flag4==false)
                        {
                            
                            ss=false;
                            moveBall();
                            score+=1;
                        }
                    else if(x<19)
                        {
                            dy=0;
                        }
                    
                    else if(x>34&&x<40)
                         {
                             flag4=true;
                         }
                    if(flag4==true)
                        {
                            x-=dx;
                            dy=0;
                        }
                    if(x<=34&&flag4==true)
                        {
                            flag4=false;
                            dy=1;
                        }
                }
            
        }
        
    }
    
    
    
    
    
    
       
    
    
    y+=(dy*.8);
    drowBall();
    drowBasket();
    myScore();
}
setInterval(drow,inter);









/*
if(temp==0&&(x>=c.width/2&&x<c.width))
                {
                    
                    if(x<=c.width&&ss==false)
                        {
                           x+=(2*dx);
                            y-=(dy*5); 
                        }
                     if(x==c.width-2){
                        ss=true;
                    }
                            
                            
                    
                }
             if(temp==0&&(x>=c.width/2)&&ss==true)
                {
                    
                    x-=(2*dx);
                    y-=(dy*5);
                }
                
                */