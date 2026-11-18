// EEE4015 - 16x2 HD44780-compatible LCD using a 4-bit parallel bus.
// The R/W pin is tied to GND; the potentiometer sets display contrast.

#include <LiquidCrystal.h>

const byte LCD_RS_PIN = 12;
const byte LCD_ENABLE_PIN = 11;
const byte LCD_D4_PIN = 5;
const byte LCD_D5_PIN = 4;
const byte LCD_D6_PIN = 3;
const byte LCD_D7_PIN = 2;

LiquidCrystal lcd(LCD_RS_PIN, LCD_ENABLE_PIN,
                  LCD_D4_PIN, LCD_D5_PIN, LCD_D6_PIN, LCD_D7_PIN);
unsigned long secondsSinceStart = 0;

void setup() {
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  lcd.print("EEE4015 LCD");
  lcd.setCursor(0, 1);
  lcd.print("Seconds: 0");
}

void loop() {
  delay(1000);
  secondsSinceStart++;

  // Overwrite the second row, then pad it to erase leftover digits.
  lcd.setCursor(0, 1);
  lcd.print("Seconds: ");
  lcd.print(secondsSinceStart);
  lcd.print("   ");
}