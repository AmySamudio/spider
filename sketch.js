var frame_rate_value;

function setup() {
  canvas = createCanvas(700,580);
  smooth(4);
  frame_rate_value = 12;
  frameRate( frame_rate_value );
  rectMode( CENTER );
  background( 0 );
}

function draw() {
  
  background( red, green, blue );

  if ( mouseIsPressed ) {

    red = map( mouseX, 0, width, 0, 255 );
    green = map( mouseY, 0, height, 0, 255 );
    blue = map( mouseX + mouseY, 0, width + height, 255, 0 );

    print( "red: " + red + ", green: " + green + ", blue: " + blue );
  }
  
  
  
  
  
  

  //spider web
  strokeWeight(3);
  stroke(255);
  noFill();
  line(0, 0, 285, 275);
  line(600, 0, 340, 275);
  line(200, 0, 300, 275);
  line(400, 0, 300, 275);
  line(0, 250, 340, 275);
  line(0, 400, 340, 275);
  line(700, 250, 340, 275);
  line(800, 500, 340, 275);
  line(0, 600, 340, 275);
  line(300, 320, 240, 675);
  line(300, 300, 640, 675);
  //left
  arc(555, 325, 50, 130, 55, -30);
  arc(460, 208, 55, 120, 55, -30);
  arc(480, 400, 219, 200, 0, HALF_PI);
  arc(417, 344, 120, 170, 0, HALF_PI);
  arc(565, 150, 120, 225, 55, -30);
  //right
  arc(106, 341, 58, 180, 40, 36);
  arc(215, 258, 170, 170, PI, 130);
  arc(243, 110, 255, 180, PI, 130);
  arc(160, 244, 330, 300, PI, 130);
  arc(146, 399, 280, 120, HALF_PI, PI);
  //up
  arc(353, 110, 280, 80, 200, 44);
  arc(278, 155, 130, 70, PI+QUARTER_PI, 0);
  arc(250, 70, 250, 70, PI+QUARTER_PI, TWO_PI);
  arc(430, 50, 245, 70, PI+QUARTER_PI, TWO_PI);
  //down
  arc(354, 460, 185, 60, 44, 204);
  arc(220, 430, 147, 30, 44, 204);
  arc(260, 450, 400, 200,HALF_PI, 185);
  arc(366, 500, 230, 80, 44, 204);
  
  
  
  stroke(105);
  strokeWeight(1);
  fill(0);
  //body
  ellipse(300,290,200,200);
  //head
  ellipse(300,370,160,160);

  noFill();
  stroke(0);
  strokeWeight(5);
  //left legs
  arc(220, 320, 270, 140, 154, 30);
  arc(200, 350, 200, 160, 154, 30);
  arc(331, 370, 450, 200, 154, 54);
  arc(420, 400, 600, 250, 154, 54);
  //right legs
  arc(290, 370, 400, 190, -1, 333);
  arc(300, 390, 350, 190, -1, 333);
  arc(300, 330, 440, 180, -1, 333);
  arc(290, 335, 410, 160, -1, 333);
  
  //eyes
  fill(255);
  strokeWeight(0);
  ellipse(260,385,35,13);
  ellipse(340,385,35,13);
  fill(255,0,0);
  ellipse(260,385,5,14);
  ellipse(340,385,5,14);
  
  //mouth
  fill(255);
  arc(300, 430, 50, 10, 44, 154);
  
  
  
  
  
  var i,
    j,
    num = 20,
    margin = 0,
    gutter = 0, //distance between each cell
    cellsize = ( width - (2 * margin) - gutter * (num - 1) ) / (num - 1),
    circleNumber = 0; // counter

  for ( i = 0; i < num; i++ ) {
    for ( j = 0; j < num; j++ ) {

      // different way to calculate the circle number from w2_04
      circleNumber = (i * num) + j;

      var tx = margin + cellsize * i + gutter * i,
        ty = margin + cellsize * j + gutter * j;

      movingCircle( tx, ty, cellsize, circleNumber );
    }
  }
}

function movingCircle( x, y, size, offset ) {

  var circlePeriod = frame_rate_value * 1.0,
    circleAge = ( ( frameCount + offset ) % Math.floor( circlePeriod ) ) /
      circlePeriod,
    circleSize = size * 2.0 * sin( circleAge * HALF_PI );

  strokeWeight( 2 );
  stroke( 255, lerp( 255, 0, circleAge ) );
  fill( lerp( 128, 0, circleAge ), lerp( 120, 0, circleAge ) );
  ellipse( x - size / 2, y - size / 2, circleSize, circleSize );
}

/**
 * Called by p5 when a mouse button is clicked
 */
function mouseClicked() {

  // click on right side, increase frame rate
  if ( ( mouseX > ( width / 2 ) ) && frame_rate_value < 120 ) {
    frame_rate_value++;
  }

  // click on left side, decrease frame rate
  if ( ( mouseX < (width / 2) ) && frame_rate_value > 2 ) {
    frame_rate_value--;
  }

  // print the current value on the screen
  print( "Current frame Rate is: " + frame_rate_value );

}