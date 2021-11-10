const int irPins0 = 8;
const int irPins1 = 7;
const int irPins2 = 6;
const int irPins3 = 5;
const int irPins4 = 4;
const int irPins5 = 3;

int ir0=0;
int ir1=0;
int ir2=0;
int ir3=0; 
int ir4=0;
int ir5=0;

void setup()
{
  pinMode(irPins0,INPUT);
  pinMode(irPins1,INPUT);
  pinMode(irPins2,INPUT);
  pinMode(irPins3,INPUT);
  pinMode(irPins4,INPUT);
  pinMode(irPins5,INPUT);
  
  Serial.begin(9600);
}
void Update(void);
void loop() 
{
 Update();
 }
void Update(void)
  {
    ir0 = analogRead(irPins0);
    ir1 = analogRead(irPins1);
    ir2 = analogRead(irPins2);
    ir3 = analogRead(irPins3);
    ir4 = analogRead(irPins4);
    ir5 = analogRead(irPins5);
 
    Serial.print(" ONE:");
    Serial.print(ir0);
    Serial.print(" TWO:");
    Serial.print(ir1);
    Serial.print(" THREE:");
    Serial.print(ir2);
    Serial.print(" FOUR:");
    Serial.print(ir3);
    Serial.print(" FIVE:");
    Serial.print(ir4);
    Serial.print(" SIX:");
    Serial.print(ir5);
    Serial.println();
    delay(100);

    
  }


