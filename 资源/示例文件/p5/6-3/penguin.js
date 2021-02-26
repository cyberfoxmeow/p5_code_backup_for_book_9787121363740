//企鹅类的属性包括企鹅x，y位置、企鹅颜色、企鹅大小和企鹅运动速度，方法包括企鹅运动和绘制企鹅
class Penguin{
	constructor(penguinX,penguinY,penguinColor,penguinScale,penguinSpeed){
		this.pX = penguinX;
		this.pY = penguinY;
		this.pColor = penguinColor;
		this.pScale = penguinScale;
		this.pSpeed = penguinSpeed;
		this.direction = 1;
	}
	move() { 
   		if(this.pX>width){
   			this.direction = -this.direction;
   		}
   		else if(this.pX<0){
   			this.direction = -this.direction;
   		}
   		this.pX += this.pSpeed*this.direction;
	}
	display() {
		push();
		rectMode(CENTER);
   		translate(this.pX, this.pY);
		scale(this.pScale);
		//两条腿
		noStroke();
		fill(255,160,45);
		ellipse(-100,225,100,50);
		ellipse(100,225,100,50);
		//身子
		fill(this.pColor);
		ellipse(-150,90,60,235);
		ellipse(150,90,60,235);
		rect(0,100,300,250);
		stroke(this.pColor);  
		strokeWeight(300); 
		line(0, -85, 0, 30);
		//眼睛和肚皮
		fill(255);
		noStroke();
		ellipse(-70,-80,120,120);
		ellipse(70,-80,120,120);
		ellipse(0,95,200,220);
		//眼球
		fill(0);
		ellipse(-70,-80,15,15);
		ellipse(70,-80,15,15);
		//嘴巴
		noStroke();
		fill(255,160,45);
		triangle(-15,-50,15,-50,0,-25);
		pop();
	}
}