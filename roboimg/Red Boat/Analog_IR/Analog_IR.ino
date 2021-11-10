int temp[100][6];
int analogPin[] = {A0,A1,A2,A3,A4,A5};
int val[6];

void setup() 
{
Serial.begin(9600);  
}

void cal()
{
  if()
  for(int i=0; i<6; i++){
  val[i] = analogRead(analogPin[i]);  
  Serial.print(val[i]); 
  Serial.print("   ");
  for(int j=0; j<=100; j++)
  {
    for(int i=0; i<6; i++)
    {
        temp[i][j]=val[i];
    }
  }
}
Serial.println();
}

void loop()
{
  cal();
  small();
}
void small()
{
  
  }
