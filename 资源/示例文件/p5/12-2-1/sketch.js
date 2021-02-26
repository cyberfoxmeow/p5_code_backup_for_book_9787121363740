let animal;
function preload(){
	//导入关键帧序列
	animal = loadAnimation('img/animate_01.png','img/animate_09.png');
}
function setup() {
	createCanvas(500,500);
}
function draw() {
	background(255);
	animation(animal,250,250);//animation函数播放关键帧序列
}