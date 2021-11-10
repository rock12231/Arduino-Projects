int mrp=6; //right +
int mrm=9; //right -
int mlp=11;  //left +
int mlm=10;  //left -

void setup()
{
  pinMode(mrp,OUTPUT);
  pinMode(mrm,OUTPUT);
  pinMode(mlp,OUTPUT);
  pinMode(mlm,OUTPUT);
}

void loop() 

{

    analogWrite(mrp,255);
    analogWrite(mrm,0); 
    analogWrite(mlp,255);
    analogWrite(mlm,0);
}
