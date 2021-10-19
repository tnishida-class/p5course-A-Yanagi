// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);


  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(0, 100, 0)
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

 fill(blue);
 noStroke();
 ellipse(300, 100, 100, 100)
 fill(255, 255, 255);
 ellipse(295, 95, 90, 90);
 fill(green)
 ellipse(295, 94, 80, 80)
 fill(255);
 ellipse(292, 100, 72, 72);
 fill(red);
 ellipse(253, 100, 30, 20);
 fill(gray);
 textSize(16);
 text("KOBE", 267, 90);
 textSize(10);
 text("UNIVERSITY", 267, 100);
}
