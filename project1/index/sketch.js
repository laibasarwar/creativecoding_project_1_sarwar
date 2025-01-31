///REFERENCES///
//https://www.bitdegree.org/learn/javascript-setinterval
//https://www.youtube.com/watch?v=CqDqHiamRHA&ab_channel=TheCodingTrain
//https://p5js.org/reference/#/p5/millis
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=893s
//https://www.youtube.com/watch?v=tA_ZgruFF9k&t=812s
//https://www.youtube.com/watch?v=TaN5At5RWH8
//https://www.youtube.com/watch?v=5Q9cA0REztY&t=902s
//https://www.youtube.com/watch?v=W1-ej3Wu5zg&t=652s



let choice=1; //initial drawing number

let blocks=[];//MAZE function
let card; //card function
let cards=[];//card array
//let cluster;//cluster function
let clusters=[];
let stars=[]; //stars array

// let player;
// let playermaze;


let xmaze=0;//player position x
let ymaze=0;//player position y

let switchInterval=10000; //stars interval
let timeswitch=0;//stars 
let backgroundcolor;//initialize the color

// let rotatestar=0;

function setup() {
  createCanvas(500,500); 
  // to add blocks of the maze to the same array, is there a cleaner way, or is this good enough? I want to use this array to see compare where the ellipse is so it does not touch the black bars
  
  //maze set up
  playermaze=new Block(xmaze,ymaze,25,25);//playerbox
  for (let i =0; i<19;i++){//for faster blocks
    let top=50+25*i;
    let bottom=-25+25*i;
    let left=0+25*i;
    let right=0+25*i;
    blocks[i]=new Block(top,0,25,25);leftend=new Block(0,left,25,25); bottomend=new Block(bottom,475,25,25); rightend=new Block(475,right,25,25);block1=new Block(50,50,25,25); block1a=new Block(75,50,25,25); block1b=new Block(100,50,25,25); block1c=new Block(125,50,25,25);block2=new Block(150,50,25,25); block2a=new Block(150,75,25,25); block2b=new Block(150,100,25,25); block2c=new Block(150,125,25,25);block3=new Block(100,150,75,25); block3a=new Block(100,150,50,25); block3b=new Block(100,150,75,25);block4=new Block(25,100,25,25); block4a=new Block(50,100,25,25); block4b=new Block(75,100,25,25); block4c=new Block(100,100,25,25);block5=new Block(50,125,25,25); block5a=new Block(50,150,25,25);block6=new Block(200,25,25,25); block6a=new Block(200,50,25,25); block7=new Block(150,100,25,25); block7a=new Block(175,100,25,25);block7b=new Block(200,100,25,25);block7c=new Block(225,100,25,25);block7d=new Block(250,100,25,25);block7e=new Block(300,100,25,25);block8=new Block(250,50,25,25); block8a=new Block(250,75,25,25);block9=new Block(300,25,25,25); block9a=new Block(300,50,25,25);block9b=new Block(300,75,25,25);block9c=new Block(300,100,25,25);block9d=new Block(300,125,25,25);block9e=new Block(300,150,25,25);block9f=new Block(300,175,25,25);block9g=new Block(300,200,25,25);block10=new Block(425,0,25,75); block10a=new Block(425,25,25,25);block10b=new Block(425,50,25,25);block10c=new Block(425,75,25,25);block11=new Block(350,50,25,25); block11a=new Block(375,50,25,25);block12=new Block(375,25,25,25); block12a=new Block(375,50,25,25);block13=new Block(375,100,25,25); block13a=new Block(400,100,25,25);block13b=new Block(425,100,25,25);block14=new Block(350,150,25,25); block14a=new Block(375,150,25,25);block14b=new Block(400,150,25,25);block14c=new Block(225,150,25,25);block15=new Block(425,150,25,25);block15a=new Block(425,175,25,25);block15b=new Block(425,200,25,25);block15c=new Block(425,225,25,25);block16=new Block(375,250,25,25); block16a=new Block(400,250,25,25);block16b=new Block(425,250,25,25);block16c=new Block(450,250,25,25);block17=new Block(275,200,25,25); block17a=new Block(300,200,25,25);block17b=new Block(325,200,25,25);block17c=new Block(350,200,25,25);block17d=new Block(375,200,25,25);block18=new Block(200,225,25,25); block18a=new Block(225,225,25,25);block18b=new Block(250,225,25,25);block18c=new Block(275,225,25,25);block19=new Block(200,175,25,75); block19a=new Block(200,200,25,25);block19b=new Block(200,225,25,25);block20=new Block(200,150,25,25);block20a=new Block(225,150,25,25);block20b=new Block(250,150,25,25);block21=new Block(0,200,25,25); block21a=new Block(25,200,25,25);block21b=new Block(50,200,25,25);block21c=new Block(75,200,25,25);block21d=new Block(100,200,25,25);block21e=new Block(125,200,25,25);block21f=new Block(150,200,25,25);block22=new Block(125,200,25,25); block22a=new Block(125,225,25,25);block22b=new Block(125,250,25,25);block22c=new Block(125,275,25,25);block23=new Block(75,250,25,25); block23a=new Block(75,275,25,25);block23b=new Block(75,300,25,25);block23c=new Block(75,325,25,25);block24=new Block(50,325,25,25); block24a=new Block(75,325,25,25);block24b=new Block(100,325,25,25);block24c=new Block(125,325,25,25);block25=new Block(125,325,25,25);block25a=new Block(125,350,25,25); block25b=new Block(125,375,25,25); block25c=new Block(125,400,25,25); block25d=new Block(125,425,25,25); block25e=new Block(125,450,25,25);block26=new Block(25,375,25,25); block26a=new Block(50,375,25,25);block26b=new Block(75,375,25,25);block27=new Block(75,375,25,25); block27a=new Block(75,400,25,25);block28=new Block(175,275,25,25); block28a=new Block(200,275,25,25);block28b=new Block(225,275,25,25);block28c=new Block(250,275,25,25);block29=new Block(250,275,25,25); block29a=new Block(250,300,25,25);block29b=new Block(250,325,25,25);block29c=new Block(250,350,25,25);block30=new Block(175,275,25,25);block30a=new Block(175,300,25,25);block30b=new Block(175,325,25,25);block31=new Block(175,325,25,25); block31a=new Block(200,325,25,25);block32=new Block(125,375,25,25); block32a=new Block(150,375,25,25);block32b=new Block(175,375,25,25);block32c=new Block(200,375,25,25);block32d=new Block(225,375,25,25);block32e=new Block(250,375,25,25);block33=new Block(275,350,25,25); block33a=new Block(300,350,25,25);block33b=new Block(325,350,25,25);block33c=new Block(350,350,25,25);block33d=new Block(375,350,25,25);block33e=new Block(400,350,25,25);block33f=new Block(425,350,25,25);block34=new Block(425,300,25,25); block34a=new Block(425,325,25,25);block35=new Block(375,250,25,25);block35a=new Block(375,275,25,25);block35b=new Block(375,300,25,25);block36=new Block(300,300,25,25); block36a=new Block(325,300,25,25);block36b=new Block(350,300,25,25);block36c=new Block(375,300,25,25);block37=new Block(200,425,25,25); block37a=new Block(225,425,25,25);block37b=new Block(250,425,25,25);block37c=new Block(275,425,25,25);block37d=new Block(300,425,25,25);block37e=new Block(325,425,25,25);block37f=new Block(350,425,25,25);block37g=new Block(375,425,25,25);block38=new Block(300,400,25,25); block38a=new Block(300,425,25,25);block38b=new Block(300,450,25,25);block38c=new Block(300,475,25,25);block39=new Block(375,400,25,25); block39a=new Block(400,400,25,25);block39b=new Block(425,400,25,25);block40=new Block(425,450,25,25); block40a=new Block(125,150,25,25);

    blocks.push(//push blocks to array
      leftend,bottomend,rightend,block1,block1a, block1b, block1c,block2, block2a, block2b, block2c,block3, block3a, block3b,block4, block4a, block4b, block4c,block5, block5a,block6, block6a,block7, block7a,block7b,block7c,block7d,block7e,block8, block8a,block9, block9a,block9b,block9c,block9d,block9e,block9f,block9g,block10,block10a,block10b,block10c,block11,block11a,block12,block12a,block13,block13a,block13b,block14,block14a,block14b,block14c,block15,block15a,block15b,block15c,block16,block16a,block16b,block16c,block17,block17a,block17b,block17c,block17d,block18,block18a,block18b,block18c,block19,block19a,block19b,block20,block20a,block20b,block21,block21a,block21b,block21c,block21d,block21e,block21f,block22,block22a,block22b,block22c,block23,block23a,block23b,block23c,block24,block24a,block24b,block24c,block25,block25a,block25b,block25c,block25d,block25e,block26,block26a,block26b,block27,block27a,block28,block28a,block28b,block28c,block29,block29a,block29b,block29c,block30,block30a,block30b,block31,block31a,block32,block32a,block32b,block32c,block32d,block32e,block33,block33a,block33b,block33c,block33d,block33e,block33f,block34,block34a,block35,block35a,block35b,block36,block36a,block36b,block36c,block37,block37a,block37b,block37c,block37d,block37e,block37f,block37g,block38,block38a,block38b,block38c,block39,block39a,block39b,block40,block40a);
  }//i had to make so many of these because if i grouped them the player would not read the x and y values and intersect in the maze
  

  // card=new Card();
  for (let i=0; i<4; i++){
    let change=0+125*i;
    let r=125;
    let c=new Card(change,0,r,r);
    let c2=new Card(change,125,r,r);
    let c3=new Card(change,250,r,r);
    let c4=new Card(change,375,r,r);
    cards.push(c,c2,c3,c4); //card array
  }

  //cluster=new Cluster(50);//cluster class with size being called in
  for (let i=0; i<9; i++){
    // for (let j=0; i<height; j++){ //tried to make double for loop but could not make all of the circles
    let changex=0+100*i;
    let radclust=5;
      // let changex=75+150*j;
    let clust1=new Cluster(changex,0,radclust,random(100,255),random(100,255),random(100,255)); //random colors with positioned circles
    let clust2=new Cluster(changex,100,radclust,random(100,255),random(100,255),random(100,255));
    let clust3=new Cluster(changex,200,radclust,random(100,255),random(100,255),random(100,255));
    let clust4=new Cluster(changex,300,radclust,random(100,255),random(100,255),random(100,255));
    let clust5=new Cluster(changex,400,radclust,random(100,255),random(100,255),random(100,255));
    let clust6=new Cluster(changex,500,radclust,random(100,255),random(100,255),random(100,255));
    clusters.push(clust1,clust2,clust3,clust4,clust5,clust6);
  }

  // to make the stars distanced apart and have multiple instances. having trouble incorporating columns within the array, 
  // timestart=millis();
  // backgroundcolor=color(0,0,255);
  //setInterval(star.show(),1000);
  for (let i =0; i<500;i++){
    let x=random(0,500);//xpositions
    let y=random(0,500);//ypositions
    let r=random(0,1);//random sizes from 0 to 1 - really small
    timestart=millis();//initialize time
    backgroundcolor=color(0,0,0);//black in the beginning
    stars[i]=new Star(x,y, r, r*2, 5);//each star with x and y and 5 as in the npoints

    //setInterval(star.show(),1000);
    // stars[i].rotate(PI/10.0);
  }
}

