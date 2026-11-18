// EEE4015 - LED interfacing starter sketch
// The supplied Code.txt contains "N/A", so this is a new Arduino example.
// It alternates two LEDs connected to D3 and D5.
// Use one current-limiting resistor in series with each LED.

const byte GREEN_LED_PIN = 3;
const byte RED_LED_PIN = 5;
const unsigned long STEP_INTERVAL_MS = 500;

void setup() {
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(GREEN_LED_PIN, HIGH);
  digitalWrite(RED_LED_PIN, LOW);
  delay(STEP_INTERVAL_MS);

  digitalWrite(GREEN_LED_PIN, LOW);
  digitalWrite(RED_LED_PIN, HIGH);
  delay(STEP_INTERVAL_MS);
}