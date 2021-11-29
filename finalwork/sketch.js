// 最終課題を制作しよう
let k, l, n, x, y
let m = [];

function setup(){
  for(let i = 0; i < 17; i++){
    if(windowWidth >= 1220){
      resizeCanvas(windowWidth, 2000);
    }
    else if(windowWidth < 1220 && windowWidth >= 830){
      resizeCanvas(windowWidth, 2900);
    }
    else{
      resizeCanvas(windowWidth, 5200);
    }
  }
}

function draw(){
  background(160, 192, 255);
  textSize(40);
  fill(0);
  text('What is SDGs?(UNDP)', 30, 50);
  for(let i = 0; i < 17; i++){
    if(windowWidth >= 1220){
     k = i % 3;
     l = Math.floor(i / 3);
    }
    else if(windowWidth < 1220 && windowWidth >= 830){
     k = i % 2;
     l = Math.floor(i / 2);
    }
    else{
      k = i % 1;
      l = Math.floor(i / 1);
    }

    let COLOR = ['#e5243b', '#DDA63A', '#4C9F38',
    '#C5192D', '#FF3A21', '#26BDE2',
    '#FCC30B', '#A21942', '#FD6925',
    '#DD1367', '#FD9D24', '#BF8B2E',
    '#3F7E44', '#0A97D9', '#56C02B',
    '#00689D', '#19486A'];
    fill(COLOR[i]);
    strokeWeight(2);
    rect(k * 400 + 20, l * 300 + 100, 350, 250);

    let GOAL = ['Goal1 NO POVERTY \n \n 7億3600万人が厳しい貧困 \n 状態にあり、新型コロナウイ\n ルスの感染拡大によって増加\n しています',
     'Goal2 ZERO HUNGER \n \n 8億2100万人が飢餓状態に \n あり(2017)、そのうちの\n 63％がアジアとなっています',
     'Goal3 GOOD HEALTH AND WELL BEING \n \n 少なくとも400万人が基本的 \n な医療の得られない状態です',
     'Goal4 QUALITY EDUCATION \n \n 小学校に行くべき年齢のうち\n 5700万人が行くことができ \n ていない状態です',
     'Goal5 GENDER EQUALITY \n \n 男性が1ドル得られる仕事で \n 女性は77セントしか得られ \n ていません',
     'Goal6 CLEAN WATER AND SANITATION \n \n 8億4400万人が未だに安全\n な飲み水を得られません\n (2015)',
     'Goal7 AFFORDABLE AND CLEAN ENERGY \n \n 10人に1人が未だに電気供給\nのない状態です',
     'Goal8 DECENT WORK AND ECONOMIC GROWTH \n \n 1億7200万人が失業してお\n り(2018)、これは新型コロ\n ナウイルスの感染拡大によっ\n て増加しています',
     'Goal9 INDUSTRY INNOVATION AND INTERASTRUCTURE \n \n 低収入のアフリカの国では \n インフラの不足によって生産\n 性が40％も低くなっています',
     'Goal10 REDUCED INEQUALITIES \n \n 世界の貧困者50％が世界の\n 財産の10％しか占めないにも\n かかわらず、上位1％が22%\n を占めています',
     'Goal11 SUSTAINABLE CITIES AND COMMUNITIES\n\n 2018年現在42億人が都市で\n 生活しており、2050年には \n 郊外で暮らす人が65億人にな\n るとされています',
     'Goal12 RESPONSIBLE CONSUMPTION and PRODUCTION \n \n 20億人が飢餓状態であるにも\n 関わらず、13億トンもの食料\n が廃棄されています',
     'Goal13 CLIMATE ACTION \n \n 2017年時点で産業革命前か\n ら気温が1℃上昇しており、\n 2050年までに45％CO2排出\n 量を減らす必要があります',
     'Goal14 LIFE BELOW WATER \n \n 海洋全体の40％が汚染の影響\n を強く受けており、3億人の\n 人々が生活を海に依存してい\n ます',
     'Goal15 LIFE ON LAND \n \n 森は動物や昆虫、植物の80％\n の住処になっており、\n 2億6000万人が農業に生活を\n 依存しています',
     'Goal16 PEACE JUSTICE AND STRONG INSTITUTIONS \n \n 世界では10億人が法的弱者と\n なっています',
     'Goal17 PARTNERSHIPS FOR THE GOALS \n \n UNCTADによると、SDGsの\n 達成には毎年5兆円から7兆円\n が必要になるとされています'];
    fill(255);
    textSize(25);
    text(GOAL[i], k * 400 + 30, l * 300 + 110, 350);

   for(let n = 0; n < m.length - 1; n++){
     if(m[n].draw){
      strokeWeight(2);
      line(m[n].x, m[n].y, m[n + 1].x, m[n + 1].y);
     }
   }
 }
}



function mouseDragged(){
   m.push({x: mouseX, y: mouseY, draw: true});
}

function mouseReleased(){
   m.push({x: mouseX, y: mouseY, draw: false});
}


function windowResized(){
    if(windowWidth >= 1220){
      resizeCanvas(windowWidth, 2000);
    }
    else if(windowWidth < 1220 && windowWidth >= 830){
      resizeCanvas(windowWidth, 2900);
    }
    else{
      resizeCanvas(windowWidth, 5200);
    }
}
