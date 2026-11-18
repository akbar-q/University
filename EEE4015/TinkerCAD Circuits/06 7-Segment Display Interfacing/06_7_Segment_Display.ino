// EEE4015 - Display the letter A on a single-digit seven-segment display.
// This pattern assumes a common-cathode display: HIGH turns a segment on.
// Use a current-limiting resistor for every driven segment.

const byte SEGMENT_A_PIN = 4;
const byte SEGMENT_B_PIN = 5;
const byte SEGMENT_C_PIN = 8;
const byte SEGMENT_D_PIN = 7;
const byte SEGMENT_E_PIN = 6;
const byte SEGMENT_F_PIN = 3;
const byte SEGMENT_G_PIN = 2;
const byte SEGMENT_DP_PIN = 9;

const byte SEGMENT_PINS[] = {
  SEGMENT_A_PIN, SEGMENT_B_PIN, SEGMENT_C_PIN, SEGMENT_D_PIN,
  SEGMENT_E_PIN, SEGMENT_F_PIN, SEGMENT_G_PIN, SEGMENT_DP_PIN
};

void setup() {
  for (byte index = 0; index < sizeof(SEGMENT_PINS) / sizeof(SEGMENT_PINS[0]); index++) {
    pinMode(SEGMENT_PINS[index], OUTPUT);
  }
  displayLetterA();
}

void loop() {
  // The display remains on. Add other program work here.
}

void displayLetterA() {
  digitalWrite(SEGMENT_A_PIN, HIGH);
  digitalWrite(SEGMENT_B_PIN, HIGH);
  digitalWrite(SEGMENT_C_PIN, HIGH);
  digitalWrite(SEGMENT_D_PIN, LOW);
  digitalWrite(SEGMENT_E_PIN, HIGH);
  digitalWrite(SEGMENT_F_PIN, HIGH);
  digitalWrite(SEGMENT_G_PIN, HIGH);
  digitalWrite(SEGMENT_DP_PIN, LOW);
}