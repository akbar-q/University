// EEE4015 - Two independent button-to-LED control channels.
// Buttons use INPUT_PULLUP, so LOW means pressed.
// Each LED must have its own series current-limiting resistor.

const byte GOOD_LED_PIN = 3;
const byte BAD_LED_PIN = 5;
const byte GOOD_BUTTON_PIN = 9;
const byte BAD_BUTTON_PIN = 8;

void setup() {
  pinMode(GOOD_LED_PIN, OUTPUT);
  pinMode(BAD_LED_PIN, OUTPUT);
  pinMode(GOOD_BUTTON_PIN, INPUT_PULLUP);
  pinMode(BAD_BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  const bool goodButtonPressed = digitalRead(GOOD_BUTTON_PIN) == LOW;
  const bool badButtonPressed = digitalRead(BAD_BUTTON_PIN) == LOW;

  digitalWrite(GOOD_LED_PIN, goodButtonPressed ? HIGH : LOW);
  digitalWrite(BAD_LED_PIN, badButtonPressed ? HIGH : LOW);
}