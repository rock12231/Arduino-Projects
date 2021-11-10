const int motorRPin1 = 6; // motor +   
const int motorRPin2 = 9;  // motor -
const int motorLPin1 = 5; // +    
const int motorLPin2 = 3; // -

int motorLSpeed = 255;//speed full left
int motorRSpeed = 255;//speed full right
int slow = 140;   // speed slow 

const int irPins[6] = {A0, A1, A2, A3, A4, A5}; //pin dif
int irSensorDigital[6] = {0,0,0,0,0,0};// array variabale 
int i,j = 0; // for loop
int irSensors = B000000; // bit dif.



void setup() 
{
  pinMode(motorLPin1,OUTPUT);   //M     
  pinMode(motorLPin2,OUTPUT);   //O
  pinMode(motorRPin1,OUTPUT);   //T      
  pinMode(motorRPin2,OUTPUT);   //O
                                //
  for (int i = 0; i <= 5; i++)//input from IR array
  {pinMode(irPins[i], INPUT);}

Serial.begin(9600); // Starts the serial communication
}

void loop() {
      scan();
     check();   
}   

void check( ) 
{    
     switch (irSensors) {

     case B000000: 
     stopme();
     break;
     
     case B011111: 
     rightS();
     break;
      
     case B111110: 
     leftS();
     break;


     case B001111: 
     left();
     break;
      
     case B111100: 
     right();
     break;


     case B100111: 
     left();
     break;
      
     case B111001: 
     right();
     break;

     case B110011: 
     go();
     break;

     case B111011: 
     go();
     break;
     
     case B110111: 
     go();
     break;
     
     default:
     go();
     
     Serial.print("Unhandled case: ");   
    
     }
}

void ut() 

{
     Serial.println("                         right motor u trun (spin)");
     analogWrite(motorRPin1, 120);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 0);
     analogWrite(motorLPin2, 80);
  
}
void rightS() 

{
     Serial.println("                         right motor forward (spin)");
     analogWrite(motorRPin1, 0);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 200);
     analogWrite(motorLPin2, 0);
  
}
void leftS() 

{
     Serial.println("                         right motor forward (spin)");
     analogWrite(motorRPin1, 200);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 0);
     analogWrite(motorLPin2, 0);
  
}


void right() 

{
     Serial.println("                         right motor forward (spin)");
     analogWrite(motorRPin1, 0);
     analogWrite(motorRPin2, 150);
     analogWrite(motorLPin1, 200);
     analogWrite(motorLPin2, 0);
  
}
void left() 

{
     Serial.println("                         right motor forward (spin)");
     analogWrite(motorRPin1, 200);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 0);
     analogWrite(motorLPin2, 150);
  
}



void go()  // forward
{
     Serial.println("                         forward ");
     analogWrite(motorRPin1, 230);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 230);
     analogWrite(motorLPin2, 0);

}

void stopme()  //stop
{
     Serial.println("                         stop");
     analogWrite(motorRPin1, 0);
     analogWrite(motorRPin2, 0);
     analogWrite(motorLPin1, 0);
     analogWrite(motorLPin2, 0);
  
}


void scan()//Scan IR white and black
{
  for ( byte count = 0; count <= 5;count++ )
{
  bitWrite(irSensors, count, digitalRead( irPins[count] ));
} 
}
