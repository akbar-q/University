// EEE4015 - Map an LDR voltage-divider reading to LED PWM brightness.
// The supplied Diagram.png appears to route the divider output to A5,
// while the original Code.txt reads A0; this sketch follows the diagram.
// Change LDR_PIN if your simulation wiring uses another analogue input.

const byte LDR_PIN = A5;
const byte LED_PIN = 3;  // Uno PWM-capable pin; use a series resistor.

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  const int ldrRaw = analogRead(LDR_PIN);  // Nominal Uno ADC range: 0-1023.

  // Initial mapping assumes the ADC reading rises as the scene gets brighter.
  // If the divider is wired the opposite way, reverse the map endpoints.
  const int brightness = constrain(map(ldrRaw, 0, 1023, 0, 255), 0, 255);
  analogWrite(LED_PIN, brightness);

  Serial.print("LDR raw ADC: ");
  Serial.print(ldrRaw);
  Serial.print(" | LED PWM: ");
  Serial.println(brightness);

  delay(50);
}