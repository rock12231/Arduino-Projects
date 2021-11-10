const int mrp=6; //right +
const int mrm=9; //right -
const int mlp=11;  //left +
const int mlm=10;  //left -


const int irPins[6] = {A5,A4,A3,A2,A1,A0}; //pin dif
int irSensorDigital[6] = {0,0,0,0,0,0};// array variabale 
int i,j = 0; // for loop

int irSensors = B000000; // bit dif.

int motorLSpeed = 255;//speed full left
int motorRSpeed = 255;//speed full right
int slow = 140;   // speed slow 
void setup() {
  
  
  Serial.begin(9600); // printing on display
  
  // Output of motor
  pinMode(mrp,OUTPUT);
  pinMode(mrm,OUTPUT);
  pinMode(mlp,OUTPUT);
  pinMode(mlm,OUTPUT);
   
  for (int i = 0; i <= 5; i++) 
  {pinMode(irPins[i], INPUT);}
 
}

void loop() {
     scan(); 
     check();
}   

void check( ) 
{    
     switch (irSensors) {

     case B000000:
     you();
     break;

     case B000001: 
     right();
     break;
      
     case B000010:
     right();
     break;
     
     case B000100: 
     go();
     break;

     case B001000: 
     go();
     break;

     case B010000: 
     left();
     break;

     case B100000: 
     left();
     break;
     
     case B000011: 
     right();
     break;
      
     case B000110:
     right();
     break;
     
     case B001100: 
     go();
     break;

     case B011000: 
     left();
     break;

     case B110000: 
     left();
     break;

     case B000111: 
     right();
     break;
      
     case B001110:
     right();
     break;
     
     case B011100: 
     left();
     break;

     case B111000: 
     left();
     break;

     case B111100: 
     left();
     break;
     
     case B001111: 
     right();
     break;
     
     case B011111: 
     right();
     break;

     case B111110: 
     left();
     break;
     
     case B111111:
     stopme();        
     break;

     default:
     Serial.print("????");   
    
     }
}

void go()  // Go
{
     Serial.println("GO... ");
     analogWrite(mrp, 255);
     analogWrite(mrm, 0);
     analogWrite(mlp, 255);
     analogWrite(mlm, 0);
}

void left()  // left
{
     Serial.println("LEFT... ");
     analogWrite(mrp, 200);
     analogWrite(mrm, 0);
     analogWrite(mlp, 0);
     analogWrite(mlm, 150);
}

void right()  // right
{
     Serial.println("RIGHT... ");
     analogWrite(mrp, 0);
     analogWrite(mrm, 150);
     analogWrite(mlp, 200);
     analogWrite(mlm, 0);
}

void stopme()  // stopme
{
     Serial.println("STOPME... ");
     analogWrite(mrp, 0);
     analogWrite(mrm, 0);
     analogWrite(mlp, 0);
     analogWrite(mlm, 0);
}

void you()  // U
{
     Serial.println("u... ");
     analogWrite(mrp, 0);
     analogWrite(mrm, 150);
     analogWrite(mlp, 150);
     analogWrite(mlm, 0);
}

void scan()//Scan IR white and black
{
  for ( byte count = 0; count <= 5;count++ )
{
  bitWrite(irSensors, count, digitalRead( irPins[count] ));
} 
}
