// EEE4015 - Reverse one DC motor using an L293D-style H-bridge.
// EN controls the driver enable; IN1/IN2 select direction.
// Use a separate, correctly rated motor supply and a common ground.

const byte DRIVER_ENABLE_PIN = 5;
const byte MOTOR_INPUT_1_PIN = 2;
const byte MOTOR_INPUT_2_PIN = 3;
const unsigned long RUN_TIME_MS = 2000;
const unsigned long PAUSE_TIME_MS = 500;

void setup() {
  pinMode(DRIVER_ENABLE_PIN, OUTPUT);
  pinMode(MOTOR_INPUT_1_PIN, OUTPUT);
  pinMode(MOTOR_INPUT_2_PIN, OUTPUT);

  stopMotor();
  digitalWrite(DRIVER_ENABLE_PIN, HIGH);
}

void loop() {
  setMotorDirection(HIGH, LOW);   // Forward for this wiring orientation.
  delay(RUN_TIME_MS);
  stopMotor();
  delay(PAUSE_TIME_MS);

  setMotorDirection(LOW, HIGH);   // Reverse the motor polarity via the bridge.
  delay(RUN_TIME_MS);
  stopMotor();
  delay(PAUSE_TIME_MS);
}

void setMotorDirection(byte input1State, byte input2State) {
  digitalWrite(MOTOR_INPUT_1_PIN, input1State);
  digitalWrite(MOTOR_INPUT_2_PIN, input2State);
}

void stopMotor() {
  digitalWrite(MOTOR_INPUT_1_PIN, LOW);
  digitalWrite(MOTOR_INPUT_2_PIN, LOW);
}