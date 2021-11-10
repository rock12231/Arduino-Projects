int ir1=00;
int ir2=00;
int mollp=00;
int motlm=00;
int motrp=00;
int motrm=00;
void setup(){
    pinMode(ir1,INPUT);
    pinMode(ir2,INPUT);
    pinMode(motlp,OUTPUT);
    pinMode(motlm,OUTPUT);
    pinMode(motrp,OUTPUT);
    pinMode(motrm,OUTPUT);    
  }
  void loop(){
    if(ir1==LOW&&ir2==LOW){
        digitalWrite(motlp,HIGH);
        digitalWrite(motlm,LOW);
        digitalWrite(motrp,HIGH);
        digitalWrite(motrm,LOW);
      }
      else if(ir1==LOW&&ir2==HIGH){
        digitalWrite(motlp,HIGH);
        digitalWrite(motlm,LOW);
        digitalWrite(motrp,LOW);
        digitalWrite(motrm,LOW);
      }
      else if(ir1==HIGH&&ir2==LOW){
        digitalWrite(motlp,LOW);
        digitalWrite(motlm,LOW);
        digitalWrite(motrp,HIGH);
        digitalWrite(motrm,LOW);
        }
    }
