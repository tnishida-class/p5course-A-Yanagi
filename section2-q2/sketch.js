// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      console.log(i, j);
      if((j+i) % 2 == 1){
        fill(169);
        }
        else{
        noFill()
        }

      rect(size*i, size*j, size, size); //四角を書く

      if(j < 3 && (i + j) % 2 == 1){
      fill(255, 0, 0); //赤色の丸
    }
      else if(j < 5 && (i + j) % 2 == 1){
      noFill()
      noStroke() //真ん中はなし、ここなくてもいい。
      }
      else if(j > 4 && (i + j) % 2 == 1){
      fill(0, 0, 0); //黒の丸
      }
      ellipse(size*(i+1/2), size*(j+1/2), size*2/3); //円の描写
    }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
