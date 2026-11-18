// EEE4015 - Use an analogue moisture reading to choose a servo position.
// The 100-count boundary is only a simulator starting point: calibrate it.
// A small hysteresis band prevents rapid switching near the threshold.

#include <Servo.h>

const byte STATUS_LED_PIN = 3;
const byte SERVO_PIN = 5;
const byte MOISTURE_SENSOR_PIN = A0;
const int MOISTURE_THRESHOLD = 100;
const int HYSTERESIS_COUNTS = 10;
const byte POSITION_ABOVE_THRESHOLD = 10;
const byte POSITION_BELOW_THRESHOLD = 120;
const unsigned long SAMPLE_INTERVAL_MS = 250;

Servo cabinetServo;
bool readingAboveThreshold = false;
unsigned long lastSampleTime = 0;

void setup() {
  pinMode(STATUS_LED_PIN, OUTPUT);
  cabinetServo.attach(SERVO_PIN);
  cabinetServo.write(POSITION_BELOW_THRESHOLD);
  digitalWrite(STATUS_LED_PIN, HIGH);
  Serial.begin(9600);
}

void loop() {
  const unsigned long now = millis();
  if (now - lastSampleTime < SAMPLE_INTERVAL_MS) {
    return;
  }
  lastSampleTime = now;

  const int moistureRaw = analogRead(MOISTURE_SENSOR_PIN);

  if (moistureRaw > MOISTURE_THRESHOLD + HYSTERESIS_COUNTS) {
    readingAboveThreshold = true;
  } else if (moistureRaw < MOISTURE_THRESHOLD - HYSTERESIS_COUNTS) {
    readingAboveThreshold = false;
  }

  cabinetServo.write(readingAboveThreshold
    ? POSITION_ABOVE_THRESHOLD
    : POSITION_BELOW_THRESHOLD);
  digitalWrite(STATUS_LED_PIN, readingAboveThreshold ? LOW : HIGH);

  Serial.print("Moisture raw ADC: ");
  Serial.print(moistureRaw);
  Serial.print(" | state: ");
  Serial.println(readingAboveThreshold ? "above threshold" : "below threshold");
}