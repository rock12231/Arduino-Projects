int left=13;
int right=11;
int center=12;

int motlp=9;
int motlm=6;
int motrp=5;
int motrm=3;



int Left;
int Center;
int Right;

void setup() {
  // put your setup code here, to run once:
  pinMode(left,INPUT);
  pinMode(center,INPUT);
  pinMode(right,INPUT);
  
  pinMode(motlp,OUTPUT);
  pinMode(motlm,OUTPUT);
  pinMode(motrp,OUTPUT);
  pinMode(motrm,OUTPUT);
  
}
void Update(void);
void loop() {
      Update();
  if(Left==1&&Center==0&&Right==1) //run
  {
    analogWrite(motlp,255);
    analogWrite(motlm,0);
    analogWrite(motrp,255);
    analogWrite(motrm,0);
  }
  if((Left==0&&Center==0&&Right==1)) //left
  {
    analogWrite(motlp,0);
    analogWrite(motlm,0);
    analogWrite(motrp,200);
    analogWrite(motrm,0);
  }
   if((Left==1&&Center==0&&Right==0))//right
   {
    analogWrite(motlp,200);
    analogWrite(motlm,0);
    analogWrite(motrp,0);
    analogWrite(motrm,0);
  }
     if((Left==1&&Center==1&&Right==0))//s right
   {
    analogWrite(motlp,200);
    analogWrite(motlm,0);
    analogWrite(motrp,0);
    analogWrite(motrm,140);
  }
   if((Left==0&&Center==1&&Right==1)) //s left
  {
    analogWrite(motlp,0);
    analogWrite(motlm,140);
    analogWrite(motrp,200);
    analogWrite(motrm,0);
  }
  if(Left==0&&Center==0&&Right==0)
  {
    analogWrite(motlp,0);
    analogWrite(motlm,0);
    analogWrite(motrp,0);
    analogWrite(motrm,0);
    delay(30);  
  }
 }
void Update(void){
  Left=digitalRead(left);
  Center=digitalRead(center);
  Right=digitalRead(right);
}
