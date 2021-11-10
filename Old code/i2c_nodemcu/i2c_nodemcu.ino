#include &lt;Wire.h&gt;
#include &quot;SSD1306.h&quot; 

SSD1306  display(0x3c, 21, 22);
int counter = 0;

void setup() {
  display.init();
}

void loop() {
  display.clear();
  display.drawString(0,0, &quot;Counter: &quot; + String(counter));
  display.display();

  counter ++;
  delay(1000);
}
