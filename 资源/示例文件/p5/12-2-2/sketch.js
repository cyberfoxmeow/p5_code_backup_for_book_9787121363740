let animal;
function preload(){
	animal = loadAnimation('img/animate_01.png','img/animate_09.png');
}
function setup() {
	createCanvas(500,500);
}
function draw() {
	background(200);
	drawSprites();
}
function mousePressed() { //鼠标按压后在鼠标位置创建sprite元素
	let animatedSprite = createSprite(mouseX, mouseY,360,360);
	animatedSprite.scale = random(0.1,0.3); //设置缩放比例
	animatedSprite.addAnimation('floating',animal);//加载序列帧动画
	animatedSprite.velocity.x = random(-3, 3);//设置初始x速度
	animatedSprite.velocity.y = random(-3, 3);//设置初始y速度
}
