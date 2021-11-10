#include <QTRSensors.h>
 
#define SETPOINT    3500  // The goal for readLine (center)
#define KP          0.2   // The P value in PID
#define KD          1     // The D value in PID
#define L_MOTOR     9     // Left motor pin
#define R_MOTOR     10    // Right motor pin
#define MAX_SPEED   200   // The max speed to set motors to
#define SET_SPEED   200   // The goal speed to set motors to
#define MIN_SPEED   0     // The min speed to set motors to
#define NUM_SENSORS 8     // The number of QTR sensors
#define TIMEOUT     2500  // Timeout for the QTR sensors to go low
#define EMITTER_PIN 2     // Emitter pin for QTR sensor emitters
 
// PID **************************************
int lastError = 0;  // For storing PID error
 
// SENSORS **********************************
// sensors 0 through 7 are connected to digital pins 3 through 10, respectively
QTRSensorsRC qtrSensors((unsigned char[]) {3, 4, 5, 6, 7, 8, 9, 10}, NUM_SENSORS, TIMEOUT, EMITTER_PIN);
unsigned int sensorValues[NUM_SENSORS];   // For sensor values of readLine()
 
void setup() {
  // Initialize Pins
  pinMode(L_MOTOR, OUTPUT);
  pinMode(R_MOTOR, OUTPUT);
}
 
void loop() {
  // Take a reading
  unsigned int linePos = qtrSensors.readLine(sensorValues);
 
  // Compute the error
  int error = SETPOINT - linePos;
 
  // Compute the motor adjustment
  int adjust = error*KP + KD*(error - lastError);
 
  // Record the current error for the next iteration
  lastError = error;
 
  // Adjust motors, one negatively and one positively
  analogWrite(L_MOTOR, constrain(SET_SPEED - adjust, MIN_SPEED, MAX_SPEED));
  analogWrite(R_MOTOR, constrain(SET_SPEED + adjust, MIN_SPEED, MAX_SPEED));
}
