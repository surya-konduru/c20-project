var car, wall;
var speed, weight;

function setup() {
  createCanvas(1500, 400);

  // setup random car speed and weight
  speed = random(55, 100);
  weight = random(400, 2500);

  // create car and wall
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(0, 0, 255);
  wall = createSprite(1400, 200, 60, 300);
  wall.shapeColor = color(180, 180, 180);
}

function draw() {
  background(0, 0, 0);
  drawSprites();

  if (car.x - wall.x < car.width / 2 + wall.width / 2 &&
    wall.x - car.x < car.width / 2 + wall.width / 2) {

    car.velocityX = 0;
    car.x = 1350;

    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation < 100) {
      // green
      car.shapeColor = color(0, 255, 0);
    } else if (deformation > 180) {
      //red
      car.shapeColor = color(255, 0, 0);
    } else {
      // yellow
      car.shapeColor = color(230, 230, 0);
    }

  }
}