// EEE4015 - 16x2 I2C LCD using the Adafruit_LiquidCrystal API
// used by this TinkerCAD example. Backpack address 0 is simulator-specific.

#include <Adafruit_LiquidCrystal.h>

// The TinkerCAD circuit uses address/index 0. Physical backpacks commonly
// use a different I2C address; scan or check the module documentation.
Adafruit_LiquidCrystal lcd(0);

void setup() {
  lcd.begin(16, 2);
  lcd.setBacklight(1);

  lcd.setCursor(0, 0);
  lcd.print("EEE4015");
  lcd.setCursor(0, 1);
  lcd.print("I2C LCD ready");
}

void loop() {
  // Static message: the LCD keeps its contents without repeated printing.
}