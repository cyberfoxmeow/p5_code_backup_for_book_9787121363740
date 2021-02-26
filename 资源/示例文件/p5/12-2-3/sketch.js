let animal;
let animatedSprite
function preload(){
	animal = loadAnimation('img/animate_01.png','img/animate_09.png');
}
function setup() {
	createCanvas(500,500);
	animatedSprite = createSprite(250, 250,360,360);
	animatedSprite.scale = 0.3;
	animatedSprite.addAnimation('floating',animal);
}
function draw() {
	background(200);
	animatedSprite.attractionPoint(1, mouseX, mouseY);//让sprite元素朝向鼠标位置移动
	animatedSprite.maxSpeed = 5;//sprite元素最大移动速度
	drawSprites();
}

