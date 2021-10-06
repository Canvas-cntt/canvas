const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});

let painting =false;

function startPosition(e){
    painting =true;
    draw(e);
}

function finishedPosition(e){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.strokeStyle ="blue";
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
};

canvas.addEventListener("mousedown",startPosition);
canvas.addEventListener("mouseup",finishedPosition);
canvas.addEventListener("mousemove",draw);























//const mouse ={
//   x : null;
//  y : null;
//};
//canvas.addEventListener('click',function(event) {
//   mouse.x = event.x; 
//   mouse.y = event.y;
//   drawCircle();
//});

//canvas.addEventListener('mousemove',function(event) {
//   mouse.x = event.x; 
//    mouse.y = event.y;
//    drawCircle();
//})


//function drawCircle(){
//ctx.fillStyle ='blue';
//ctx.beginPath();
//ctx.arc(mouse.x, mouse.y , 40, 0, 2 * Math.PI);
//ctx.fill();
//};

//function animate(){
//    ctx.clearRect(0,0,canvas.width,canvas.height);
//    drawCircle();
//    requestAnimationFrame(animate);
//}
///drawCircle();
//console.log(ctx);



