let animal;
let animalGroup;
function preload(){
	animal = loadAnimation('img/animate_01.png','img/animate_09.png');
}
function setup() {
	createCanvas(500,500);
	animalGroup = new Group();//创建sprite元素组
}
function draw() {
	background(200);
	animalGroup.bounce(animalGroup);//sprite元素组中的元素具有碰撞反弹功能。
	for(let i=0; i<allSprites.length; i++){ //sprite元素组中的所有元素碰触到屏幕边缘进行回弹
		let s = allSprites[i];
		if(s.position.x<0) {
			s.position.x = 1;
			s.velocity.x = abs(s.velocity.x);
		}
		if(s.position.x>width) {
			s.position.x = width-1;
			s.velocity.x = -abs(s.velocity.x);
		}
		if(s.position.y<0) {
			s.position.y = 1;
			s.velocity.y = abs(s.velocity.y);
		}
		if(s.position.y>height) {
			s.position.y = height-1;
			s.velocity.y = -abs(s.velocity.y);
		}
	}
	drawSprites();
}
function mousePressed() {  //鼠标点击创建加载动画的sprite元素并且放入sprite元素组
	let animalSprite = createSprite(mouseX,mouseY);
	animalSprite.setCollider('circle', -2, 2, 180);//创建半径为180的圆形碰撞体
	animalSprite.setSpeed(random(3), random(0, 360));
	animalSprite.addAnimation('floating',animal);
	animalSprite.scale = random(0.1,0.3);
	animalSprite.mass = animalSprite.scale; //sprite元素质量与比例相同
	animalGroup.add(animalSprite);
}
