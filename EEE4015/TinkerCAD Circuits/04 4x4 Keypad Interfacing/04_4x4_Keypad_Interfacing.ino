// EEE4015 - Scan a 4x4 matrix keypad and report pressed keys.
// Install/use the Keypad library in the Arduino IDE or TinkerCAD.

#include <Keypad.h>

const byte ROW_COUNT = 4;
const byte COLUMN_COUNT = 4;

// Character layout follows the supplied source sketch.
const char KEY_MAP[ROW_COUNT][COLUMN_COUNT] = {
  {'D', 'C', 'B', 'A'},
  {'#', '9', '6', '3'},
  {'0', '8', '5', '2'},
  {'*', '7', '4', '1'}
};

const byte ROW_PINS[ROW_COUNT] = {4, 5, 6, 7};
const byte COLUMN_PINS[COLUMN_COUNT] = {8, 9, 10, 11};

Keypad keypad = Keypad(makeKeymap(KEY_MAP), ROW_PINS, COLUMN_PINS,
                       ROW_COUNT, COLUMN_COUNT);

void setup() {
  Serial.begin(9600);
  Serial.println("4x4 keypad ready. Press a key.");
}

void loop() {
  const char key = keypad.getKey();

  // getKey() returns NO_KEY when no new key press is detected.
  if (key != NO_KEY) {
    Serial.print("Key pressed: ");
    Serial.println(key);
  }
}