function draw() {
  if (choice==1) {//maze
    background(255);

    for (let b of blocks) {
      fill(0);
      b.show();

      fill(255,0,0);
      playermaze.show();

      push();//had to put house visual here so it runs once and is in the background
      translate(475,475);
      scale(0.05);
      strokeWeight(1);
      stroke(0);
      fill(235,156,146,92);
      quad(100,100,150,100,150,150,100,200);//chimney
      fill(235,192,194,92);
      triangle(50,height/2,width/2,50,450,height/2);
      ellipseMode(CENTER);
      fill(165,194,232,91);//blue
      ellipse(width/2,150,50,50);//roof window
      rect(50,height/2,400,200);//house body
      rectMode(CENTER);
      fill(165,194,232,91);//blue
      rect(125,300,100,75);//windows
      rect(375,300,100,75);//windows
      fill(158,138,121,62);//brown
      rect(width/2,400,50,100);//door
      pop();

      if (playermaze.x==475 && playermaze.y==475){
        choice=2;//move on to cards function
      }

      //let overlapping=false;
      if ((playermaze.x==b.x) && (playermaze.y==b.y)){
        playermaze.x=0;//if overlapping - go back to the start
        playermaze.y=0;
        //overlapping=true;//
      }
    }
    
  }
  if (choice==2) {//card function
    background(255);

    push();//had to put house visual here so it runs once and is in the background
    strokeWeight(1);
    stroke(0);
    fill(235,156,146,92);
    quad(100,100,150,100,150,150,100,200);//chimney
    fill(235,192,194,92);
    triangle(50,height/2,width/2,50,450,height/2);
    ellipseMode(CENTER);
    fill(165,194,232,91);//blue
    ellipse(width/2,150,50,50);//roof window
    rect(50,height/2,400,200);//house body
    rectMode(CENTER);
    fill(165,194,232,91);//blue
    rect(125,300,100,75);//windows
    rect(375,300,100,75);//windows
    fill(158,138,121,62);//brown
    rect(width/2,400,50,100);//door
    pop();
    
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].contains(mouseX, mouseY)) {
        cards[i].changeColor(166,162,224);//purple-hover
      } else {
        cards[i].changeColor(161,224,189);//green-no hover
      }
      cards[i].show();
    }


  }
  if (choice==3) {//cluster function
    background(205,168,240,94);//lavender background
    // drawred call to functions
    // cluster.display();//display finctions
    // cluster.move();

    for (let i = 0; i < clusters.length; i++) {
      clusters[i].display();//display finctions
      clusters[i].move();
    }
  }
  if (choice==4) {//stars function
    background(backgroundcolor);//change background color over time
    // rotatestar+=0.2;
    // call to star function and class
    if (millis()-timeswitch>switchInterval){
      backgroundcolor=color(0,0,random(50,100));
      timeswitch=millis();
    }
    for (let i =0; i<stars.length;i++){//show each star and move them around
        // rotate(rotatestar);
        // push();
        stars[i].show();
        stars[i].starJiggle();
        // pop();

        // stars[i].hill();
        // stars[i].rotate(PI/10.0);
    }
  }
}

function mousePressed() {
  for (let i = cards.length - 1; i >= 0; i--) {
    if (cards[i].contains(mouseX, mouseY)) {
      cards.splice(i, 1);
    }
  }
}
function keyPressed(){

    if ((keyCode === LEFT_ARROW)){
      playermaze.x-=25;
    } else if ((keyCode === RIGHT_ARROW)){
      playermaze.x+=25;
    } else if ((keyCode === UP_ARROW)){
      playermaze.y-=25;
    } else if ((keyCode === DOWN_ARROW)){
      playermaze.y+=25;
    } else if (keyCode==32){ //spacebar
      choice++;
      if (choice>4){
        choice=1; //make it a cycle
      }
    }
  //}
}
