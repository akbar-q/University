// EEE4015 - Read two push-buttons with internal pull-up resistors.
// INPUT_PULLUP means a released button reads HIGH and a pressed
// button connected to GND reads LOW (active-low logic).

const byte ON_BUTTON_PIN = 2;
const byte OFF_BUTTON_PIN = 3;
const unsigned long REPORT_INTERVAL_MS = 250;

unsigned long lastReportTime = 0;

void setup() {
  pinMode(ON_BUTTON_PIN, INPUT_PULLUP);
  pinMode(OFF_BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  const unsigned long now = millis();
  if (now - lastReportTime < REPORT_INTERVAL_MS) {
    return;
  }
  lastReportTime = now;

  const bool onButtonPressed = digitalRead(ON_BUTTON_PIN) == LOW;
  const bool offButtonPressed = digitalRead(OFF_BUTTON_PIN) == LOW;

  Serial.print("ON button pressed: ");
  Serial.println(onButtonPressed ? "yes" : "no");
  Serial.print("OFF button pressed: ");
  Serial.println(offButtonPressed ? "yes" : "no");
  Serial.println();
}