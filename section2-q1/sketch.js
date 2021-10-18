// 小手調べ
function setup(){
  createCanvas(200, 200)
  for(let i = 0; i < 11; i++){
  noFill();
  ellipse(100, 100, i * 15)
  if(i < 5){
    stroke(0, 0, 255);
  }
  else{
    stroke(255, 0, 0);
  }
    // BLANK[1]
  }
}
