// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love 平手友梨奈.");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(152, 251, 152);
  rect(0, 0, w + p * 2, h + p * 2);
  triangle(w + p * 2 - 4, h + p * 2,  w + p * 2, h + p * 2 - 4, w + p * 2 + 5, h + p * 2 + 5)
  fill(0);
  text(t, p, h + p);
}
