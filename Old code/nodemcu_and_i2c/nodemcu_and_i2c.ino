#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define OLED_RESET LED_BUILTIN  //4
Adafruit_SSD1306 display(OLED_RESET);
#if (SSD1306_LCDHEIGHT != 64)
//#error("Height incorrect, please fix Adafruit_SSD1306.h!");
#endif

int x;

void setup() {


  
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  // Clear the buffer.
  display.clearDisplay();
  display.display();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println("AVINASH KUMAR");
  display.println("STATUS :");
  display.setCursor(50,8);
  display.println(x);
  display.display();

}
void show(){
  for(x=1;x<100;x++){
    display.display();
    display.setCursor(50,8);
  display.println(x);
  
  }
  }
void loop() {

display.display();
}
