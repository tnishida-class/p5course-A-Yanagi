// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
    if(i = 1){
      fill(blue)
    }
    if(i % 2 == 1){
      fill(blue);
      }
    else{
      fill(255, 255, 255)
    }
  }

  fill(blue);
  let size = d * 5;
  rect(50, 0, 10, 100);
  rect(0, 50, 100, 10);
  fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
