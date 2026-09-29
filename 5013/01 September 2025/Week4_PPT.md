# Week 4 - Timing, Sound and Display Feedback (3-4h)

---

## Slide 1: A Useful Alarm Must Stay Responsive

- An alarm must sense, decide, sound, show status and respond to a switch.
- Long delays can prevent other tasks from running when needed.
- This week adds buzzer and display feedback while introducing non-blocking timing.

---

## Slide 2: Learning Objectives

- Use `tone()` and `noTone()` for buzzer output.
- Explain why `delay()` is sometimes a problem.
- Use `millis()` for a timed action without freezing the rest of the loop.
- Explain I2C as a shared two-wire interface.
- Display system status on a 16 x 2 I2C LCD in Wokwi.

---

## Slide 3: Buzzer Output

```cpp
tone(BUZZER_PIN, 1000);  // Start a 1 kHz tone.
noTone(BUZZER_PIN);      // Stop the tone.
```

- Frequency is measured in hertz.
- A passive buzzer needs a changing signal to make a tone.
- Use a suitable output circuit on real hardware; do not exceed pin current limits.

---

## Slide 4: `delay()` Is Simple but Blocking

```cpp
digitalWrite(ledPin, HIGH);
delay(5000);
digitalWrite(ledPin, LOW);
```

- During the 5 seconds, the loop does not read the switch or update the display.
- Short delays are acceptable for first experiments.
- Integrated systems need a more responsive pattern.

---

## Slide 5: Non-Blocking Timing with `millis()`

```cpp
unsigned long previousMs = 0;

if (millis() - previousMs >= 500) {
  previousMs = millis();
  // Perform a timed action without stopping other tasks.
}
```

Speaker notes:
- Explain elapsed time, not every detail of unsigned arithmetic.
- The point is that the loop remains free to read sensors and switches.

---

## Slide 6: Lab L07 - Blink Without `delay()` (30 min)

**Build:** one LED.

**Requirements:**

- Toggle LED every 500 ms using `millis()`.
- Print `tick` to serial monitor every second.
- Both tasks must continue together.

**Evidence:** code, serial screenshot and a statement of why this is more responsive than a long `delay()`.

---

## Slide 7: I2C in One Slide

- I2C carries data using two shared lines: SDA and SCL.
- Devices have addresses so the controller can select them.
- Pull-up resistors keep the lines in valid idle states.
- An I2C LCD saves Arduino pins compared with a parallel display.

---

## Slide 8: LCD Setup in Wokwi

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
}
```

- Use Wokwi for this lab so the I2C display and serial monitor are available.
- Verify the address used by the simulated/display module.

---

## Slide 9: Show Alarm Status

```cpp
lcd.setCursor(0, 0);
lcd.print("Alarm:");
lcd.setCursor(7, 0);
lcd.print(alarmActive ? "ON " : "OFF");
```

- The trailing space helps overwrite a longer previous value.
- Do not call `lcd.clear()` continuously in a fast loop; it can flicker.

---

## Slide 10: Lab L08 - Buzzer and LCD Status (40 min)

**Build in Wokwi:** Arduino Uno, passive buzzer and I2C LCD.

**Requirements:**

- Use a variable `alarmActive`.
- When `true`, sound a tone and display `Alarm: ON`.
- When `false`, stop the tone and display `Alarm: OFF`.
- Change the variable temporarily to prove both states.

---

## Slide 11: Interface Planning for the Report

| Device | Interface | Why it is suitable |
| --- | --- | --- |
| LDR | ADC | Measures changing voltage |
| Curtain switch | GPIO | Two-state position input |
| LED/buzzer | GPIO/PWM | Status and alarm output |
| LCD | I2C | Two-wire display connection |

- This supports Task 1 and LO2 design evidence.

---

## Slide 12: Week 4 Evidence

- L07 and L08 simulations.
- Timing/state diagram.
- Updated pin map and interface table.
- Short reflection: one reason for I2C and one reason for non-blocking timing.
