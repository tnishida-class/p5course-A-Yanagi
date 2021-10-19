// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      console.log(i, j);
      rect(i * 20, j * 20, 20, 20);
      if(j % 2 == 0){
        if(i % 2 == 1){
        fill(255, 255, 255);
        ellipse(i * 20 + 10, j * 20 + 10, 10, 10);
        }
        else{
        fill(169, 169, 169)
        }
      }
      else{
        if(i % 2 == 0){
        fill(255, 255, 255);
        ellipse(i * 20 + 10, j * 20 + 10, 10, 10);
        }
        else{
        fill(169, 169, 169)
        }
      }
    }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
