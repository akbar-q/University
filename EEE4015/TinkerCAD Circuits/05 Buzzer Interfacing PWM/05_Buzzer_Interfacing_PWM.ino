// EEE4015 - Demonstrate a changing PWM duty cycle on D6.
// This changes the average drive level, not the PWM frequency/pitch.
// Use a compatible low-voltage buzzer and follow its current rating.

const byte BUZZER_PIN = 6;
const int PWM_MIN = 0;
const int PWM_MAX = 255;
const unsigned int STEP_DELAY_MS = 8;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.begin(9600);
  analogWrite(BUZZER_PIN, PWM_MIN);
}

void loop() {
  for (int duty = PWM_MIN; duty <= PWM_MAX; duty++) {
    analogWrite(BUZZER_PIN, duty);
    Serial.println(duty);
    delay(STEP_DELAY_MS);
  }

  for (int duty = PWM_MAX; duty >= PWM_MIN; duty--) {
    analogWrite(BUZZER_PIN, duty);
    Serial.println(duty);
    delay(STEP_DELAY_MS);
  }
}